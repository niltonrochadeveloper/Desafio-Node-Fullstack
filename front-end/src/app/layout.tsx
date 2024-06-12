"use client";

import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";
import { ThemeProvider } from "styled-components";
import { SessionProvider, SessionContextValue } from "next-auth/react";
import { light } from "@/theme/light";
import { dark } from "@/theme/dark";
import { Body } from "./styles";
import { Provider } from "react-redux";
import store from "@/lib/store";

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: SessionContextValue;
}) {
  // const theme = asTheme === "light" ? light : dark;

  return (
    <SessionProvider session={session?.data}>
      <Provider store={store}>
        <ThemeProvider theme={dark}>
          <html lang="pt-BR">
            <Body suppressHydrationWarning={true}>
              <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </Body>
          </html>
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}
