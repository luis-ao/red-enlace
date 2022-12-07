import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nombre: "",
  paterno: "",
  materno: "",
  edad: "",
  genero: "",
  rfc: "",
  correo: "",
  tel: "",
};

export const gmSlice = createSlice({
  name: "gm",
  initialState,
  reducers: {
    onChangeTitularGM: (state, action) => {
      state.nombre = action.payload.nombre;
      state.paterno = action.payload.paterno;
      state.materno = action.payload.materno;
      state.edad = action.payload.edad;
      state.genero = action.payload.genero;
      state.rfc = action.payload.rfc;
      state.correo = action.payload.correo;
      state.tel = action.payload.tel;
    },
  },
});

export const { onChangeTitularGM } = gmSlice.actions;
export default gmSlice.reducer;
