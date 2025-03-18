import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Infos, Main } from '../../styles/index'
import { Button, Form, Titulo } from './styles'

import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        numero,
        email
      })
    )
    navigate('/')
  }

  return (
    <Main>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Infos
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Nome"
        />
        <Infos
          value={numero}
          onChange={(evento) => setNumero(evento.target.value)}
          type="number"
          placeholder="Numero"
        />
        <Infos
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="Email"
        />
        <Button type="submit">Salvar</Button>
      </Form>
    </Main>
  )
}

export default Formulario
