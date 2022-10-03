import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 30%;

`
export const StyledInput = styled.input`
    width: 80%;
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1.5rem;
    padding: 0 1rem;
    margin: 0.5rem 0;
    outline: none;
    transition: all 0.3s ease-in-out;
    &:focus {
        background-color: rgba(255, 255, 255, 0.2);
    }
`
export const Button = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    outline: none;
    //set bgc to great green
    background-color: #00ff00;
    cursor: pointer;
    /* display: grid;
    place-items: center; */
    display: flex ;
    align-items: center;
    justify-content: center;
`
export const Img = styled.img`
    width: 50px;
    height: 50px;
`