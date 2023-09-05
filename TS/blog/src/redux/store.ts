import {createStore, applyMiddleware,combineReducers, AnyAction} from "redux"
import thunk,{ThunkDispatch } from "redux-thunk"
import {useDispatch} from 'react-redux'
import { composeWithDevTools} from 'redux-devtools-extension'

const rootReducers = combineReducers({})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

type AppState = ReturnType<typeof rootReducers>;

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export const useAppDispatch = () => useDispatch<TypedDispatch<AppState>>();