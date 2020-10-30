import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './components/redux/reducers/RootReducer';
import thunk from 'redux-thunk';
import { getFirebase, reduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';
import fbConfig from './components/config/FirebaseConfig';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({ getFirebase })),
  reduxFirebase(fbConfig, { useFirestoreForProfile:true, userProfile:"users",attachAuthIsReady: true }),
  reduxFirestore(fbConfig)
));

store['firebaseAuthIsReady'].then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
