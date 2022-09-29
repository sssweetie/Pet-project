import { configureStore } from "@reduxjs/toolkit";
import newCollectionReducer from "./Reducers/newCollectionReducer";
const store = configureStore({
  reducer: { newCollectionReducer },
});
export default store;
