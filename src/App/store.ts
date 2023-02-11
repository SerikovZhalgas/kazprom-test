import {Action, combineReducers, createStore, Dispatch} from 'redux'
import {appReducer} from "./App-reducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    app: appReducer
})
// непосредственно создаём store
export const store = createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = Dispatch<Action>;

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
