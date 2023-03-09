import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reduer, children }) => (
  <DataLayerContext.Provider value={useReducer(reduer, initialState)}>
    {children};
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
