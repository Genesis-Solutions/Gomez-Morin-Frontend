/**
 * The initial state of the authentication slice.
 *
 * @typedef {Object} AuthInitialState
 * @property {string|null} accessToken - The access token.
 * @property {string|null} userName - The user's name.
 * @property {string|null} id - The user's ID.
 * @property {string|null} email - The user's email address.
 * @property {string|null} nameRol - The user's rol.
 */

/**
 * The authentication slice containing the state and reducers for managing user authentication.
 *
 * @typedef {import("@reduxjs/toolkit").Slice<AuthInitialState>} AuthSlice
 */

import { createSlice } from "@reduxjs/toolkit";

/**
 * The initial state of the authentication slice.
 *
 * @type {AuthInitialState}
 */
const initialState = {
  accessToken: null,
  userName: null,
  id: null,
  email: null,
  nameRol: null,
};

/**
 * The authentication slice containing the state and reducers for managing user authentication.
 *
 * @type {AuthSlice}
 */
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /**
     * Sets the access token in the state and saves it to localStorage.
     *
     * @param {AuthInitialState} state - The current state.
     * @param {import("@reduxjs/toolkit").PayloadAction<string>} action - The action containing the new access token.
     */
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },

    /**
     * Sets the user information in the state.
     *
     * @param {AuthInitialState} state - The current state.
     * @param {import("@reduxjs/toolkit").PayloadAction<{userName: string, id: string, email: string}>} action - The action containing the user information.
     */
    setUser: (state, action) => {
      state.userName = action.payload.userName;
      state.nameRol = action.payload.nameRol;
      state.id = action.payload.id;
      state.email = action.payload.email;
    },

    /**
     * Clears the access token from the state and removes it from localStorage.
     *
     * @param {AuthInitialState} state - The current state.
     */
    clearAccessToken: (state) => {
      state.accessToken = null;
      state.userName = null;
      state.id = null;
      state.email = null;
      state.nameRol = null;
    },
  },
});

/**
 * The action creators for the authentication slice.
 *
 * @typedef {Object} AuthActionCreators
 * @property {(accessToken: string) => import("@reduxjs/toolkit").PayloadAction<string>} setAccessToken - Sets the access token.
 * @property {(user: {userName: string, id: string, email: string}) => import("@reduxjs/toolkit").PayloadAction<{userName: string, id: string, email: string}>} setUser - Sets the user information.
 * @property {() => import("@reduxjs/toolkit").PayloadAction<void>} clearAccessToken - Clears the access token.
 */

/**
 * The action creators for the authentication slice.
 *
 * @type {AuthActionCreators}
 */
export const { setAccessToken, setUser, clearAccessToken } = authSlice.actions;

/**
 * The reducer function for the authentication slice.
 *
 * @type {import("@reduxjs/toolkit").Reducer<AuthInitialState>}
 */
export default authSlice.reducer;
