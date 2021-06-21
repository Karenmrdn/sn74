import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";


/* HashRouter МЫ ИСПОЛЬЗУЕМ ТОЛЬКО ДЛЯ ТОГО, ЧТОБЫ ЗАДЕПЛОИТЬ ПРИЛОЖЕНИЕ НА GH-PAGES, А ВООБЩЕ НАДО ИСПОЛЬЗОВАТЬ BrowserRouter*/
ReactDOM.render(
    /*<React.StrictMode>*/
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
    /*</React.StrictMode>*/,
    document.getElementById('root')
);

serviceWorker.unregister();
