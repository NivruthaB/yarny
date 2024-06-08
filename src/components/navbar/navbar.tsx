import { AppIcon, LeftContainer, Icon, NavBarContainer, RightContainer, SearchInput, SearchInputContainer, SearchIcon, AppTitle } from "./navbar.styled";
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { INavBarProps } from "./navbar.interface";
import logo from '../../assets/images/logo-purple.png';

const NavBar = ({ showMenu, openMenu }: INavBarProps) => {

    return (
        <NavBarContainer >
            <LeftContainer>
                <AppIcon src={logo} />
                <AppTitle>Yarny</AppTitle>
                <SearchInputContainer>
                    <SearchIcon icon={faSearch} />
                    <SearchInput placeholder="Looking for something? Book name or author name or ISBN" />
                </SearchInputContainer>
            </LeftContainer>
            <RightContainer>
                <Icon icon={faUser} />
            </RightContainer>
        </NavBarContainer>
    )
}
export default NavBar;