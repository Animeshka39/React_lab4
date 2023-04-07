import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import { Col, Nav, Row } from "react-bootstrap";
class About extends Component {
    render() {
        return (
<Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">AE86</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">FD3S</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">FC3S</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">GTR</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Miata</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img className="d-block w-100" src="https://drivecontact.net/images/ARTICLES/CARS/TOYOTA/AE86/Toyota_Sprinter_Trueno_GT-APEX_AE86.jpg" alt="picture one" />
                                    <p>
                                    The AE86 series of the Toyota Corolla Levin and Toyota Sprinter Trueno are small, front-engine/rear-wheel-drive models within the front-engine/front-wheel-drive fifth generation Corolla (E80) range—marketed by Toyota from 1983 to 1987 in coupé and liftback configurations.

Lending themselves to racing, the cars were light, affordable, easily modifiable and combined a five-speed manual transmission, optional limited slip differential, MacPherson strut front suspension, high revving (7800 rpm), twin-cam engine with oil cooler (e.g., in the US), near 50/50 front/rear weight balance, and importantly, a front-engine/rear-drive layout—at a time when this configuration was waning industry-wide.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img className="d-block w-100" src="https://assets.qsha-oh.com/img/maker/0460d608-8f20-4ab5-9b4e-6e74cf738522" alt="picture two" />
                                    <p>
                                    The Mazda RX-7 is a front/mid-engine, rear-wheel-drive, rotary engine-powered sports car that was manufactured and marketed by Mazda from 1978 to 2002 across three generations, all of which made use of a compact, lightweight Wankel rotary engine. The third generation was known as the FD. Its engine, the 13B-REW, was the first-ever mass-produced sequential twin-turbocharger system to be exported from Japan. The RX-7 has been tuned by Fujita Engineering and is fitted with an Afflux GT3 body kit.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img className="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Mazda_RX-7_%28FC3S%29_front.JPG/1280px-Mazda_RX-7_%28FC3S%29_front.JPG" alt="picture three" />
                                    <p>
                                    The second generation of the RX-7 ("FC", VIN begins JM1FC3 or JMZFC1), still known as the Mazda Savanna RX-7 in Japan, featured a complete restyling much like similar sports cars of the era such as the Nissan 300ZX. Mazda's development team, led by Chief Project Engineer Akio Uchiyama (内山 昭朗), chose to focus on the American market when designing the FC, where the majority of first-generation of the RX-7 models had been sold. The team drew inspiration from successful sports cars that were popular at the time, such as studying the suspension design of the Porsche 928.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img className="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/4/42/Nissan_Skyline_R32_GT-R_001.jpg" alt="picture fourth" />
                                    <p>
                                    The Nissan Skyline GT-R (Japanese: 日産・スカイラインGT-R, Hepburn: Nissan Sukairain GT-R) is a sports car based on the Nissan Skyline range. The first cars named "Skyline GT-R" were produced between 1969 and 1972 under the model code KPGC10, and were successful in Japanese touring car racing events. This model was followed by a brief production run of second-generation cars, under model code KPGC110, in 1973.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img className="d-block w-100" src="https://cdn-s-www.leprogres.fr/images/0DCFE1D3-5DEE-4C2C-B951-39A72D5E704B/NW_raw/les-phares-escamotables-sont-la-signature-des-premieres-mx-5-1592688413.jpg" alt="picture fifth" />
                                    <p>
                                    The Mazda MX-5 is a lightweight two-passenger sports car manufactured and marketed by Mazda with a front mid-engine, rear-wheel-drive layout. The convertible is marketed as the Mazda Roadster (マツダ・ロードスター, Matsuda Rōdosutā) or Eunos Roadster (ユーノス・ロードスター, Yūnosu Rōdosutā) in Japan, and as the Mazda Miata (/miˈɑːtə/) in the United States, and formerly in Canada, where it is now marketed as the MX-5 but is still commonly referred to as Miata.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;
