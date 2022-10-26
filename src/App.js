import './App.css';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'
import BooksList from './components/BooksList/BooksList';
import BookForm from './components/BookForm/BookForm';

function App() {
  return (
    <Router>
      <div className="header">
        <ul>
          <li>
            <NavLink to='/list'>List</NavLink>
          </li>
          <li>
            <NavLink to='/form' activeClassName='selected'>Form</NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path='/list' element= {<BooksList/>}>
        </Route>
        <Route path='/form' element= {<BookForm/>}>
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
