import React, { Component } from 'react';
import { Container, Col, Row, Card, ListGroup } from "react-bootstrap";

class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <div className="d-flex align-items-center me-5">
                            <div className="flex-shrink-0">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://midnightroulette.files.wordpress.com/2012/06/f01.jpg"
                                    alt="photo" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>History of the AE86</h5>
                                <p>
                                The AE86 generation of the Toyota Corolla Levin and Toyota Sprinter Trueno is a small, lightweight coupe or hatchback introduced by Toyota in 1983 as part of the fifth generation Toyota Corolla lineup. For the purpose of brevity, the insider-chassis code of “AE86” depicts the 1600 cc RWD model from the range. In classic Toyota code, the “A” represents the engine that came in the car (4A series), “E” represents the Corolla, “8” represents the fifth generation (E80 series) and “6” represents the variation within this generation.

The Levin has fixed-headlights, and the Trueno has retractable headlights, but both can be hatchback or coupe. The export model name Corolla covers both variations. The AE86 (along with the lower spec 1,452 cubic centimetres (1.452 L) AE85 and 1587 cc SR5 versions) was rear wheel drive (unlike the front wheel drive CE80, EE80 and AE82 models), and is among the last rear-drive cars of its type, at a time when most passenger cars were being switched to front-drive. In 1987, there was a limited edition model of the AE86 called “Black Limited” that served as a send-off model before the AE86 chassis was replaced later that year by the front wheel drive AE92 Corolla/Sprinter range.

The AE86 was also known as the “Hachi-Roku (ハチロク)”, Japanese for “eight-six”. Similarly the AE85 was commonly called “Hachi-Go (ハチゴー)”, meaning “eight-five”. The word “trueno” is Spanish for thunder, and “levin” is Middle English for “lightning”. In Japan, the Sprinter Trueno was exclusive to Toyota Japan dealerships called Toyota Vista Store,while the Corolla Levin was exclusive to Toyota Corolla Store.

The AE86 later inspired the Toyota 86 (also badged as the GT86, FT86, Scion FR-S and Subaru BRZ).
                                </p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center me-5">
                            <div className="flex-shrink-0">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2023/03/06000550/Toby_Thyer_Photographer-132-1200x800.jpg"
                                    alt="photo" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>30 Years Perfecting A Porsche 930 Turbo</h5>
                                <p>
                                The 930 Turbo is undoubtedly one of the most iconic and important cars in Porsche’s history. So how do you improve the perfect poster car?

Well, Osamu Ebizuka has spent the past three decades building his ultimate version of the 911 that captured his heart as a teenager.


During the late-1970s supercar boom, when Osamu-san was still in Japanese elementary school, Lamborghinis, Ferraris and Maseratis were taking over the world.

But it was the Porsche 930 Turbo that captivated him, and the seed of inevitability was planted. Not surprising considering the success the ‘Moby Dick’ 935 was enjoying on race tracks at the time.

When Osamu-san was finally old enough to drive, there was no chance he was getting behind the wheel of a Porsche, or any other supercar of the time. So he settled for the next best thing – Japanese domestic bliss.

Today, there are a number of JDM classics that can rival and exceed the desirability and price tag of a Porsche 930 Turbo. Back in the day, however, the cars that Osamu-san drove were still attainable fun for Japan’s younger generations. A new S30 Nissan Fairlady Z cost around the equivalent of US$27,000 in today’s money, compared to US$127,000 for a 930 Turbo.

                                </p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center me-5">
                            <div className="flex-shrink-0">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2023/03/19130008/motorama-toronto-2023-dave-thomas-speed-hunters-2-6-1200x800.jpg"
                                    alt="photo" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>Taking It Back To The ’80s & ’90s At Motoramat</h5>
                                <p>
                                One of the podcasts I listen to religiously is called Southern Vangard Radio. A hip-hop-centric broadcast, ‘Vangard features three, six-to-eight song mixes separated by talk breaks.

During one of talk breaks about 15 episodes back, the two hosts lamented missing their life from the 1990s. I found the segment both hilarious and relatable. I was pretty young throughout the ’90s, so truthfully I don’t miss all of my life from then. But I do miss how much cooler the cars were.

The summertime Friday night street orchestra was a mix of Flowmaster-equipped Fox Body Mustangs and Hondas with AEM cold air intakes that sounded immense when VTEC kicked in.

Every third Acura DC Integra seemed to have an ultra-rare JDM front end swap, and the latest club hits could be heard clearly through the T-tops of many third-generation Camaros.

Any right-hand drive car that rolled up to Tim Hortons – Canadian doughnut shops that were the local hang-out spots in the ’90s through to the early-’00s – was instantly mobbed by onlookers.

Air suspension? Well, that was mostly just sorcery for those guys running around with murals on their tailgates and their J-body friends.

Thankfully, cars from the ’90s are starting to receive proper classic treatment. The respect that was given vehicles from the ’60s and ’70s in the 1990s is being paid forward. It’s now not at all uncommon to see ’90s cars being torn down to their foundations and built back up as either restorations or restomods.


                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>JDM</ListGroup.Item>
                                <ListGroup.Item>Stance</ListGroup.Item>
                                <ListGroup.Item>Bosozoku</ListGroup.Item>
                                <ListGroup.Item>Race Cars</ListGroup.Item>
                                <ListGroup.Item>Performance Cars</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col >
                    <Card className="mt-3 bg-light">
                        <Card.Body>
                            <Card.Title>Wait for more</Card.Title>
                            <Card.Text>
                                Interesting information
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        );
    }
}

export default Blog;
