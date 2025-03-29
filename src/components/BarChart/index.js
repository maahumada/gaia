"use client"

import React from 'react'
import { Container, Item, ItemBar, ItemText } from './styles'

const BarChart = ({ data }) => {
  const max = Math.max(...data.map(data => data.value));
  return (
    <Container>
      {data.map((item, index) => (
        <Item key={index}>
          <ItemBar percentage={item.value / max} />
          <ItemText>{item.key}</ItemText>
        </Item>
      ))}
    </Container>
  )
}

export default BarChart