import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Project from "./pages/Project";

import ContactUs from "./pages/ContactUs";
import Properties from "./pages/Properties";
import SinglePage from './pages/singlePage'



function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
     

<Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Project/>} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="/properties" element={<Properties/>} />
      <Route path="single/:id" element={<SinglePage />}/>
    </Routes>
     
    
   
  
    
    
   
  );
}
export default App;
