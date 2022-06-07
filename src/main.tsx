import './styles/main.css'
import 'virtual:windi.css'
import 'virtual:windi-devtools'

import React from 'react'
import ReactDOM from 'react-dom/client'

import TestButton from './components/TestButton'

const root = document.getElementById('root')
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <>
        <TestButton>Hello!</TestButton>
      </>
    </React.StrictMode>,
  )
}
