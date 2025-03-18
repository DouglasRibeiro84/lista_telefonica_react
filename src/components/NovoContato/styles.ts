import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const AreaNovoContato = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.theme.mode === 'light'
      ? props.theme.corPrincipal
      : props.theme.texto};
  justify-content: center;
  margin-top: 100px;
  border-bottom: 2px solid ${(props) => props.theme.corPrincipal};
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`

export const ButtonNovo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.verde};
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
`
