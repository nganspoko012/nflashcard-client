import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "../../pages/AboutUsPage";
import CommunityPage from "../../pages/CommunityPage";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import MainNav from "./MainNav";
import SubNav from "./SubNav";

const Layout = (props) => {
  const [isShowingBars, setIsShowingBars] = useState(false);
  const toggleBarsHandler = () => {
    setIsShowingBars((prevState) => !prevState);
  };
  return (
    <>
      <MainNav onToggleBars={toggleBarsHandler} />
      {isShowingBars && <SubNav />}
      <MainContent />
    </>
  );
};

const MainContent = () => {
  return (
    <div
      className={`relative top-12 flex bg-gray-100 h-screen ml-${
        isShowingBars ? 36 : 0
      }`}
    >
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/decks" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default Layout;
