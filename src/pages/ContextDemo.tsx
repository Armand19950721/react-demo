import React, { createContext, useState } from 'react';
import ComponentA from '../components/ContextDemo/ComponentA';
import Layout from '../components/Layout';

export const SearchContext = createContext({
    search: '',
    setSearch: (value: string) => { },
});

const ContextDemo: React.FC = () => {
    const [search, setSearch] = useState('');

    return (
        <Layout>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
                <h1 className="text-2xl font-bold mb-4">Context Demo</h1>
                <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 border border-gray-300 rounded mb-4"
                    value={search}
                    readOnly
                />
                <SearchContext.Provider value={{ search, setSearch }}>
                    <ComponentA />
                </SearchContext.Provider>
            </div>
        </Layout>
    );
};

export default ContextDemo;
