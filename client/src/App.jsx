import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Books from './pages/Books';
import Add from './pages/Add';
import Update from './pages/Update';

function App() {
  
  return (
    <div className='flex items-center justify-center h-screen text-center'>
     <Router>
      <Routes>
        <Route path="/" element={<Books/>} />
        <Route path="/add" element={<Add/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
     </Router>
      
    </div>
  )
}

export default App
