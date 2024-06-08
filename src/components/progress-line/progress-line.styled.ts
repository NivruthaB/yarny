import { motion } from "framer-motion";
import styled from "styled-components";

export const ProgressBarDiv = styled(motion.div)`
    height: 3px;
    background: var(--progress-line-color);
    transform-origin: 0%;
    width: 100%;
`