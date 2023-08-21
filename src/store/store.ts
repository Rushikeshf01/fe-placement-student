import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/loginSlice";
import extraReducer from "./slice/extraSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    extra: extraReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
