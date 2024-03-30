import Header from "./components/header"
import Section from './components/section'
import Main from './components/main'
import Section2 from "./components/section2";
import CTA from "./components/CTA";
import Footer from "./components/footer";


  export default function App() {
    return (
      <div className="flex flex-col 3xl:w-full sm:w-full  sm:items-center">
        <Header/>
        <Section/>  
        <Main/>
        <Section2/>
        <CTA/>
        <Footer/>
      </div>
    );
  }