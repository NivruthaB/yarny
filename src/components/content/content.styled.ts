import { motion } from "framer-motion";
import styled from "styled-components";

export const ContentContainer = styled.div`
    padding: 80px 50px 0 50px;
    display: flex;
    flex-direction: column;
    height: calc(100% - 100px);
    position: relative;
`

export const MainBookCover = styled.img`
    width: 100vw;
    height: 500px;
    position: absolute;
`

export const MenuContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    padding: 20px 0 0 0;
    align-items: center;
`

export const Item = styled.div`
    padding: 20px;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }
`

export const MenuItems = styled.div<{ showSearchBox: boolean }>`
    margin-right: auto !important;
    padding-top: ${(props) => props.showSearchBox !== true ? '66px' : 0} !important;
    padding-left: 20px;
`

export const BookListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 0 0 0;
`