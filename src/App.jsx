import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Inicio from '@/page/Inicio/Inicio'
import Layout from '@/components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Inicio/>
      
    </Layout>
  )
}

export default App
