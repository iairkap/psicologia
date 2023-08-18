import { createContext, useState } from "react";

export const ServicesContext = createContext(null);

export const ServicesProvider = ({ children }) => {
  const [service, setService] = useState(false);

  const openService = () => {
    setService(true);
  };

  const closeService = () => {
    setService(false);
  };

  return (
    <ServicesContext.Provider value={{ service, openService, closeService }}>
      {children}
    </ServicesContext.Provider>
  );
};
