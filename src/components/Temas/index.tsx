import { useTheme } from 'styled-components'

import TemaClaro from '../../images/26653.png'
import TemaEscuro from '../../images/flat-moon-icon-symbol-illustration-free-vector.jpg'
import { AreaTema, TemaImage, TextoTrocaTema } from './styles'

type Props = {
  trocaTema: () => void
}

const Temas = (props: Props) => {
  const theme = useTheme()

  return (
    <AreaTema onClick={props.trocaTema}>
      <TextoTrocaTema>Trocar Tema</TextoTrocaTema>
      <TemaImage src={theme.mode === 'light' ? TemaClaro : TemaEscuro} />
    </AreaTema>
  )
}

export default Temas
