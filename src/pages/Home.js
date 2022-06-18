import React from "react";

import Footer from "../components/standard/Footer";
import { NavBar } from "../components/standard/NavBar";
import GameList from "../components/GameList";

export function Home() {
  return (
    <>
      <NavBar />

      <GameList />

      <Footer />
    </>
  );
}
