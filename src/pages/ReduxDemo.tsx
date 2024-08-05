import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import ComponentA from '../components/ReduxDemo/ComponentA';
import CountComponent from '../components/ReduxDemo/CountComponent';
import Layout from '../components/Layout';

const ReduxDemo: React.FC = () => {
    const search = useSelector((state: RootState) => state.search.search);

    return (
        <Layout>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
                <h1 className="text-2xl font-bold mb-4">Redux Demo</h1>
                <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 border border-gray-300 rounded mb-4"
                    value={search}
                    readOnly
                />
                <ComponentA />
                <CountComponent />
            </div>
        </Layout>
    );
};

export default ReduxDemo;
