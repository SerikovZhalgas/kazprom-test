import { useDispatch } from 'react-redux';
import {AppDispatchType} from "../../App/store";

export const useAppDispatch = () => useDispatch<AppDispatchType>();