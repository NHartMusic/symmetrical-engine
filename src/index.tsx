
import React from 'react'
import ReactDOM from 'react-dom'
//service worker
import { unregister } from './core'
//styles
import { GlobalStyles, theme } from './styles'
import { ThemeProvider } from 'styled-components'
//components
import { Content, Title } from './components'


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content>
      <Title>Hello World</Title>
    </Content>
  </ThemeProvider>, 
  document.getElementById('root')
)

unregister()
