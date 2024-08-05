import React from 'react';

interface ComponentBProps {
    setOptionValue: (value: string) => void;
}

const ComponentB: React.FC<ComponentBProps> = ({ setOptionValue }) => {
    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Options:</label>
            <div className="flex space-x-4">
                <button
                    className="p-2 border border-gray-300 rounded hover:bg-gray-100"
                    onClick={() => setOptionValue('option1')}
                >
                    Option 1
                </button>
                <button
                    className="p-2 border border-gray-300 rounded hover:bg-gray-100"
                    onClick={() => setOptionValue('option2')}
                >
                    Option 2
                </button>
                <button
                    className="p-2 border border-gray-300 rounded hover:bg-gray-100"
                    onClick={() => setOptionValue('option3')}
                >
                    Option 3
                </button>
            </div>
        </div>
    );
};

export default ComponentB;
