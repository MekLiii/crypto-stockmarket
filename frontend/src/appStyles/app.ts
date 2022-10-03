import styled from "styled-components";
import {motion} from "framer-motion"

const GridComponent = styled(motion.div)`
    max-width: 100%;
    min-height: auto;
    padding: 10px;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    padding-top:100px; 
`
const Container = styled.div`
    background-color: ${({ theme }) => theme.background.body};
    height: 100%;
    min-height: 100vh;
    width: 100%;
`




export { GridComponent, Container };