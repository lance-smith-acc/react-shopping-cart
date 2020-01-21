import React, { useContext } from 'react';

// Components
import Product from './Product';

// Context
import { ProductContext } from '../contexts/ProductContext'

const Products = () => {
	const { products, addItem } = useContext(ProductContext);

	return (
		<div className="products-container">
			{products.map(products => (
				<Product
					key={products.id}
					product={products}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
