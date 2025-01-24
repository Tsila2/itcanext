import Link from 'next/link';
import React from 'react';

const TestPage: React.FC = () => {
    return (
        <div>
            <h1>Test Page</h1>
            <p>This is a placeholder for the test page.</p>
            <Link href="/login/12">
                Login 1
            </Link>
        </div>
    );
};

export default TestPage;