import React from "react";

const CHANGE_BACKGROUND = "newCollectionReducer/CHANGE-BACKGROUND";
const ACTIVE_PASSIVE = "newCollectionReducer/ACTIVE-PASSIVE";
let initialState = {
  currentBackground: 0,
  active: [true, false, false, false],
};

const newCollectionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_BACKGROUND: {
      return { ...state, currentBackground: action.currentBackground };
    }
    case ACTIVE_PASSIVE: {
      return { ...state, active: action.active };
    }
    default:
      return state;
  }
};

export const activePassiveActionCreator = (active: Array<boolean>) => ({
  type: ACTIVE_PASSIVE,
  active,
});
export const changeBackgroundActionCreator = (currentBackground: number) => ({
  type: CHANGE_BACKGROUND,
  currentBackground,
});

export default newCollectionReducer;
