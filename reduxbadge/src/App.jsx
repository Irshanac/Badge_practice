import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ShowBlog from './blog/ShowBlog'
import CreateBlog from './blog/CreateBlog'
import Singleone from './blog/Singleone'
function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<ShowBlog/>}/>
        <Route path='/addblog' element={<CreateBlog/>}/>
        <Route path='/showOne/:id' element={<Singleone/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App