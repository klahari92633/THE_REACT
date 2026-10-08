import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";



import Header from "./components/Header";
import Body from "./components/Body";





// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      Created By
      <span>❤️</span>
      <a
        href="https://www.linkedin.com/in/bharat2044/"
        target="_blank"
      >
        Bharat Kumar
      </a>
      <span>&copy;</span>
      {year}
      <strong>
        Tasty <span>Trails</span>
      </strong>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);