import styled from 'styled-components'

export const InputContainer = styled.div`
 display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: ${(props) => props.width || '100%'};
  margin: 30px 0 ;
`;
export const InputLabel = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

export const InputField = styled.input`
  color: #ffffff;
  padding: 8px;
  border-radius: 4px;
  border: none;
  border-bottom: 1.5px solid #4b4b4b;
  outline: none;
  background-color: transparent;
  &:hover{
    border-bottom: 2px solid #ffffff ;
    transition: 0.1s ease-in-out;
  }
  
`;





