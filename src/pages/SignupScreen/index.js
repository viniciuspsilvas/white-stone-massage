import React from 'react';
import Signup from '@bit/smart-solution-4u.ss4u-components.form.signup';
import DoubleColumn from '@bit/smart-solution-4u.ss4u-components.layout.double-column';

const { REACT_APP_NAME } = process.env;

const SignupScreen = () => {

    return (
        <DoubleColumn>
            <Signup title={REACT_APP_NAME}></Signup>
        </DoubleColumn>
    );
}

export default SignupScreen;