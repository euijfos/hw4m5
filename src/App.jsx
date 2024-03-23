import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserForm from './UserForm';
import UserInfo from './UserInfo';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <UserForm />
                <UserInfo />
            </div>
        </Provider>
    );
};

export default App;