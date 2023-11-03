import { useSelector, useDispatch } from "react-redux";

function HelloRedux() {
  const { message } = useSelector((state) => state.helloReducer);
  return (
    <div>
      <h3>Hello Redux</h3>
      <h4>{message}</h4>
    </div>
  );
}
export default HelloRedux;