"use client"

import React from 'react'
import { Container, Logo, LogoContainer, LogoIcon, Profile } from './styles'

const Navbar = () => {
  return (
    <Container>

      <LogoContainer href="/">
        <Logo>gaia</Logo>
        <LogoIcon src="/img/explore.png" alt="" width={41} height={25} />
      </LogoContainer>
      <Profile src="/img/profileDefault.png" width={36} height={36} alt="profile" />
    </Container>
  )
}

export default Navbar;