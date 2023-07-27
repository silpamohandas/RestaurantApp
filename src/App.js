// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import SingleView from './SingleView';

function App() {
  return (
   <div>
<Header></Header>
<Routes>
  <Route path='' element={<Home></Home>}></Route>
  <Route path='restaurentView/:id' element={<SingleView></SingleView>}></Route>
</Routes>
   </div>
  );
}

export default App;
