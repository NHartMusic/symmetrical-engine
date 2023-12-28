
import React from 'react'
import ReactDOM from 'react-dom'
//service worker
import { unregister } from './core'
//styles
import { GlobalStyles, theme } from './styles'
import { ThemeProvider } from 'styled-components'


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div>Hello World</div>
  </ThemeProvider>, 
  document.getElementById('root')
)

unregister()
