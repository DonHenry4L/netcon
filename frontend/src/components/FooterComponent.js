import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="mt-5">
          <Col className="bg-dark text-white text-center py-5 footer_component">
            <span className="copyright_italic">Copyright &copy;2023</span>{" "}
            Netcon Technologies ltd. <h2>RC:</h2>
            <span>1410268</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
