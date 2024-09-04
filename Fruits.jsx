import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';

function Fruits() {
    const initialFruits = [
        { id: 1, name: 'Apple', price: 100 },
        { id: 2, name: 'Banana', price: 50 },
        { id: 3, name: 'Cherry', price: 30 },
        { id: 4, name: 'Kiwi', price: 200 },
        { id: 5, name: 'Mango', price: 450 }
    ];

    const [fruits, setFruits] = useState(initialFruits);
    const [editFruitId, setEditFruitId] = useState(null);
    const [editName, setEditName] = useState('');
    const [editPrice, setEditPrice] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [newFruitName, setNewFruitName] = useState('');
    const [newFruitPrice, setNewFruitPrice] = useState('');
    const [cart, setCart] = useState([]);

    const handleEditClick = (fruit) => {
        setEditFruitId(fruit.id);
        setEditName(fruit.name);
        setEditPrice(fruit.price);
    };

    const handleSaveClick = () => {
        setFruits(fruits.map(fruit =>
            fruit.id === editFruitId ? { ...fruit, name: editName, price: parseFloat(editPrice) } : fruit
        ));
        setEditFruitId(null);
        setEditName('');
        setEditPrice('');
    };

    const handleCancelClick = () => {
        setEditFruitId(null);
        setEditName('');
        setEditPrice('');
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const handleAddFruit = () => {
        if (newFruitName && newFruitPrice) {
            const newFruit = {
                id: fruits.length + 1,
                name: newFruitName,
                price: parseFloat(newFruitPrice)
            };
            setFruits([...fruits, newFruit]);
            setNewFruitName('');
            setNewFruitPrice('');
        }
    };

    const handleAddToCart = (fruit) => {
        setCart([...cart, fruit]);
    };

    const handleRemoveFromCart = (fruitId) => {
        setCart(cart.filter(fruit => fruit.id !== fruitId));
    };

    const filteredFruits = fruits.filter(fruit => fruit.name.toLowerCase().includes(searchQuery));

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row my-4">
                    <div className="col-md-12">
                        <input
                            type="text"
                            className="form-control mb-4"
                            placeholder="Search fruits"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="col-md-12 mb-4">
                        <input
                            type="text"
                            className="form-control mr-2"
                            placeholder="Fruit Name"
                            value={newFruitName}
                            onChange={(e) => setNewFruitName(e.target.value)}
                        />
                        <input
                            type="number"
                            className="form-control mr-2"
                            placeholder="Fruit Price"
                            value={newFruitPrice}
                            onChange={(e) => setNewFruitPrice(e.target.value)}
                        />
                        <button className="btn btn-success" onClick={handleAddFruit}>Add Fruit</button>
                    </div>
                    <div className="col-md-9">
                        <ul className="list-group">
                            {filteredFruits.map(fruit => (
                                <li key={fruit.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    {editFruitId === fruit.id ? (
                                        <div className="d-flex align-items-center">
                                            <input
                                                type="text"
                                                className="form-control mr-2"
                                                value={editName}
                                                onChange={(e) => setEditName(e.target.value)}
                                            />
                                            <input
                                                type="number"
                                                className="form-control mr-2"
                                                value={editPrice}
                                                onChange={(e) => setEditPrice(e.target.value)}
                                            />
                                            <button className="btn btn-primary mr-2" onClick={handleSaveClick}>Save</button>
                                            <button className="btn btn-secondary" onClick={handleCancelClick}>Cancel</button>
                                        </div>
                                    ) : (
                                        <>
                                            <span>{fruit.name} - Rs.{fruit.price.toFixed(2)}</span>
                                            <div>
                                                <button className="btn btn-warning btn-sm mr-2" onClick={() => handleEditClick(fruit)}>Edit</button>
                                                <button className="btn btn-info btn-sm" onClick={() => handleAddToCart(fruit)}>Add to Cart</button>
                                            </div>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>Cart</h4>
                        <ul className="list-group">
                            {cart.map(fruit => (
                                <li key={fruit.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>{fruit.name} - Rs.{fruit.price.toFixed(2)}</span>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleRemoveFromCart(fruit.id)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Fruits;
