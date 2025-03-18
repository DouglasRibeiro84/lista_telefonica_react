const temaDark = {
  mode: 'dark',
  corPrincipal: '#0C0B0A',
  corSecundaria: '#2E3434',
  verde: ' #6feb5f',
  vermelho: '#EB4747',
  amarelo: '#F7D566',
  azul: 'rgb(98, 167, 224);',
  texto: ' #fffbfb;',
  sombra: 'rgb(75, 72, 72);',
  card: 'rgb(140, 140, 140);'
}

export default temaDark

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
