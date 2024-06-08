import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";

export const NavBarContainer = styled.div`
    background-color: var(--navbar-background);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px 0 30px;
    position: fixed;
    width: calc(100% - 60px);
    height: 80px;
    z-index:10000000;
`

export const Icon = styled(FontAwesomeIcon)`
    height: 32px;
    width: 32px;
    color: var(--grey);
    cursor: pointer;
`

export const AppIcon = styled.img`
    width: 70px;
    height: 70px;
`
export const AppTitle = styled.div`
    color: var(--white);
    font-family: var(--cursive-font-family);
    font-size: var(--heading-font-size);
`

export const LeftContainer = styled.div`
    display: flex;
    align-items: center;
`

export const RightContainer = styled.div`
    display: flex;
    align-items: center;
`

export const SearchInputContainer = styled(motion.div)`
    height: 40px;
    border-radius: 20px;
    margin: 0 0 0 60px;
    border: solid var(--grey) 1px;
    display: flex;
`;

export const SearchInput = styled.input`
    outline: 0;
    border: 0;
    border-radius: 20px;
    display: flex;
    color: var(--white);
    margin-left: 35px;
    background: transparent;
    width: 400px;
`

export const SearchIcon = styled(FontAwesomeIcon)`
    height: 22px;
    width: 22px;
    color: var(--grey);
    cursor: pointer;
    position: fixed;
    margin-left: 8px;
    margin-top: 8px;
`