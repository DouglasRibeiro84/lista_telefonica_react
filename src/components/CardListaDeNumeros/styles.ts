import styled from 'styled-components'

export const Card = styled.div`
  padding: 18px;
  background-color: ${(props) =>
    props.theme.mode === 'light'
      ? props.theme.corSecundaria
      : props.theme.card};
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 60px;
  box-shadow: 4px 4px 15px 4px ${(props) => props.theme.sombra};

  opacity: 0;
  transform: translateY(16px);
  animation: fadeIn 0.5s ease-in-out forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

export const ButtonCard = styled.button`
  padding: 8px 24px;
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

  @media (max-width: 640px) {
    margin-bottom: 12px;
  }
`
export const BotaoCancelar = styled(ButtonCard)`
  background-color: ${(props) => props.theme.amarelo};
`
export const BotaoExcluir = styled(ButtonCard)`
  background-color: ${(props) => props.theme.vermelho};
`
