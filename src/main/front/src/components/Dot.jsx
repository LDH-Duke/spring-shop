import styled from 'styled-components'

export const DotContainer = styled.label`
    position: fixed;
    bottom: 50px;
    left: 50px;
    display: flex;
    flex-direction: column;
    width: 40px;
    height: 40px;
    z-index: 2;
    & > span{
        background-color: ${(props) => props.active ? 'white' : 'black'};    
    }
`

export const Dot = styled.span`
    width: 100%;
    height: 5px;
    margin: 2px 0;
`