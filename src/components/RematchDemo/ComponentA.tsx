import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

const ComponentA: React.FC = () => {
    const countState = useSelector((state: RootState) => state.count)
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch.count.incrementAsync(2)
    };

    const handleDecrement = () => {
        dispatch.count.incrementAsync(-2)
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <h2 className="text-xl font-semibold mb-2">Component A</h2>
            <p className="text-lg mb-2">Current Count: {countState}</p>
            <div className="flex space-x-2">
                <button
                    className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-700"
                    onClick={handleIncrement}
                >
                    Increment
                </button>
                <button
                    className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-700"
                    onClick={handleDecrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default ComponentA;
