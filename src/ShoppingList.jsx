import React, { useState } from 'react';

function ShoppingList() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const addItem = () => {
        if (newItem.trim()) {
            setItems([...items, newItem]);
            setNewItem('');
        }
    };

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div className="card p-3">
            <h2 className="text-center mb-3">Shopping List</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="Add a new item"
                />
                <button
                    onClick={addItem}
                    className="btn btn-primary mt-2 w-100"
                >
                    Add Item
                </button>
            </div>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {item}
                        <button
                            onClick={() => removeItem(index)}
                            className="btn btn-danger btn-sm"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;
