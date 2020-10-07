<template>
  <div>
    <main-section />
    <safety-section />
    <competitive-price />
    <shipping-consul />
    <how-to-order />
    <Footer />
  </div>
</template>

<script>
import MainSection from "../../components/LandingPages/MainSection/MainSection";
import safetySection from "../../components/LandingPages/safetySection/safetySection";
import CompetitivePrice from "../../components/LandingPages/CompetitivePrice/CompetitivePrice";
import ShippingConsul from "../../components/LandingPages/ShippingConsul/ShippingConsul";
import Footer from "../../components/LandingPages/Footer/Footer";
import HowToOrder from "../../components/LandingPages/HowToOrder/HowToOrder";

export default {
  name: "landingpage",
  components: {
    MainSection,
    safetySection,
    CompetitivePrice,
    ShippingConsul,
    Footer,
    HowToOrder,
  },
};
</script>

<style>
#landingpage {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
