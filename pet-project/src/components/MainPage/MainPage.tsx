import React from "react";
import MainPage__Header from "./MainPage__Header/MainPage__Header";
import MainPage__Navigation from "./MainPage__Navigation/MainPage__Navigation";
import MainPage__Advertisment from "./MainPage__Advertisment/MainPage__Advertisment";
import MainPage__NewCollection from "./MainPage__NewCollection/MainPage__NewCollection";
import NewArrivals from "../NewArrivals/NewArrivals";
import Advertisment from "../Advertisment/Advertisment";
import Popular from "../Popular/Popular";
import Trending from "../Trending/Trending";
import SaleUp from "../SaleUp/SaleUp";
import MarketStore from "./MarketStore/MarketStore";
import Advantages from "./Advantages/Advantages";
import Instagram from "../Instagram/Instagram";
import FashionBlog from "../FashionBlog/FashionBlog";
import Sponsors from "../Sponsors/Sponsors";
import Updates from "../Updates/Updates";
import Help from "../Help/Help";
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
      <Trending></Trending>
      <SaleUp></SaleUp>
      <MarketStore></MarketStore>
      <Advantages></Advantages>
      <Instagram></Instagram>
      <FashionBlog></FashionBlog>
      <Sponsors></Sponsors>
      <Updates></Updates>
      <Help></Help>
    </section>
  );
};

export default MainPage;
