import React from 'react';
import ForgotPassword from '@bit/smart-solution-4u.ss4u-components.form.forgot-password';
import DoubleColumn from '@bit/smart-solution-4u.ss4u-components.layout.double-column';

const { REACT_APP_NAME } = process.env;

const ForgotPasswordScreen = () => {

    return (
        <DoubleColumn>
            <ForgotPassword title={REACT_APP_NAME}></ForgotPassword>
        </DoubleColumn>
    );
}

export default ForgotPasswordScreen;