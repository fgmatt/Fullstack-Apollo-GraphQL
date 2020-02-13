import React from 'react';
import Email from './Email';
import Password from './Password';
import Loginbutton from './Loginbutton';

const Login = async () => {
    return (
        <div>
            <h2>Login</h2>
            <Email />
            <Password />
            <Loginbutton />
        </div>
    );
};

export default Login;
