import styled from 'styled-components'

export const Titulo = styled.h2`
  color: ${(props) =>
    props.theme.mode === 'light'
      ? props.theme.corPrincipal
      : props.theme.texto};
  text-align: center;
  padding: 40px 0;
`
export const Form = styled.form`
  padding: 18px;
  border-radius: 10px;
  border: double 4px
    ${(props) =>
      props.theme.mode === 'light'
        ? props.theme.corPrincipal
        : props.theme.card};
`
export const Button = styled.button`
  padding: 8px 24px;
  width: 100%;
  background-color: ${(props) => props.theme.verde};
  color: ${(props) =>
    props.theme.mode === 'light'
      ? props.theme.corSecundaria
      : props.theme.texto};
  font-weight: bold;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`
