import { ListGroup, Container,Col ,Row } from "react-bootstrap";

export const Extra = () =>{
    return (
        <section className="extra" id="extra">
            <Container>
                <Row>
                    <Col>
                    <div className="extra-list">
                        <h2>Extra-Curricular</h2>
                        <p>"Beyond the code, explore my engagement in extra-curricular activities. From leadership roles to community involvement, witness my holistic approach to personal and professional development."</p>
                            <ListGroup className="list">
                            <a target="_blank" style={{textDecoration : 'none'}}><ListGroup.Item>Member of Vivacity Design Team.<br />Designed website prototypes in Figma, developed sponsorship proposals, and enhanced user experience.</ListGroup.Item></a>
                            <a target="_blank" style={{textDecoration : 'none'}}><ListGroup.Item>Member of IEEE Student Branch, LNMIIT</ListGroup.Item></a> 
                            <a target="_blank" style={{textDecoration : 'none'}}><ListGroup.Item>Member of Imagination: The Photography Club LNMIIT</ListGroup.Item></a>
                            <a target="_blank" style={{textDecoration : 'none'}}><ListGroup.Item>Member of Sankalp: Tutor at the Village Project</ListGroup.Item></a>

                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      );
}