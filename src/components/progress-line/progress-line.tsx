import { MotionValue } from "framer-motion";
import { ProgressBarDiv } from "./progress-line.styled";

interface IProgressLineProps {
    scaleX: MotionValue<any>;
}

export const ProgressLine = ({ scaleX }: IProgressLineProps) => {
    return (
        <ProgressBarDiv style={{ scaleX }} />
    )
}