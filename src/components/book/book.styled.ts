import styled from "styled-components";
import { motion } from "framer-motion"

export const BookContainer = styled.div`
    padding: 5px;
    cursor: pointer;
    max-width: 150px;
    
`;

export const BookCover = styled(motion.img)`
    width: 150px;
    height: 200px;
    border-radius: 5px;
    box-shadow:  8px 6px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
`