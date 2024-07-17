import { colorContext } from "./themeContext";
import { useState } from "react";

export const ColorContextProvider = ({ children }) => {
  const [colors, setColors] = useState("light");

  return (
    <colorContext.Provider value={{ colors, setColors }}>
      {children}
    </colorContext.Provider>
  );
};
