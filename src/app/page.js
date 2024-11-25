
"use client"
import Header from "./componets/Header/Header";
import Banner from "./componets/Banner/Banner";
import BannerStats from "./componets/BannerStats/BannerStats";
import FeaturedProduct from "./componets/FeaturedProduct/FeaturedProduct";
import Footer from "./componets/Footer/Footer";
import ManCollection from "./componets/ManCollection/ManCollection";
import BigDeal from "./componets/BigDeal/BigDeal";
import SummerBigDeal from "./componets/SummerBigDeal/SummerBigDeal";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <BannerStats />
      <FeaturedProduct/>
      <BigDeal/>
      <ManCollection />
      <SummerBigDeal/>
      <Footer/>
    </>

  );
}
