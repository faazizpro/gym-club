import logo from './logo.svg';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header/Header';
import GYM from './components/GYM/GYM';


function App() {
  return (
    <div>
        <Header></Header>
        <GYM></GYM>
    </div>
  );
}

export default App;
