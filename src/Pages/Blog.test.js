import React from 'react';
import { shallow } from 'enzyme';
import Blog from './Blog';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Blog', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Blog />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('initializes the state correctly', () => {
    expect(wrapper.state()).toEqual({
      posts: [
        // array of posts
      ],
      currentPage: 1,
      itemsPerPage: 10,
      ratings: {},
      showModal: false,
      showCommentModal: false,
      commentTitle: '',
      commentContent: '',
      comment: '',
    });
  });

  it('sorts posts by date in ascending order', () => {
    wrapper.instance().sortByDateAsc();
    const sortedPosts = wrapper.state('posts');
    const dates = sortedPosts.map(post => post.date);
    expect(dates).toEqual(dates.sort());
  });

  it('sorts posts by date in descending order', () => {
    wrapper.instance().sortByDateDesc();
    const sortedPosts = wrapper.state('posts');
    const dates = sortedPosts.map(post => post.date);
    expect(dates).toEqual(dates.sort().reverse());
  });

  it('updates the currentPage state when handlePageChange is called', () => {
    wrapper.instance().handlePageChange(2);
    expect(wrapper.state('currentPage')).toEqual(2);
  });

  it('updates the ratings state when handleRatingClick is called', () => {
    const postId = 1;
    const newRating = 4;
    wrapper.instance().handleRatingClick(postId, newRating);
    expect(wrapper.state('ratings')).toEqual({ 1: 4 });
  });

  it('filters posts by category', () => {
    const category = 'JDM';
    wrapper.instance().filterByCategory(category);
    const filteredPosts = wrapper.state('posts');
    expect(filteredPosts.every(post => post.category === category)).toBe(true);
  });

  it('opens the modal when openModal is called', () => {
    const postId = 1;
    wrapper.instance().openModal(postId);
    expect(wrapper.state('showModal')).toBe(true);
    expect(wrapper.state('selectedPostId')).toBe(postId);
  });

  it('closes the modal when closeModal is called', () => {
    wrapper.instance().closeModal();
    expect(wrapper.state('showModal')).toBe(false);
  });

  it('opens the comment modal and sets the comment state when openCommentModal is called', () => {
    const postId = 1;
    const comment = 'Test comment';
    // Mock the getTestDoc function from firebaseConfig to return a promise with the comment data
    jest.spyOn(wrapper.instance(), 'getTestDoc').mockResolvedValueOnce({ [postId]: comment });

    wrapper.instance().openCommentModal(postId);

    expect(wrapper.state('showCommentModal')).toBe(true);
    expect(wrapper.state('selectedPostId')).toBe(postId);
    expect(wrapper.state('comment')).toBe(comment);
  });

  it('closes the comment modal when closeCommentModal is called', () => {
    wrapper.instance().closeCommentModal();
    expect(wrapper.state('showCommentModal')).toBe(false);
  });

  it('updates the commentTitle state when handleCommentTitleChange is called', () => {
    const event = { target: { value: 'Test title' } };
    wrapper.instance().handleCommentTitleChange(event);
    expect(wrapper.state('commentTitle')).toBe('Test title');
  });

  it('updates the commentContent state when handleCommentContentChange is called', () => {
    const event = { target: { value: 'Test content' } };
    wrapper.instance().handleCommentContentChange(event);
    expect(wrapper.state('commentContent')).toBe('Test content');
  });

  it('adds a new comment when handleSubmitComment is called', () => {
    const postId = 1;
    const comment = 'New comment';
    // Mock the setTestDoc function from firebaseConfig to return a resolved promise
    jest.spyOn(wrapper.instance(), 'setTestDoc').mockResolvedValueOnce();

    wrapper.setState({ commentTitle: 'Test title', commentContent: comment });
    wrapper.instance().handleSubmitComment();

    expect(wrapper.state('commentTitle')).toBe('');
    expect(wrapper.state('commentContent')).toBe('');
    expect(wrapper.state('comment')).toBe(comment);
    expect(wrapper.state('showCommentModal')).toBe(false);
    expect(wrapper.state('posts')[postId].comments).toContain(comment);
  });

  it('renders the correct number of BlogPost components', () => {
    const numPosts = wrapper.state('posts').length;
    expect(wrapper.find('BlogPost')).toHaveLength(numPosts);
  });

  it('renders the correct number of Pagination components', () => {
    const numPages = Math.ceil(wrapper.state('posts').length / wrapper.state('itemsPerPage'));
    expect(wrapper.find('Pagination')).toHaveLength(numPages);
  });

  it('renders the modal when showModal is true', () => {
    wrapper.setState({ showModal: true });
    expect(wrapper.find('Modal')).toHaveLength(1);
  });

  it('does not render the modal when showModal is false', () => {
    wrapper.setState({ showModal: false });
    expect(wrapper.find('Modal')).toHaveLength(0);
  });

  it('renders the comment modal when showCommentModal is true', () => {
    wrapper.setState({ showCommentModal: true });
    expect(wrapper.find('CommentModal')).toHaveLength(1);
  });

  it('does not render the comment modal when showCommentModal is false', () => {
    wrapper.setState({ showCommentModal: false });
    expect(wrapper.find('CommentModal')).toHaveLength(0);
  });
});
