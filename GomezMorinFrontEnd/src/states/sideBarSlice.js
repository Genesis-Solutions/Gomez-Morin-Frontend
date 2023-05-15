/**
 * Redux slice for managing the state of the sidebar.
 *
 * @module sideBar
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBarState: false,
};

/**
 * The sideBarSlice defines the actions and reducers for managing the sidebar state.
 */
export const sideBarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    /**
     * Sets the sidebar state to true.
     *
     * @param {Object} state - The current state.
     */
    setSideBarState: (state) => {
      state.sideBarState = true;
    },
    /**
     * Sets the sidebar state to false.
     *
     * @param {Object} state - The current state.
     */
    disableSideBarState: (state) => {
      state.sideBarState = false;
    },
  },
});

export const { setSideBarState, disableSideBarState } = sideBarSlice.actions;

export default sideBarSlice.reducer;
