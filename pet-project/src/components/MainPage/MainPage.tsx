import React from "react";
import MainPage__Header from "./MainPage__Header/MainPage__Header";
import MainPage__Navigation from "./MainPage__Navigation/MainPage__Navigation";
import MainPage__Advertisment from "./MainPage__Advertisment/MainPage__Advertisment";
import MainPage__NewCollection from "./MainPage__NewCollection/MainPage__NewCollection";
import NewArrivals from "../NewArrivals/NewArrivals";
import Advertisment from "../Advertisment/Advertisment";
import Popular from "../Popular/Popular";
const MainPage = () => {
  return (
    <section>
      <MainPage__Header></MainPage__Header>
      <MainPage__Navigation></MainPage__Navigation>
      <MainPage__Advertisment></MainPage__Advertisment>
      <MainPage__NewCollection></MainPage__NewCollection>
      <NewArrivals></NewArrivals>
      <Advertisment></Advertisment>
      <Popular></Popular>
    </section>
  );
};

export default MainPage;
