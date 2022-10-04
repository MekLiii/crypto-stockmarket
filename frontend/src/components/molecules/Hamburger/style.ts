import styled from "styled-components"

type TStyledBurger = {
    open: boolean;
  };

export const StyledBurger = styled.div<TStyledBurger>`
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  position: fixed;
  top: 15px;
  left: 20px;
  z-index:1200;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme,open }) =>open ? theme.whiteAndBlack : theme.blackAndWhite};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    z-index:1200;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
 
export const Box = styled.div`
  width: 50px;
  height: 50px;
 
`;