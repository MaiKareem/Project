import { configureStore } from "@reduxjs/toolkit";
import GameSlice from "./JS/slices/gameSlice";

const store = configureStore({ reducer: { Games: GameSlice } });
export default store;
