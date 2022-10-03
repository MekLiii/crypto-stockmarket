import { Spiner } from "./style";
const Spinner = () => {
  return (
    <div style={{height:"100%",width:"100%",display:"grid",placeItems:"center"}}>
      <Spiner className="spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </Spiner>
    </div>
  );
};
export default Spinner;
