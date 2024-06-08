import { motion } from "framer-motion";
import styled from "styled-components";

export const BookDetailsDialog = styled(motion.dialog)`
    display: flex;
    flex-direction: column;
    z-index: 10000000;
    width: 92%;
    height: 70%;
    top: 15%;
    position: fixed;
    background: var(--background-color);
    color: var(--text-color);
    border: none;
    padding: 25px;
    box-shadow: 0 0 0 50vmax rgba(0,0,0,.5);
    border-radius: 20px;
`

export const TitleBar = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--heading-font-size);
`

export const ContentWrapper = styled.div`
    display: flex;
    padding: 10px;
`

export const Title = styled.div`
    font-size: var(--heading-font-size);
    padding: 10px 0;
    font-weight: bold;
`

export const Author = styled.div`
    font-size: var(--sub-heading-font-size);
    color: var(--light-text-color);
    padding: 0 0 15px 0;
`

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 50px;
`

export const Description = styled.div`
    display: flex;
    padding: 20px 0;
    font-family: var(--cursive-font-family);
`

export const Ratings = styled.div`
    display: flex;
    align-items: center;
    font-size: var(--sub-heading-font-size);
`