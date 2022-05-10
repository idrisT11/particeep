/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

*/

import React from 'react';
import { render } from 'react-dom';  
import { createStore } from 'redux';  
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './reducers';
import './index.css';


const store = createStore(rootReducer)  
  
render(  
  <Provider store={store}>  
    <App />  
  </Provider>,  
  document.getElementById('root')  
)  

