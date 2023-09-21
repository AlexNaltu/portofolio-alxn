import Container from "@/components/Container";
import PortofolioHero from "@/components/PortofolioHero";
import PortofolioWebsite from "@/components/PortofolioWebsite";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Horizontal from "@/utils/Horizontal";
import React from "react";

function page() {
  return (
    <div>
      <Container>
        <Navbar />
        <PortofolioHero />
        <Horizontal />
      </Container>
      <PortofolioWebsite />
      <Footer />
    </div>
  );
}

export default page;
