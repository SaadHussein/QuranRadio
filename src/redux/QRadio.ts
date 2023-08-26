import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  MenuOpen: false,
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
  },
});

export const { toggleMenu } = QRadio.actions;
export default QRadio.reducer;
