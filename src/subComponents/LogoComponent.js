import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'




const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Jersey 10',sans-serif;

position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
          <a  href="/" class="text-decoration-none fw-bolder">
            MN
          </a>
        </Logo>
    )
}

export default LogoComponent
