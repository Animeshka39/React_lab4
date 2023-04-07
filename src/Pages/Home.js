import React, { Component } from 'react';
import CarouselBoxHk from "D:/React_lab4/src/CarouselBoxHk";
import {Button, Card, CardImg, Container} from "react-bootstrap";
import 'D:/React_lab4/src/css/home.css';
class Home extends Component {
    render() {
        return (
            <CarouselBoxHk/>,
            <Container>
                <h2 className="text-center m-4">TOP-3 AUTOSPORT</h2>
                <div className="row">
                    <div className="col">
                        <Card className="m-4 text-center" bg="light" border="primary">
                            <Card.Img
                                variant="top"
                                src="https://eu-assets.simpleview-europe.com/wiltshire2015/imageresizer/?image=%2Fdmsimgs%2Ffor-web-1_1527025393.jpg&action=ProductDetail"
                            />
                            <Card.Body>
                                <Card.Title>Circuit Racing</Card.Title>
                                <Card.Text>
                                    TOP 1
                                </Card.Text>
                                <Button variant="primary"> A number of cars race wheel-to-wheel on a race track. The winner is the first competitor to reach the chequered flag, which falls once the designated number of race laps or a time limit has been completed. Most meetings comprise practise sessions, qualifying and at least one race.</Button>
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
                                <Card.Title>Drifting</Card.Title>
                                <Card.Text>
                                    TOP 2
                                </Card.Text>
                                <Button variant="primary">Drifting is a sport that focuses on a particular driving technique of the same name, which has been used in other well-known motorsports, such as rally and speedway racing, for numerous years. Car drifting is all about using oversteer to get the vehicle to drive sideways through corners. This has to happen at a high speed and while the driver remains in full control of the car.</Button>
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
                                <Card.Title>Drag Racing</Card.Title>
                                <Card.Text>
                                    TOP 3
                                </Card.Text>
                                <Button variant="primary">Drag racing is the fastest, loudest and perhaps most spectacular of motorsports, pitting drivers and their cars against one another in pairs from a standing start. The standard course is a straight quarter-mile – sometimes shorter, never longer – and the racing format is instant-knockout.


Numerous different vehicle categories range from road-going production cars to Top Fuel Dragsters. Some eliminators feature vehicles of equal performance capabilities competing head-to-head without handicaps. Other eliminators allow vehicles of unequal performance capabilities to race each other using a timed handicap system with staggered starts. First to the finish progresses to the next round; second to the finish is eliminated. It’s very decisive. The procedure repeats until a single winner is left standing in each eliminator.</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>


        );
    }
}

export default Home;
