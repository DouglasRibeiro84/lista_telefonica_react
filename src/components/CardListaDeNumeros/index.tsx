import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { Infos } from '../../styles'

import { remover, editar } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'

type Props = Contato

const CardListaDeNumeros = ({
  nome,
  numero: numeroOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (numeroOriginal.length > 0) {
      setNumero(numeroOriginal)
    }
  }, [numeroOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setNumero(numeroOriginal)
  }

  return (
    <S.Card>
      <Infos disabled value={nome} />
      <Infos
        disabled={!estaEditando}
        type="number"
        value={numero}
        onChange={(evento) => setNumero(evento.target.value)}
      />
      <Infos
        disabled={!estaEditando}
        type="email"
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <S.ButtonArea>
        {estaEditando ? (
          <>
            <S.ButtonCard
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    numero,
                    email,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.ButtonCard>
            <S.BotaoCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.BotaoExcluir onClick={() => dispatch(remover(id))}>
              Excluir
            </S.BotaoExcluir>
            <S.ButtonCard onClick={() => setEstaEditando(true)}>
              Editar
            </S.ButtonCard>
          </>
        )}
      </S.ButtonArea>
    </S.Card>
  )
}

export default CardListaDeNumeros
