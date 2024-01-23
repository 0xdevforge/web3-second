import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews"
import Section from "@/components/Section";
export default function Home() {
  return (
    <main>
      <Banner />
      <Navbar />
      <Header />
      <Reviews/>
      <Section/>
      <Footer />
    </main>
  );
}
