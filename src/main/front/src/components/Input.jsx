import styled from 'styled-components'

export const InputContainer = styled.div`
 display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  /* margin-bottom: 16px; */
  width: ${(props) => props.width || '100%'};
  margin: ${(props) => props.margin || '30px 0'} ;
  z-index: 1;
`
export const InputLabel = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;


export const InputField = styled.input`
  color: #ffffff;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: none;
  border-bottom: 1.5px solid #4b4b4b;
  outline: none;
  background-color: transparent;
  z-index: 1;
  &:hover{
    border-bottom: 2px solid #ffffff ;
    transition: 0.1s ease-in-out;
  }
`;





