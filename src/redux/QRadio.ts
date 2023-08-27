import { createSlice } from "@reduxjs/toolkit";
import { ForRedux } from "../model/State";

const initialState: ForRedux = {
  MenuOpen: false,
  ourData: [],
  currentStation: {
    name: "",
    id: "",
    url: "",
  },
  ourRadios: [],
  favoriteRadios: [],
};

export const QRadio = createSlice({
  name: "QRadio",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      console.log(state.MenuOpen);
      state.MenuOpen = !state.MenuOpen;
      console.log(state.MenuOpen);
    },
    setData: (state, action) => {
      state.ourData = action.payload;
      console.log(state.ourData);
    },
    setCurrentStation: (state, action) => {
      state.currentStation.name = action.payload.name;
      state.currentStation.url = action.payload.url;
      state.currentStation.id = action.payload.id;
    },
    setOurRadios: (state, action) => {
      state.ourRadios = action.payload;
      console.log(state.ourRadios);
    },
    addToFavorite: (state, action) => {
      const ifItemAlreadyIn = state.favoriteRadios.find(
        (item: { name: string; id: string }) => item.id === action.payload.id
      );
      const item: { name: string; id: string } = {
        name: action.payload.name,
        id: action.payload.id,
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
  },
});

export const {
  toggleMenu,
  setData,
  setCurrentStation,
  setOurRadios,
  addToFavorite,
  removeFromFavorite,
} = QRadio.actions;
export default QRadio.reducer;
