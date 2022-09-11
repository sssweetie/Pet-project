import React from "react";
import ClothesBlock from "../CommonComponents/ClothesBlock/ClothesBlock";
import wallet from "../../img/SaleUp/wallet.png";
import boot from "../../img/SaleUp/boot.png";
import jeans from "../../img/SaleUp/jeans.png";
const clothes = [wallet, jeans, boot];
const clothesLabels = [
  "Leather crossbody bag with gold hardware",
  "Skinny push-up jeans",
  "Wide heel suede ankle boots",
];
const salesPrices = ["$89.50", "$40.00", "$119.16"];
const prices = ["$179.00", "$80.00", "$148.95"];
const SaleUp = () => {
  return (
    <ClothesBlock
      h1={"Sale up to 70%"}
      clothes={clothes}
      clothesLabels={clothesLabels}
      salesPrices={salesPrices}
      prices={prices}
      sales={true}
      backgroundColor={"white"}
      height={"1040px"}
      buttonName={"See all sale products"}
    ></ClothesBlock>
  );
};

export default SaleUp;
