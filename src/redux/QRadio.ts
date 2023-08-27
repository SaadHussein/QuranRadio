import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  MenuOpen: false,
  ourData: [],
  isRunning: false,
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
    setIsRunning(state) {
      state.isRunning = !state.isRunning;
    },
  },
});

export const { toggleMenu, setData, setIsRunning } = QRadio.actions;
export default QRadio.reducer;
