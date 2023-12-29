
import React from 'react'
import ReactDOM from 'react-dom/client'
//service worker
import { unregister } from './core'
//styles
import { GlobalStyles, theme } from './styles'
import { ThemeProvider } from 'styled-components'
//components
import { Card, Content, Grid, Title } from './components'

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content>
      <Title>Hello World</Title>
      <Card>
        <Grid />
      </Card>
    </Content>
  </ThemeProvider>
)

unregister()
