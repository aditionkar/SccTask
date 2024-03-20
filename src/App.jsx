import Hero from "./components/Hero";
import Join from "./components/Join";
import Stayhuman from "./components/Stayhuman";
import Building from "./components/Building";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Discover from "./components/Discover";

export default function App() {
  return (
    <>
    <Navbar /> 
    <Home />
    <Hero />
    <Discover />
    <Stayhuman />
    <Building />
    <Join />
    <Footer />
    </>
  )
}