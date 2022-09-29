import React from "react";
import { connect } from "react-redux";
import { changeBackgroundActionCreator } from "../../../Redux/Reducers/newCollectionReducer";
import MainPage__NewCollection from "./MainPage__NewCollection";

let mstp = (state: any) => ({
  currentBackground: state.newCollectionReducer.currentBackground,
});

let mdtp = (dispatch: any) => {
  return {
    changeBackground: (number: number) => {
      dispatch(changeBackgroundActionCreator(number));
    },
  };
};

const MainPage__NewCollection_Container = connect(
  mstp,
  mdtp
)(MainPage__NewCollection);
export default MainPage__NewCollection_Container;
