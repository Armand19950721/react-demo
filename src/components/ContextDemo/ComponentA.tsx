import React, { useContext, useState, useEffect } from 'react';
import { SearchContext } from '../../pages/ContextDemo';
import ComponentB from './ComponentB';

const ComponentA: React.FC = () => {
    const { search, setSearch } = useContext(SearchContext);
    const [dropdownValue, setDropdownValue] = useState('default');
    const [optionValue, setOptionValue] = useState('option1');

    useEffect(() => {
        setSearch(`${dropdownValue} - ${optionValue}`);
    }, [dropdownValue, optionValue, setSearch]);

    return (
        <div className="bg-white p-4 rounded shadow-md w-full max-w-md">
            <label className="block mb-2 text-sm font-medium text-gray-700">Dropdown Menu:</label>
            <select
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={dropdownValue}
                onChange={(e) => setDropdownValue(e.target.value)}
            >
                <option value="default">Default</option>
                <option value="select1">Select 1</option>
                <option value="select2">Select 2</option>
                <option value="select3">Select 3</option>
            </select>
            <ComponentB setOptionValue={setOptionValue} />
        </div>
    );
};

export default ComponentA;
