const temaLight = {
  mode: 'light',
  corPrincipal: ' #deb8a8',
  corSecundaria: ' #f9f0e1',
  verde: ' #6feb5f',
  vermelho: '#EB4747',
  amarelo: '#F7D566',
  azul: 'rgb(98, 167, 224);',
  texto: ' #fffbfb;',
  sombra: 'rgba(0, 0, 0, 0.3);'
}

export default temaLight

export type Theme = {
  mode: string
  corPrincipal: string
  corSecundaria: string
  verde: string
  vermelho: string
  amarelo: string
  azul: string
  texto: string
  sombra: string
}
