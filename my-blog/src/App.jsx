import React from 'react'
import FrontPage from './components/Front'
import CreateBlog from './components/CreateBlog'
import { BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'
import Contents from './components/Contents'
import './App.css'
import Home from './components/Home'


function App() {

  return (
    <BrowserRouter>

        <Home>

        <Routes>
          <Route path='/CreateBlog' element={<CreateBlog/>}></Route>
          <Route path='/' element={<FrontPage/>}></Route>
          <Route path='/blogs/:blogId' element={<Contents/>}></Route>
        </Routes>

        </Home>


      </BrowserRouter>

  )
}

export default App
