import React from "react";

const CONTENT_VISIBILITY = "photoSliderReducers/CONTENT-VISIBILITY";

let initialState = {
  contentVisibility: true,
};

const newCollectionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CONTENT_VISIBILITY: {
      return { ...state, contentVisibility: action.contentVisibility };
    }
    default:
      return state;
  }
};

export const contentVisibilityActionCreator = (contentVisibility: boolean) => ({
  type: CONTENT_VISIBILITY,
  contentVisibility,
});

export default newCollectionReducer;
