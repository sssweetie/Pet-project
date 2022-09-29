import React from "react";

const CHANGE_BACKGROUND = "newCollectionReducer/CHANGE-BACKGROUND";

let initialState = {
  currentBackground: 0,
};

const newCollectionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_BACKGROUND: {
      return { ...state, currentBackground: action.currentBackground };
    }
    default:
      return state;
  }
};

export const changeBackgroundActionCreator = (currentBackground: number) => ({
  type: CHANGE_BACKGROUND,
  currentBackground,
});

export default newCollectionReducer;
