import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import countReducer from './countSlice';

const rootReducer = combineReducers({
    search: searchReducer,
    count: countReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
