import React from "react";
import Content from "../content/content";
import NavBar from "../navbar/navbar";
import { HomePageContainer } from "./home-page.styled";

const HomePage = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    const openMenu = () => {
        setIsMenuOpen(true);
    }
    return (
        <HomePageContainer>
            <NavBar showMenu={isMenuOpen} openMenu={openMenu} />
            <Content showMenu={isMenuOpen} closeMenu={closeMenu} />
        </HomePageContainer>
    )
}

export default HomePage;