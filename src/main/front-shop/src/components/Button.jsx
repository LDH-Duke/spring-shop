import styled from 'styled-components'

export const Button = styled.button`
    color: white;
    border-radius: 2px;
    width: ${(props) => props.width || '100%'};
    height: 40px;
    border: none;
    outline: none;
    background-color: #4d4d4d;
`