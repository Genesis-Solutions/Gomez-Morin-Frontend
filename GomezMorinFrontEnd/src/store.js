import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./states/generalSlice";
import authSlice from "./states/authSlice";
import formSlice from "./states/formSlice";

export const store = configureStore({
  reducer: {
    general: generalSlice,
    auth: authSlice,
    form: formSlice,
  },
});
