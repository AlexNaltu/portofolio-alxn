import Container from "@/components/Container";
import PortofolioHero from "@/components/PortofolioHero";
import PortofolioWebsite from "@/components/PortofolioWebsite";

import Horizontal from "@/utils/Horizontal";
import React from "react";

function page() {
  return (
    <div>
      <Container>
        <PortofolioHero />
        <Horizontal />
      </Container>
      <PortofolioWebsite />
    </div>
  );
}

export default page;
