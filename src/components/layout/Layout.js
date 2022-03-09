import { Route, Routes } from "react-router-dom";
import AboutUsPage from "../../pages/AboutUsPage";
import CommunityPage from "../../pages/CommunityPage";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import MainNav from "./MainNav";

const Layout = (props) => {
  return (
    <>
      <MainNav />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/decks" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default Layout;
