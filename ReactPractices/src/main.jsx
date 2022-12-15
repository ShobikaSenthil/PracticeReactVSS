import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import ClassComponent from './ClassComponent'
import NonPrimitive from './NonPrimitive'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ClassComponent></ClassComponent> */}
    <NonPrimitive></NonPrimitive>
  </React.StrictMode>,
)
