import styled from "styled-components"
import { motion } from "framer-motion"
export const Card = styled(motion.div)`
    background-color:${({ theme }) => theme.background.lightDark};
    height: 200px;
    box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.boxShadow};
    border-radius: 10px;
`
export const CardItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`
export const CardLogoSection = styled.div`
    display: flex;
    width: 30%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background-color: red; */
`

export const CardPriceSection = styled.div`
    display: flex;
    width: 70%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background-color: blue; */
`
export const Name = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => "white"};

`