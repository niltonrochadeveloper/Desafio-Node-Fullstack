"use client";

import { light } from "./light";
import { dark } from "./dark";
import { ThemeProvider as SCThemeProvider, useTheme } from "styled-components";

const { theme: asTheme } = useTheme();

export const theme = asTheme === "light" ? light : dark;

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
};

export default ThemeProvider;
