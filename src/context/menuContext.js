import React, { createContext, useState } from 'react';

export const menuContext = createContext({});

export function MenuContextProvider({ children }) {
  const [menu, setMenu] = useState(false);
  const [login, setLogin] = useState(false);
  const [status, setStatus] = useState(false);

  return (
    <menuContext.Provider
      value={{ status, setStatus, login, setLogin, menu, setMenu }}
    >
      {children}
    </menuContext.Provider>
  );
}
