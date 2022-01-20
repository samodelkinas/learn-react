import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './header';
import SearchForm from './SearchForm'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


ReactDOM.render(
    <React.Fragment>
        <div className='container' >
            <Header />
            <SearchForm />
        </div>
    </React.Fragment>,

    document.getElementById('root')
);
