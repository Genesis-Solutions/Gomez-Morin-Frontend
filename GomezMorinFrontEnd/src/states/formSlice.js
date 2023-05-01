import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formState: "UserForm",
  userForm: true,
  initialForm: false,
  specificForm: false,
  sendForm: false,
  typeEventForm: ""
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormState: (state, action) => {
      state.formState = action.payload;
    },
    showUserForm: (state) => {
      state.userForm = true;
      state.initialForm = false;
      state.specificForm = false;
      state.sendForm = false;
    },
    showInitialForm: (state) => {
      state.userForm = false;
      state.initialForm = true;
      state.specificForm = false;
      state.sendForm = false;
    },
    showSpecificForm: (state) => {
      state.userForm = false;
      state.initialForm = false;
      state.specificForm = true;
      state.sendForm = false;
    },
    showSendForm: (state) => {
      state.userForm = false;
      state.initialForm = false;
      state.specificForm = false;
      state.sendForm = true;
    },
    setTypeEventForm: (state, action) => {
      state.typeEventForm = action.payload
    }
  },
});

export const { setFormState, showUserForm, showInitialForm, showSendForm, showSpecificForm, setTypeEventForm } = formSlice.actions;

export default formSlice.reducer;
