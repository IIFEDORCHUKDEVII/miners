import { configureStore } from "@reduxjs/toolkit";
import slotSlice from "./features/slot";

export const store = configureStore({
  reducer: { slot: slotSlice },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
