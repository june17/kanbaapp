import './main.css';
import React from 'react';
import ReactDom form 'react-dom';
import App from './components/App.jsx';

main();

function main(){
	const app = document.createElement('div');
	document.body.appendChild(app);
	ReactDOM.render(<App />,app);
}