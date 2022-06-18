import { createSlice } from "@reduxjs/toolkit";
import { useRouteMatch } from "react-router";

export const GameSlice = createSlice({
  name: "Games",
  initialState: {
    originalGames: [], //all games returned from API
    filteredGames: [],
    filter: {
      genre: "",
      platform: "",
      search: "",
    },
    latestGames: [],
  },
  reducers: {
    getGames: (state, action) => {
      state.originalGames = action.payload;
      state.filteredGames = action.payload;
    },
    // search: (state, action) => {
    //   const key = action.payload.toLowerCase(); // what the user search for
    //   state.filteredGames = state.originalGames.filter((item) =>
    //     item.title.toLowerCase().includes(key)
    //   );
    // },
    filter: (state, action) => {
      state.filter = action.payload;
      const search = state.originalGames.filter((item) =>
        item.title.toLowerCase().includes(action.payload.search.toLowerCase())
      );
      const byGenre = search.filter((item) =>
        item.genre.includes(action.payload.genre)
      );
      const byPlatform = byGenre.filter((item) =>
        item.platform.includes(action.payload.platform)
      );
      state.filteredGames = byPlatform;
    },
    latest: (state, action) => {
      state.latestGames = state.originalGames.filter((item) => {
        const date = new Date(item.release_date); //transfering date string to actual date
        if (
          (date.getFullYear() == 2021 && date.getMonth() == 11) || //11 is actually 12 for months
          date.getFullYear() == 2022
        ) {
          return true;
        } else {
          return false;
        }
      });
    },
  },
});

export const { getGames, filter, latest } = GameSlice.actions;
export default GameSlice.reducer;
