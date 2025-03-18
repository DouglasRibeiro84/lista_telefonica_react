import { useSelector } from 'react-redux'

import CardListaDeNumeros from '../../components/CardListaDeNumeros'
import NovoContato from '../../components/NovoContato'
import { Main } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeNumeros = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Main>
      <NovoContato />
      <ul>
        {itens.map((c) => (
          <li key={c.nome}>
            <CardListaDeNumeros
              id={c.id}
              nome={c.nome}
              numero={c.numero}
              email={c.email}
            />
          </li>
        ))}
      </ul>
    </Main>
  )
}

export default ListaDeNumeros
