import React, { createContext } from "react";
import { useReducer } from "react";


export const AuthContext = createContext();
const initialState = {
  isAuth: false,
  token: null,
};

const login = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        isAuth: true,
        token: action.token,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    }
    default: {
      return state;
    }
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(login, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
