import React from "react";
import shirt from "../../img/Trendings/shirt.png";
import coat from "../../img/Trendings/coat.png";
import clock from "../../img/Trendings/clock.png";
import ClothesBlock from "../CommonComponents/ClothesBlock/ClothesBlock";

const Trending = (props: any) => {
  const clothes = [shirt, coat, clock];
  const clothesLabels = [
    "Shirt with insertion lace trims",
    "Chrono watch with blue leather belt",
    "Check coat with colour contrast",
  ];
  const prices = ["$49.95", "$120.60", "$183.45"];
  return (
    <ClothesBlock
      height={"950px"}
      backgroundColor={"#e5e8ed"}
      h1={"Trendings now"}
      prices={prices}
      clothes={clothes}
      clothesLabels={clothesLabels}
      sales={false}
      buttonName={"Explore top sales"}
    ></ClothesBlock>
  );
};

export default Trending;
