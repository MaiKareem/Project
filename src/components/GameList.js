import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../JS/slices/gameSlice";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBContainer,
} from "mdbreact";
import Badge from "react-bootstrap/Badge";

function GameList() {
  const games = useSelector((state) => state.Games.filteredGames);
  const dispatch = useDispatch();

  const fetchGame = () => {
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      headers: {
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        "X-RapidAPI-Key": "c4ff99f4a7mshdcedc244b495d2ep1673f0jsnca99c815114c",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch(getGames(res));
      });
  };
  useEffect(fetchGame, []);

  return (
    <MDBContainer
      style={{
        "background-color": "#263238",
        padding: "20px",
        "max-width": "100%",
      }}
    >
      <MDBRow>
        {games &&
          games.map((item, index) => (
            <MDBCol
              key={index}
              style={{
                width: "22rem",
                height: "25rem",
                "margin-bottom": "10px",
              }}
              className="hover-shadow"
            >
              <MDBCard
                style={{
                  width: "22rem",
                  height: "100%",
                  cursor: "pointer",
                  "background-color": "#37474F",
                }}
                className="hover-shadow"
                onClick={() => {
                  window.location = item.freetogame_profile_url;
                }}
              >
                <div class="view zoom">
                  <img className="img-fluid" src={item.thumbnail} alt="" />
                </div>
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
    </MDBContainer>
  );
}
export default GameList;
