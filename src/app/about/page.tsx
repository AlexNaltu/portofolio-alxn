import AboutMe from "@/components/AboutMe";
import Container from "@/components/Container";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

function AboutPage() {
  return (
    <div>
      <Container>
        <Navbar />
        <AboutMe />
      </Container>
    </div>
  );
}

export default AboutPage;
