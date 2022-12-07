import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  producto: "1",
  contrato: "kasas",
};

export const siniestroSlice = createSlice({
  name: "siniestro",
  initialState,
  reducers: {
    onChangeSiniesto: (state, action) => {
      state.producto = action.payload;
      console.log(action.payload);
    },
  },
});

export const { onChangeSiniesto } = siniestroSlice.actions;
export default siniestroSlice.reducer;
