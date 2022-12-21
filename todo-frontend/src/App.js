import './App.scss';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoScreen from './screens/TodoScreen';
import SideScreen from './screens/SideScreen';
function App() {
  return (

    // addition of routing logic
    <Fragment>
      <BrowserRouter>
      <SideScreen/>
        <Routes>
            <Route path="todo" element={< TodoScreen/>} />
        </Routes>
      </BrowserRouter>
      </Fragment>
  );
}

export default App;
