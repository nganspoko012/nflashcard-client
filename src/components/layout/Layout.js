import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "../../pages/AboutUsPage";
import AddDeckPage from "../../pages/AddDeckPage";
import CommunityPage from "../../pages/CommunityPage";
import DeckDetailsPage from "../../pages/DeckDetailsPage";
import HomePage from "../../pages/HomePage";
import LearnPage from "../../pages/LearnPage";
import LoginPage from "../../pages/LoginPage";
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
      className={`relative top-12 p-4 flex ${
        props.isShowingBars ? "ml-36" : ""
      }`}
    >
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/decks" exact element={<HomePage />}></Route>
        <Route path="/add-deck" element={<AddDeckPage />} />
        <Route path="/deck-details/:deckId" element={<DeckDetailsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/learn/:deckId" element={<LearnPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
};

export default Layout;
