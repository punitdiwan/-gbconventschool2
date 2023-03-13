//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Footer from "./components/Footer";
import Blogcontent from "./components/Blogcontent";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Director from "./components/Director";
import Principal from "./components/Principal";
import Blog from "./components/Blog";
import Admission from "./components/Admission";
import Chairman from "./components/Chairman";
import Transport from "./components/Transport";
import Infra from "./components/Infra";
import Updates from "./components/Updates";
import Library from "./components/Library";
import Digital from "./components/Digital";
import Dispensary from "./components/Dispensary";
import ScrollToTop from "react-scroll-to-top";
import Blogright from "./components/Blogright";
import { GraphQLClient, ClientContext } from 'graphql-hooks'

function App() {
  const url = process.env.REACT_APP_API_URL;


  const client = new GraphQLClient({
    url: url
  })
  return (
    <>
      <ClientContext.Provider value={client}>
        <div className="App">
          <BrowserRouter>
            {/* <Popup /> */}
            {/* <Header /> */}
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="director" element={<Director />} />
              <Route path="principal" element={<Principal />} />
              <Route path="management" element={<Chairman />} />
              <Route path="admission" element={<Admission />} />
              <Route path="blog" element={<Blog />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="library" element={<Library />} />
              <Route path="updates" element={<Updates />} />
              <Route path="digital" element={<Digital />} />
              <Route path="infra" element={<Infra />} />
              <Route path="transport" element={<Transport />} />
              <Route path="dispensary" element={<Dispensary />} />
              <Route path="blogcontent/:id" element={<Blogcontent />} />
              <Route path="blogright" element={<Blogright />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </ClientContext.Provider>
    </>
  );
}

export default App;
