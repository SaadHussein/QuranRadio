import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  MenuOpen: false,
  ourData: [],
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
  },
});

export const { toggleMenu, setData } = QRadio.actions;
export default QRadio.reducer;
