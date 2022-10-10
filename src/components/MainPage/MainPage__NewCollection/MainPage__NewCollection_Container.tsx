import React from "react";
import { connect } from "react-redux";
import {
  activePassiveActionCreator,
  changeBackgroundActionCreator,
} from "../../../Redux/Reducers/newCollectionReducer";
import MainPage__NewCollection from "./MainPage__NewCollection";

let mstp = (state: any) => ({
  currentBackground: state.newCollectionReducer.currentBackground,
  active: state.newCollectionReducer.active,
});

let mdtp = (dispatch: any) => {
  return {
    changeBackground: (number: number) => {
      dispatch(changeBackgroundActionCreator(number));
    },
    activePassive: (active: Array<boolean>) => {
      dispatch(activePassiveActionCreator(active));
    },
  };
};

const MainPage__NewCollection_Container = connect(
  mstp,
  mdtp
)(MainPage__NewCollection);
export default MainPage__NewCollection_Container;
