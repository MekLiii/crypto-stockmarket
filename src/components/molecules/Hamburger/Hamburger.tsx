
type TProps = {
    onClick: () => void;
}

const Hamburger = ({onClick}:TProps) => {
    return(
        <div style={{width: '50px',height: '50px',backgroundColor:"red",position: 'absolute',top:25,left:25,zIndex:1000}} onClick={onClick}>

        </div>
    )
}
export default Hamburger