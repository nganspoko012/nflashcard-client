import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "../../pages/AboutUsPage";
import AddDeck from "../../pages/AddDeck";
import CommunityPage from "../../pages/CommunityPage";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import TestTinyMCE from "../../pages/TestTinyMCE";
import MainNav from "./Navigation/MainNav";
import SubNav from "./Navigation/SubNav";

const Layout = (props) => {
  const [isShowingBars, setIsShowingBars] = useState(false);
  const toggleBarsHandler = () => {
    setIsShowingBars((prevState) => !prevState);
  };
  return (
    <>
      <MainNav onToggleBars={toggleBarsHandler} />
      {isShowingBars && <SubNav />}
      <MainContent isShowingBars={isShowingBars} />
    </>
  );
};

const MainContent = (props) => {
  return (
    <main
      className={`relative top-12 p-4 flex ml-${props.isShowingBars ? 36 : 0}`}
    >
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/decks" exact element={<HomePage />}></Route>
        <Route path="/add-deck" element={<AddDeck />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test" element={<TestTinyMCE />} />
      </Routes>
    </main>
  );
};

export default Layout;
