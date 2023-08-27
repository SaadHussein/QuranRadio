import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  MenuOpen: false,
  ourData: [],
  currentStation: {
    name: "",
    url: "",
  },
  ourRadios: [],
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
      console.log(action.payload);
      state.currentStation.name = action.payload.name;
      state.currentStation.url = action.payload.url;
      console.log(state.currentStation);
    },
    setOurRadios: (state, action) => {
      state.ourRadios = action.payload;
      console.log(state.ourRadios);
    },
  },
});

export const { toggleMenu, setData, setCurrentStation, setOurRadios } =
  QRadio.actions;
export default QRadio.reducer;
