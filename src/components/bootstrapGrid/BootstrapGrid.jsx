import { Container, Row, Col } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';


const BootstrapGrid = (props) => {
    return (
        <Container className='mt-5 mb-5'>
            <Row>
                <Col>
                    {props.left}
                </Col>
                <Col>
                    {props.right}
                </Col>
            </Row>
        </Container>
    );
}

export default BootstrapGrid;