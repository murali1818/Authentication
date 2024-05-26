import React from 'react';

const Home = () => {
    const products = [
        {
            name: "Shoe",
            price: 249,
            imageUrl: "https://via.placeholder.com/150?text=Shoe"
        },
        {
            name: "Watch",
            price: 550,
            imageUrl: "https://via.placeholder.com/150?text=Watch"
        },
        {
            name: "Shirt",
            price: 300,
            imageUrl: "https://via.placeholder.com/150?text=Shirt"
        },
        {
            name: "Bag",
            price: 150,
            imageUrl: "https://via.placeholder.com/150?text=Bag"
        },
        {
            name: "Hat",
            price: 80,
            imageUrl: "https://via.placeholder.com/150?text=Hat"
        },
        {
            name: "Sunglasses",
            price: 200,
            imageUrl: "https://via.placeholder.com/150?text=Sunglasses"
        }
    ];

    return (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' }}>
            {products.map((product, index) => (
                <div key={index} style={{
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    padding: '20px',
                    maxWidth: '200px',
                    textAlign: 'center',
                    flex: '1 1 calc(33% - 40px)',
                    boxSizing: 'border-box',
                    margin: '10px'
                }}>
                    <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                    <h2  className=' font-bold blue-'>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;
