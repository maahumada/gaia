"use client"

import React from 'react'
import { Container, Logo, Profile } from './styles'

const Navbar = () => {
  return (
    <Container>
      <Logo href="/">gaia</Logo>
      <Profile src="/img/profileDefault.png" width={36} height={36} alt="profile" />
    </Container>
  )
}

export default Navbar;