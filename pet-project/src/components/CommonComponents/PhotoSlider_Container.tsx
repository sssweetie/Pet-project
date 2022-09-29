import React from "react";
import { connect } from "react-redux";
import PhotoSlider from "./PhotoSlider";
import { contentVisibilityActionCreator } from "../../Redux/Reducers/photoSliderReducer";
let mstp = (state: any) => ({
  contentVisibility: state.photoSliderReducer.contentVisibility,
});

let mdtp = (dispatch: any) => {
  return {
    changeVisibility: (contentVisibility: boolean) => {
      dispatch(contentVisibilityActionCreator(contentVisibility));
    },
  };
};

const PhotoSlider_Container = connect(mstp, mdtp)(PhotoSlider);

export default PhotoSlider_Container;
