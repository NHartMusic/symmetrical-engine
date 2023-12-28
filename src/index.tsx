
import React from 'react'
import ReactDOM from 'react-dom'
//service worker
import { unregister } from './core'
//styles
import { GlobalStyles } from './styles'


ReactDOM.render(
  <>
    <GlobalStyles />
    <div>Hello World</div>
  </>, 
  document.getElementById('root')
)

unregister()
