import React from 'react';

type Props = {
    params: {
        loginId: string
    };
}

const LoginId: React.FC<Props> = ({
    params,
}) => {
    return (
        <div>
            <h1>Test Page</h1>
            <p>This is a placeholder for the test page.</p>
            <p>Login Id: {params.loginId}</p>
        </div>
    );
};

export default LoginId;
