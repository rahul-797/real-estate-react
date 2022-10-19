import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "House",
  price: "3000",
  location: "New York, USA",
  moveInDate: "15 Nov, 2022",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setMoveInDate: (state, action) => {
      state.moveInDate = action.payload;
    },
  },
});

export const { setType, setPrice, setLocation, setMoveInDate } =
  filterSlice.actions;

export default filterSlice.reducer;
