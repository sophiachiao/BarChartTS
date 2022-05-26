// import React from 'react'
// import {createRoot} from 'react-dom/client'
// import HelloWorld from './components/HelloWorld';
// import App from './components/App';
// import './styles.css';
// // import ScatterPlot from './Examples/ScatterPlot_Coffee';


// const root = createRoot(document.getElementById('root'));
// root.render(<App/>);

// const root = createRoot(document.getElementById('root'));
// root.render(<HelloWorld title='Hello Ju'/>);

// Doesn't work without correct props
// root.render(<HelloWorld title={3} />);

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}
  
render()

if (module.hot) {
  module.hot.accept('./components/App.jsx', render)
}