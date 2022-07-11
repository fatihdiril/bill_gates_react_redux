import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import theReducer from "../features/slice";

export const store = configureStore({
  reducer: {
    state: theReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
