import styled from 'styled-components'

export const Aside = styled.aside`
  width: 100%;
  padding: 60px 40px 0 40px;
  background-color: ${(props) => props.theme.corPrincipal};
  height: 100vh;
  overflow-y: auto;

  ::placeholder {
    color: rgba(0, 0, 0, 0.31);
    font-weight: bold;
  }

  @media (max-width: 640px) {
    padding: 30px;
    height: auto;
    padding-bottom: 60px;
  }
`
export const InputPesquisar = styled.input`
  width: 100%;
  padding: 6px 12px;
  border: 6px double ${(props) => props.theme.corPrincipal};
  border-radius: 8px;
  outline: none;
  margin-bottom: 20px;
`
export const Campo = styled.p`
  color: ${(props) =>
    props.theme.mode === 'light'
      ? props.theme.corSecundaria
      : props.theme.card};
  font-size: 16px;
  font-weight: normal;
  margin-left: 12px;
`

export const BotaoVoltar = styled.button`
  padding: 12px;
  font-weight: bold;
  color: ${(props) =>
    props.theme.mode === 'light'
      ? props.theme.corSecundaria
      : props.theme.texto};
  background-color: ${(props) => props.theme.azul};
  border: none;
  border-radius: 10px;
  cursor: pointer;
`
