import React,{useContext} from 'react';
import { Link,useParams } from 'react-router-dom';
//Context
import { ProductsContext } from '../context/ProductsContextProvider.jsx';
//Style
import "./ProductDetail.css"

const ProductDetail = (props) => {
	const params = useParams()
	const id = params.id;
	const products = useContext(ProductsContext);
	const product = products[id-1];
	const {image,title,description,price,category} = product;

	return (
		<div className='detailContainer'>
			<img className='detailImage' src={image} alt="product" />
			<div className='detailTextContainer'>
				<h3>{title}</h3>
				<p className='detailDescription'>{description}</p>
				<p className='detailCategory'><span>Category:</span> {category}</p>
				<div className='detailButtonContainer'>
					<span className='detailPrice'>{price} $</span>
					<Link to="/shop-react/products">Back To Shop</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;