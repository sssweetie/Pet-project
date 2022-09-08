import React from "react";
import MainPage__Header from "./MainPage__Header/MainPage__Header";
import MainPage__Navigation from "./MainPage__Navigation/MainPage__Navigation";
import MainPage__Advertisment from "./MainPage__Advertisment/MainPage__Advertisment";
import MainPage__NewCollection from "./MainPage__NewCollection/MainPage__NewCollection";
import NewArrivals__Main from "../NewArrivals/NewArrivals";
import Advertisment from "../Advertisment/Advertisment";

const MainPage = () => {
  return (
    <section>
      <MainPage__Header></MainPage__Header>
      <MainPage__Navigation></MainPage__Navigation>
      <MainPage__Advertisment></MainPage__Advertisment>
      <MainPage__NewCollection></MainPage__NewCollection>
      <NewArrivals__Main></NewArrivals__Main>
      <Advertisment></Advertisment>
    </section>
  );
};

export default MainPage;
