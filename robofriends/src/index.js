import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
//tachyon brukes til css
import 'tachyons';
import { robots } from './robots.js';



//her er react delen, som sier at vi vil bruke import filene i render og
//vil rendre det som er inni
//index filen brukes til å bestemme hva som skal hvises i rekkefølge
ReactDOM.render(<App />
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
