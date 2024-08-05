import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers';
import { increment, decrement } from '../../reducers/countSlice';

const CountComponent: React.FC = () => {
    const count = useSelector((state: RootState) => state.count.count);
    const dispatch = useDispatch();

    return (
        <div className="bg-white p-4 rounded shadow-md w-full max-w-md mt-4">
            <h2 className="text-xl font-bold mb-4">Count: {count}</h2>
            <button
                className="p-2 bg-blue-500 text-white rounded mr-2"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <button
                className="p-2 bg-red-500 text-white rounded"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    );
};

export default CountComponent;
