import { configureStore } from "@reduxjs/toolkit";
import newCollectionReducer from "./Reducers/newCollectionReducer";
import photoSliderReducer from "./Reducers/photoSliderReducer";
const store = configureStore({
  reducer: { newCollectionReducer, photoSliderReducer },
});
export default store;
