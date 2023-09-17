import Container from "@/components/Container";
import Hero from "@/components/Hero";
import MyWork from "@/components/MyWork";
import Navbar from "@/components/navbar/Navbar";
import Horizontal from "@/utils/Horizontal";
import Website from "@/components/Website";
import GetInTouch from "@/components/GetInTouch";

export default function Home() {
  return (
    <div>
      <Container>
        <Navbar />
        <Hero />
        <Horizontal />
        <MyWork />
        <Website />
        <GetInTouch />
      </Container>
    </div>
  );
}
