import React, { Fragment, useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { WithDevCtx } from './store';


ReactDOM.render(<Fragment>
    <WithDevCtx.Provider WithDevCtx={false}>
        <App />
    </WithDevCtx.Provider>
</Fragment>, document.getElementById('root'));
