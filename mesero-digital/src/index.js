import ReactDOM from 'react-dom';
import './index.css';
import Restaurante from './App';
import App from './App'
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBZBNoEgkB2ZTmT7dy70TKp9pVXNyvc6A0",
  authDomain: "mesero-digital-c7bc7.firebaseapp.com",
  projectId: "mesero-digital-c7bc7",
  storageBucket: "mesero-digital-c7bc7.appspot.com",
  messagingSenderId: "127012587845",
  appId: "1:127012587845:web:c1b6e10f59cbafc051162c"
};


initializeApp(firebaseConfig);






ReactDOM.render(<App/>, document.getElementById('root'));

