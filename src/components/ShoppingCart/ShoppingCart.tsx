// import react from "react";
import './ShoppingCart.module.scss';
import { FaRegCircleXmark } from 'react-icons/fa6';
import { FaTrashCan } from 'react-icons/fa6';
import style from './ShoppingCart.module.scss';

interface ShoppingCartProps {
    setIsCart: (newIsCartValue: boolean) => void;
}


const ShoppingCart: React.FC<ShoppingCartProps> = ({setIsCart}) => {
	return (
		<div className={style['cart-shadow']}>
			<div className={style.shoppingCart}>
				<div className={style.header}>
					<h2>Shopping cart</h2>
					<button className={`btn ${style['close-btn']}`} onClick={() => {setIsCart(false)}}>
						<FaRegCircleXmark size={25} />
					</button>
				</div>
				<div className={style['cart-items']}>
					<span className='empty-text'>Your basket is currently empty</span>

					<div className={style['cart-item']}>
						<img className={style['cart-img']} alt='shoe' src={require('../../assets/img/adidas.png')} />
						<div className='item-info'>
							<h3>Nike</h3>
							<span className='item-price'>$199</span>
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

					<button className={`btn ${style['checkout-btn']}`}>Checkout</button>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCart;
