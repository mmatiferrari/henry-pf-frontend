import Home from './components/Home/Home.jsx'
import DetailPadelField from './components/DetailPadelField/DetailPadelField.jsx'
import { Route, Routes } from 'react-router-dom'
import { Landing } from './components/Landing/Landing'
import Panel from './components/Panel/Panel.jsx'
import Perfil from './components/Perfil/Perfil.jsx'

export default function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Landing/>}/>
      <Route path = '/detail/:id' element={<DetailPadelField/>} />
      <Route exact path ='/home' element={<Home/>}/>
      <Route exact path ='/notification' element={<Home/>}/>
      <Route exact path ='/panel' element={<Panel/>}/>
      <Route exact path = '/perfil' element={<Perfil/>} />
    </Routes>
  )
}
