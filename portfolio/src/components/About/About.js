import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import { Col, Row } from 'reactstrap'

function About(){
    return (
        <>
        <div className='container'>
            <div>
                <h1> About Me</h1>
                <p>An aspiring Full-Stack Web Developer residing in Orlando, Florida. I am currently 28 years old and have recently received a certificate in Full-Stack development through UCF. I have 10 years of experience in Grocery retail throuh Publix Super Markets in which I held a variety of positions ranging from in-store retail to corporate support, most-recently as a UX Content Designer. I am also a proud Cat-Dad to two wonderful cats, Gatsby & Winston.</p>
                <div className='languages'>
                <Row>
    <Col
      sm="3"
    >
      HTML, CSS, JavaScript, Node, Handlebars
    </Col>
    <Col
      sm="3"
    >
      JQuery, Express, MySQL, NoSQL, MongoDB, Mongoose
    </Col>
  </Row>
  </div>
            </div>
        </div>
        </>
    );
};

export default About;