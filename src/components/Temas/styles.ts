import styled from 'styled-components'

export const AreaTema = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  max-width: 160px;
  width: 100%;
  margin-bottom: 30px;
  margin-left: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.corSecundaria};
  padding: 4px 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 1px ${(props) => props.theme.sombra};
  color: ${(props) =>
    props.theme.mode === 'light' ? props.theme.sombra : props.theme.card};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.corPrincipal};
    color: ${(props) => props.theme.corSecundaria};
    box-shadow: 1px 1px 2px 2px ${(props) => props.theme.corSecundaria};
  }
`
export const TextoTrocaTema = styled.span`
  font-size: 14px;
  font-weight: bold;
`

export const TemaImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  opacity: 0.7;
`
