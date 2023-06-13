import React, { Component } from 'react';
import {Button, Card, CardImg, Container} from "react-bootstrap";
import 'D:/React_lab4/src/css/home.css';
class Home extends Component {
    render() {
        return (
          
            <Container>
                <h2 className="text-center m-4">{this.props.language === 'en' ? 'TOP-3 AUTOSPORT' : 'ТОП-3 Автоспорт'}</h2>
                <div className="row">
                    <div className="col">
                        <Card className="m-4 text-center" bg="light" border="primary">
                            <Card.Img
                                variant="top"
                                src="https://eu-assets.simpleview-europe.com/wiltshire2015/imageresizer/?image=%2Fdmsimgs%2Ffor-web-1_1527025393.jpg&action=ProductDetail"
                            />
                            <Card.Body>
                                <Card.Title>{this.props.language === 'en' ? 'Circuit Racing' : 'Кругові Гонки'}</Card.Title>
                                <Card.Text>
                                    TOP 1
                                </Card.Text>
                                <Button variant="primary">{this.props.language === 'en' ? 'A number of cars race wheel-to-wheel on a race track. The winner is the first competitor to reach the chequered flag, which falls once the designated number of race laps or a time limit has been completed. Most meetings comprise practise sessions, qualifying and at least one race.' : 'Кілька автомобілів мчить колесо до колеса на гоночному треку. Переможцем стає той учасник, який першим досягне картатого прапорця, який випадає після завершення визначеної кількості кіл гонки або ліміту часу. Більшість зустрічей включають тренування, кваліфікацію та принаймні одну гонку.'} </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card className="m-4 text-center" bg="light">
                            <Card.Img
                                variant="top"
                                src="https://i.pinimg.com/736x/96/7a/a5/967aa5e8f1375edf542e46686d39f7d9.jpg"
                            />
                            <Card.Body>
                                <Card.Title>{this.props.language === 'en' ? 'Drifting' : 'Дрифт'}</Card.Title>
                                <Card.Text>
                                    TOP 2
                                </Card.Text>
                                <Button variant="primary">{this.props.language === 'en' ? 'Drifting is a sport that focuses on a particular driving technique of the same name, which has been used in other well-known motorsports, such as rally and speedway racing, for numerous years. Car drifting is all about using oversteer to get the vehicle to drive sideways through corners. This has to happen at a high speed and while the driver remains in full control of the car.' : 'Дрифт — це вид спорту, який зосереджується на певній техніці водіння з такою ж назвою, яка протягом багатьох років використовується в інших відомих автоспорті, таких як ралі та спідвей. Дрифт автомобіля — це використання надмірної поворотності, щоб змусити автомобіль їхати боком у поворотах. Це має відбуватися на високій швидкості і при цьому водій повністю контролює автомобіль.'}</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col">
                        <Card className="m-4 text-center" bg="light">
                            <Card.Img
                                variant="top"
                                src="https://www.metroleague.org/wp-content/uploads/2022/08/Is-Drag-Racing-Bad-For-Your-Car.jpg"
                            />
                            <Card.Body>
                                <Card.Title>{this.props.language === 'en' ? 'Drag Racing' : 'Драг гонки'}</Card.Title>
                                <Card.Text>
                                    TOP 3
                                </Card.Text>
                                <Button variant="primary">{this.props.language === 'en' ? 'Drag racing is the fastest, loudest and perhaps most spectacular of motorsports, pitting drivers and their cars against one another in pairs from a standing start. The standard course is a straight quarter-mile – sometimes shorter, never longer – and the racing format is instant-knockout.Numerous different vehicle categories range from road-going production cars to Top Fuel Dragsters. Some eliminators feature vehicles of equal performance capabilities competing head-to-head without handicaps. Other eliminators allow vehicles of unequal performance capabilities to race each other using a timed handicap system with staggered starts. First to the finish progresses to the next round; second to the finish is eliminated. It’s very decisive. The procedure repeats until a single winner is left standing in each eliminator.' : 'Дрег-рейсинг — це найшвидший, найгучніший і, мабуть, найвидовищніший з автоспорту, у якому водії та їхні машини протистоять один одному в парах зі старту. Стандартна траса — це пряма чверть милі — іноді коротша, ніколи не довша — і формат перегонів — це миттєвий нокаут. Численні різні категорії транспортних засобів варіюються від серійних дорожніх автомобілів до Top Fuel Dragsters. Деякі елімінатори оснащені транспортними засобами однакової продуктивності, які змагаються один до одного без недоліків. Інші елімінатори дозволяють транспортним засобам з нерівними характеристиками брати участь у змаганнях один з одним, використовуючи систему часових гандикапів із шаховими стартами. Перший до фінішу переходить до наступного раунду; другий до фінішу вибуває. Це дуже вирішально. Процедура повторюється, поки в кожному елімінаторі не залишиться один переможець.'}</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>


        );
    }
}

export default Home;
