import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Summary from './components/Summary'
import Entrepreneurs from './components/Entrepreneurs';
import Sidebar from './components/sidebar';

ReactDOM.render(<Entrepreneurs />, document.getElementById('root'));
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createReduxStore } from './redux/store'


// ReactDOM.render(
//     <Provider store={createReduxStore()}>
//     <App />
//     </Provider>,
//     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
