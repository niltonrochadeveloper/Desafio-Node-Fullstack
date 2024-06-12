"use client";

import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const Content = styled.article`
  display: flex;
  gap: 32px;
  justify-content: center;
  flex-direction: column;
  height: 90vh;
  width: 100%;
`;

const Card = styled.div`
  padding: 16px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CardLocals = styled(Card)`
  background-color: #2f3b28;
`;

export const CardEvents = styled(Card)`
  background-color: #461527;
`;

export const LastAdds = styled(Card)`
  background-color: #10141d;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;
