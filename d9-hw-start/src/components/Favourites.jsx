import { Button, Row, Col, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { REMOVE_FROM_FAVOURITE } from "../redux/reducers";
const Favourites = () => {
  const favourites = useSelector((state) => state.favourite.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col xs={8} className="mx-auto my-3">
          <h1>Favourites</h1>
          <Button onClick={() => navigate("/")}>Home</Button>
        </Col>
        <Col xs={8} className="mx-auto my-3">
          <ListGroup>
            {favourites.map((fav, i) => (
              <ListGroupItem key={i}>
                <Button
                  variant="danger"
                  className="me-2"
                  onClick={() =>
                    dispatch({
                      type: REMOVE_FROM_FAVOURITE,
                      payload: fav,
                    })
                  }
                >
                  Remove
                </Button>
                <Link to={"/" + fav}>{fav}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default Favourites;
