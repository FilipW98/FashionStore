// import react from "react";
import './ShoppingCart.module.scss';
import { FaRegCircleXmark } from 'react-icons/fa6';
import { FaTrashCan } from 'react-icons/fa6';
import style from './ShoppingCart.module.scss';
import { Items } from '../../App';

interface ShoppingCartProps {
	setIsCart: (newIsCartValue: boolean) => void;
	itemsInCart: Items[];
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ setIsCart, itemsInCart }) => {
	console.log(itemsInCart);
	console.log('xd');
	itemsInCart.forEach(item => {
		console.log('Image:', item.image);
	});
	return (
		<div
			className={style['cart-shadow']}>
			<div className={style.shoppingCart}>
				<div className={style.header}>
					<h2>Shopping cart</h2>
					<button
						className={`btn ${style['close-btn']}`}
						onClick={() => {
							setIsCart(false);
						}}>
						<FaRegCircleXmark size={25} />
					</button>
				</div>
				<div className={style['cart-items']}>
					{itemsInCart.length === 0 && <span className='empty-text'>Your basket is currently empty</span>}

					{itemsInCart.map(item => {
						return (
							<div className={style['cart-item']}>
								<img className={style['cart-img']} alt='shoe' src={item.image} />
								<div className='item-info'>
									<h4>{item.name}</h4>
									<span className='item-price'>${item.price}</span>
								</div>
								<select
									className={style['item-number']}
									// value={1}
									// onChange={event => {
									// 	onQuantityChange(product.id, event.target.value);
									// }}
								>
									{/* {[...Array(10).keys()].map(number => {
										const num = number + 1;
										return (
											<option value={num} key={num}>
												{num}
											</option>
										);
									})} */}
								</select>
								<button className={`btn ${style['remove-btn']}`}>{<FaTrashCan size={20} />}</button>
							</div>
						);
					})}

				</div>
                <p className={style['total-price']}>Total price: <span>$999</span></p>
					<button className={`btn ${style['checkout-btn']}`}>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
