import "./App.css";
import Base from "./Base";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import CareerPath from "./pages/CareerPath/CareerPath.jsx";
import WildCard from "./WildCard.jsx";
import CareerDetail from "./pages/CareerPath/CareerDetail.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import BlogDetail from "./pages/BlogDetail/BlogDetail.jsx";

function App() {
  return (
    <Router>
      <Base>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/career-detail/:slug/" element={<CareerDetail />} />
          <Route path="/career-detail/:slug/" element={<WildCard />} />
          <Route path="/explore-paths" element={<CareerPath />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          {/* <Route path="/blog/:slug/" element={<WildCard />} /> */}
          <Route path="*" element={<WildCard />} />
        </Routes>
      </Base>
    </Router>
  );
}

export default App;
