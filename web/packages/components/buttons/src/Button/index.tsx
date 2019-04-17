import * as React from 'react';
import styled from 'styled-components'
import theme from '@simple/theme-default';
console.log(theme)
interface ButtonProps {
    primary?: boolean;
    children: any;
}
const Button = styled.button`
background-color: ${theme().primary};
color: ${theme().textPrimaryLight};
`
export default ({primary = true, ...rest}: ButtonProps) => {
    return <Button className={primary ? 'simple-btn-primary': 'simple-btn-secondry'} {...rest}/>
}