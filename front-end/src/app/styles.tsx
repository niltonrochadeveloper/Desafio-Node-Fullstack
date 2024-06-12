"use client";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
import styled from "styled-components";

export const Body = styled.body`
  font-family: ${poppins.style.fontFamily};
`;
