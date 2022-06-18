import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
} from "mdbreact";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../components/standard/NavBar";
import { latest } from "../JS/slices/gameSlice";

export default function Latest() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getLatestGame = () => {
      dispatch(latest());
    };

    getLatestGame();
  }, [dispatch]);

  const date = useSelector((state) => state.Games.latestGames);

  return (
    <div>
      <NavBar />
      <Container
        style={{
          "background-color": "#263238",
          padding: "20px",
          "max-width": "100%",
        }}
      >
        <MDBRow>
          {date.map((item, index) => (
            <MDBCol
              key={index}
              style={{
                width: "22rem",
                height: "25rem",
                "margin-bottom": "10px",
              }}
            >
              <MDBCard style={{ width: "22rem" }}>
                <img className="img-fluid" src={item.thumbnail} alt="" />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>{item.short_description}</MDBCardText>
                  <h6>
                    <Badge bg="secondary">{item.genre}</Badge>
                  </h6>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </Container>
    </div>
  );
}
