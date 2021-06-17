import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { loadGames } from './actions/gamesAction';
import './Styles/App.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  })

  return (
    <div className="App">
      <h1>Gaming Hub</h1>
    </div>
  );
}

export default App;
