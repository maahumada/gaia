"use client"

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 6px;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 30px;
`

export const ItemBar = styled.div`
  width: 6px;
  height: ${props => props.percentage * 80}px;
  border-radius: 3px;
  background: #23513B;
`

export const ItemText = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #23513B;
`