import React from 'react';
import { useSelector } from 'react-redux';
import ComponentA from '../components/RematchDemo/ComponentA';
import Layout from '../components/Layout';
import { RootState } from '../store'



const RematchDemo: React.FC = () => {
    // 直接获取 count 的值

    const countState = useSelector((state: RootState) => state.count)
    console.log({ countState })

    return (
        <Layout>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Rematch Demo</h1>
                <input
                    type="text"
                    value={`Current Count: ${countState}`}
                    readOnly
                    className="w-[260px] p-2 border border-gray-300 rounded mb-6 text-center text-lg bg-white shadow-md"
                />
                <ComponentA />
            </div>
        </Layout>
    );
};

export default RematchDemo;
