import React from 'react'
import { HeaderProps } from '../types'

const Header: React.FC<HeaderProps> = ({courseName}) => <h1> {courseName} </h1>

export default Header