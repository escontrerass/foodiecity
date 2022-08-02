import React, { createContext, useState } from 'react';

export const menuContext = createContext({});

export function MenuContextProvider({ children }) {
  const [menu, setMenu] = useState(false);
  const [status, setStatus] = useState(false);
  const [login, setLogin] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [business, setBusiness] = useState(false);
  const [selected, setSelected] = useState({});

  return (
    <menuContext.Provider
      value={{
        menu,
        setMenu,
        status,
        setStatus,
        login,
        setLogin,
        signIn,
        setSignIn,
        business,
        setBusiness,
        selected,
        setSelected,
      }}
    >
      {children}
    </menuContext.Provider>
  );
}
