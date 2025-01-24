'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type Props = {
    params: Promise<{
        loginId: string
    }>;
}

const LoginId: React.FC<Props> = ({
    params,
}) => {
    const router = useRouter();
    const [loginId, setLoginId] = useState<string | null>(null);

    useEffect(() => {
        params.then(resolvedParams => {
            setLoginId(resolvedParams.loginId);
        });
    }, [params]);

    const handleClick = () => {
        console.log("Vous avez cliquez sur le lien");
    };

    return (
        <div>
            <h1>Test Page</h1>
            <p>Page avec lien dynamique</p>
            <p>Login Id: {loginId}</p>
            <button onClick={() => handleClick()}>Cliquez ici</button>
        </div>
    );
};

export default LoginId;
