import 'bootstrap/dist/css/bootstrap.min.css';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import './projStyle.css';

function Projects() {
    return (
        <>
            <div className='Container'>
                <div >
                    <CardGroup className='Projects'>
                        <Card>
                            <CardImg
                                alt="Card image cap"
                                src="https://picsum.photos/318/180"
                                top
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Friends in Training
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    This is a wider card with
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg
                                alt="Card image cap"
                                src="https://picsum.photos/318/180"
                                top
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    J.A.T.E.
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    This is a wider card with
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
                <div >
                    <CardGroup className='Projects'>
                        <Card>
                            <CardImg
                                alt="Card image cap"
                                src="https://picsum.photos/318/180"
                                top
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Economic Eats
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    This is a wider card with
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg
                                alt="Card image cap"
                                src="https://picsum.photos/318/180"
                                top
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Placeholder
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Placeholder
                                </CardSubtitle>
                                <CardText>
                                Placeholder
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </>
    )
}

export default Projects;