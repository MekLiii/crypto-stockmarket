import styled from "styled-components"
import {motion} from "framer-motion"
export const Card = styled(motion.div)`
    background-color:${({theme})=>theme.background.lightDark};
    height: 200px;
    box-shadow: 0px 0px 10px 0px ${({theme})=>theme.boxShadow};
    border-radius: 10px;
`