import {AppDispatch} from "@store/index";
import {useDispatch} from "react-redux";

const useTypedDispatch: () => AppDispatch = useDispatch;

export default useTypedDispatch;
