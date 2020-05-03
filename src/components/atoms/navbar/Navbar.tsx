import React from 'react'

import logo from 'src/static/images/logo.svg'

import { Container, Logo } from './Navbar.style'

export const Navbar = () => (
  <Container>
    <Logo src={logo} alt="Webmotors" title="Webmotors"></Logo>
  </Container>
)
