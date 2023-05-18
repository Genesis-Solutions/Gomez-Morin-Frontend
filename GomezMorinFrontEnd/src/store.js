import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./states/generalSlice";
import authSlice from "./states/authSlice";
import formSlice from "./states/formSlice";
import sidebarSlice from "./states/sideBarSlice";

export const store = configureStore({
  reducer: {
    general: generalSlice,
    auth: authSlice,
    form: formSlice,
    sidebar: sidebarSlice,
  },
});
