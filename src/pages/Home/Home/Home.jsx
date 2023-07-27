import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <h1>This is home page</h1>
        </div>
    );
};

export default Home;