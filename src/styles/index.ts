import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
    }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 400px auto;

  @media (max-width: 640px) {
    display: block;
  }
`
export const Main = styled.main`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${(props) => props.theme.corSecundaria};
  padding: 0 80px;
  padding-bottom: 60px;

  @media (max-width: 640px) {
    padding: 30px;
    padding-bottom: 60px;
  }
`

export const Infos = styled.input`
  background-color: ${(props) => props.theme.corPrincipal};
  outline: none;
  border: none;
  color: ${(props) => props.theme.texto};
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 8px;

  &[type='number'] {
    appearance: textfield;
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
  }

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${(props) => props.theme.texto};
  }
`

export default EstiloGlobal
