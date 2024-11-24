
import Header from "./componets/Header/Header";
import Banner from "./componets/Banner/Banner";
import BannerStats from "./componets/BannerStats/BannerStats";
import FeaturedProduct from "./componets/FeaturedProduct/FeaturedProduct";
import Footer from "./componets/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <BannerStats />
      {/* <FeaturedProduct/> */}
      <Footer/>
    </>

  );
}
