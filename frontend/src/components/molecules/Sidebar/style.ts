import styled from "styled-components"
import {motion} from 'framer-motion'

export const Box = styled(motion.div)`
    position: absolute;
    height:100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
`
export const Bar = styled(motion.div)`
    width: 30%;
    height: 100%;
    background-color: ${({theme}) => theme.background.light};
`