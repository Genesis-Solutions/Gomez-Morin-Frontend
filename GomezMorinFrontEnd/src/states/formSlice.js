/**
 * Represents a slice of the Redux store that manages the form state.
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formState: "UserForm",
  userForm: true,
  initialForm: false,
  specificForm: false,
  sendForm: false,
  typeEventForm: ""
};

/**
 * A slice that manages the form state.
 */
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    /**
     * Updates the current state of the form.
     * @param {Object} state - The current state of the form.
     * @param {Object} action - The action object to be dispatched.
     */
    setFormState: (state, action) => {
      state.formState = action.payload;
    },
    /**
     * Shows the user form.
     * @param {Object} state - The current state of the form.
     */
    showUserForm: (state) => {
      state.userForm = true;
      state.initialForm = false;
      state.specificForm = false;
      state.sendForm = false;
    },
    /**
     * Shows the initial form.
     * @param {Object} state - The current state of the form.
     */
    showInitialForm: (state) => {
      state.userForm = false;
      state.initialForm = true;
      state.specificForm = false;
      state.sendForm = false;
    },
    /**
     * Shows the specific form.
     * @param {Object} state - The current state of the form.
     */
    showSpecificForm: (state) => {
      state.userForm = false;
      state.initialForm = false;
      state.specificForm = true;
      state.sendForm = false;
    },
    /**
     * Shows the send form.
     * @param {Object} state - The current state of the form.
     */
    showSendForm: (state) => {
      state.userForm = false;
      state.initialForm = false;
      state.specificForm = false;
      state.sendForm = true;
    },
    /**
     * Updates the type of event form.
     * @param {Object} state - The current state of the form.
     * @param {Object} action - The action object to be dispatched.
     */
    setTypeEventForm: (state, action) => {
      state.typeEventForm = action.payload
    }
  },
});

export const { setFormState, showUserForm, showInitialForm, showSendForm, showSpecificForm, setTypeEventForm } = formSlice.actions;

export default formSlice.reducer;
