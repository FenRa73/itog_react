import { createContext, useReducer, useEffect } from "react";
import { getProjects } from "../api/api";

export const ProjectContext = createContext();

const initialState = {
    projects: [],
    loading: true,
    error: null,
};

function projectReducer(state, action) {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return { ...state, projects: action.payload, loading: false };
        case "FETCH_ERROR":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export const ProjectProvider = ({ children }) => {
    const [state, dispatch] = useReducer(projectReducer, initialState);

    useEffect(() => {
        getProjects()
            .then((res) => dispatch({ type: "FETCH_SUCCESS", payload: res.data }))
            .catch((err) => dispatch({ type: "FETCH_ERROR", payload: err.message }));
    }, []);

    return (
        <ProjectContext.Provider value={{ state, dispatch }}>
            {children}
        </ProjectContext.Provider>
    );
};
