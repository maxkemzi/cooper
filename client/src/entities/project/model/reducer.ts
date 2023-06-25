import {combineReducers} from "@reduxjs/toolkit";
import projectSlice from "./projectSlice";
import projectsSlice from "./projectsSlice";

const projectReducer = combineReducers({
	single: projectSlice,
	multiple: projectsSlice
});

export default projectReducer;
