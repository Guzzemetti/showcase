import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import { Col, Row } from 'reactstrap'

function About(){
    return (
        <>
        <div className='container'>
            <div>
                <h1> About Me</h1>
                <Row>
    <Col
      className="bg-light border"
      sm="4"
      xs="6"
    >
      .col-6 .col-sm-4
    </Col>
    <Col
      className="bg-light border"
      sm="4"
      xs="6"
    >
      .col-6 .col-sm-4
    </Col>
    <Col
      className="bg-light border"
      sm="4"
    >
      .col-sm-4
    </Col>
  </Row>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit accusantium expedita maiores ipsum recusandae doloremque sapiente alias, dolores nam provident aut suscipit vel quis eos, libero perferendis magnam? Dolorum.</p>
            </div>
        </div>
        </>
    );
};

export default About;