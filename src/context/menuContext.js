import React, { createContext, useState } from 'react';

export const menuContext = createContext({});

export function MenuContextProvider({ children }) {
  const [menu, setMenu] = useState(false);
  const [login, setLogin] = useState(false);
  const [status, setStatus] = useState(false);
  const [selected, setSelected] = useState({});

  return (
    <menuContext.Provider
      value={{
        status,
        setStatus,
        login,
        setLogin,
        menu,
        setMenu,
        selected,
        setSelected,
      }}
    >
      {children}
    </menuContext.Provider>
  );
}
