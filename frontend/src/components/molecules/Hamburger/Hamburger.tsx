import { Box, StyledBurger } from "./style";

type TProps = {
  onClick: () => void;
  open: boolean;
};
const Hamburger = ({ onClick, open }: TProps) => {
  return (
    <Box>
      <StyledBurger open={open} onClick={onClick}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </Box>
  );
};

export default Hamburger;

