import styled from "styled-components";
import { motion } from "framer-motion";

export const Box = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98%;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.2);
    margin-top:10px;
`
export const BoxWithName = styled.div`
    flex: .6;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img:first-child {
        padding-right: 40%;
        margin-left: 10px;
    }
`
export const BoxWithIcons = styled.div`
    flex: .4;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
   
`

type TIcon = {
    bgc: string,
}
export const Icon = styled.div<TIcon>`

    width: 50px;
    height: 50px;
    margin-left: 10px;
    background-color:${({ bgc }) => bgc};
    display: grid;
    place-items: center;
    cursor: pointer;
`
export const Img = styled.img`
    width: 70%;
    height: 70%;
    filter: invert(0%) sepia(47%) saturate(24%) hue-rotate(2deg) brightness(88%) contrast(105%) !important;
`
export const Name = styled.p`
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
`