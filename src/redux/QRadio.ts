import { createSlice } from "@reduxjs/toolkit";
import { ForRedux } from "../model/State";

const initialState: ForRedux = {
  MenuOpen: false,
  ourData: {
    language: [],
  },
  currentStation: {
    name: "",
    id: "",
    url: "",
  },
  ourRadios: [],
  favoriteRadios: [],
  isRunning: false,
};

export const QRadio = createSlice({
  name: "QRadio",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.MenuOpen = !state.MenuOpen;
    },
    setData: (state, action) => {
      state.ourData = action.payload;
    },
    setCurrentStation: (state, action) => {
      state.currentStation.name = action.payload.name;
      state.currentStation.url = action.payload.url;
      state.currentStation.id = action.payload.id;
    },
    setOurRadios: (state, action) => {
      state.ourRadios = action.payload;
    },
    addToFavorite: (state, action) => {
      const ifItemAlreadyIn = state.favoriteRadios.find(
        (item: { name: string; id: string }) => item.id === action.payload.id
      );
      const item: { name: string; id: string; url: string } = {
        name: action.payload.name,
        id: action.payload.id,
        url: action.payload.url,
      };

      console.log(item);
      if (ifItemAlreadyIn === undefined) {
        state.favoriteRadios = [{ ...item }, ...state.favoriteRadios];
      } else if (ifItemAlreadyIn !== undefined) {
        return;
      }
    },
    removeFromFavorite: (state, action) => {
      state.favoriteRadios = state.favoriteRadios.filter(
        (station: { name: string; id: string }) =>
          station.id !== action.payload.id
      );
    },
    controlPlaying: (state, action) => {
      state.isRunning = action.payload;
    },
  },
});

export const {
  toggleMenu,
  setData,
  setCurrentStation,
  setOurRadios,
  addToFavorite,
  removeFromFavorite,
  controlPlaying,
} = QRadio.actions;
export default QRadio.reducer;
