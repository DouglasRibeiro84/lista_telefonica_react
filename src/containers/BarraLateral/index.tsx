import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtros'
import CardListaDeNumeros from '../../components/CardListaDeNumeros'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const filtraContatos = () => {
    if (!termo) return []
    return itens.filter(
      (item) =>
        item.nome.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
    )
  }

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <div>
              <S.InputPesquisar
                type="text"
                placeholder="Pesquisar:"
                value={termo}
                onChange={(evento) =>
                  dispatch(alteraTermo(evento.target.value))
                }
              />
              <S.Campo>
                {termo.length > 0 ? `Buscando por: "${termo}";` : ``}{' '}
              </S.Campo>
            </div>
            <div>
              {filtraContatos().map((c) => (
                <span key={c.nome}>
                  <CardListaDeNumeros
                    id={c.id}
                    nome={c.nome}
                    numero={c.numero}
                    email={c.email}
                  />
                </span>
              ))}
            </div>
          </>
        ) : (
          <S.BotaoVoltar onClick={() => navigate('/')}>
            Voltar a lista de contatos
          </S.BotaoVoltar>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
