import React, {useContext} from 'react';
import style from './ShoppingCart.module.scss';
import ExitButton from '../UI/Buttons/ExitButton/ExitButton';
import ConfirmButton from '../UI/Buttons/ConfirmButton/ConfirmButton';
import { FaTrashCan } from 'react-icons/fa6';

import {Items} from '../../types/types';
import AuthContext from '../../store/auth-context';

const ShoppingCart = () => {

	const ctx = useContext(AuthContext);

	if(!ctx){
		return null
	}
	
	const clearedCart: Items[] = [];

	const removeItemHandler = (itemId: number) => {
		const newItemsArr = ctx.itemsInCart.filter(item => item.id !== itemId);
		ctx.setItems(newItemsArr);
	};

	const updateItemCount = (itemId: number, newCount: number) => {
		const updatedItems = ctx.itemsInCart.map(item => {
			if (item.id === itemId) {
				return {
					...item,
					count: newCount,
				};
			}
			return item;
		});
		ctx.setItems(updatedItems);

		let newTotalPrice = 0;
		updatedItems.forEach(item => {
			newTotalPrice = newTotalPrice + item.price * item.count;
		});
		ctx.setTotalPrice(newTotalPrice);
	};

	return (
		<div className={style['cart-shadow']}>
			<div className={style.shoppingCart}>
				<div>
					<div className={style.header}>
						<h2>Shopping cart</h2>
						<ExitButton
						className={style.button} size={29}
							onClick={() => {
								ctx.setIsCart(false);
							}}></ExitButton>
					</div>
					<div className={`${style['cart-items']} ${ctx.itemsInCart.length === 0 ? style['no-border'] : ''}`}>
						{ctx.itemsInCart.length === 0 && <span className='empty-text'>Your basket is currently empty</span>}

						{ctx.itemsInCart.map(item => {
							const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
							return (
								<div className={style['cart-item']} key={item.id}>
									<img className={style['cart-img']} alt='shoe' src={item.image} />
									<div className={style['cart-data']}>
									<div className={style['item-info']}>
										<h4>{item.name}</h4>
										<span>${item.price * item.count}</span>
									</div>
									<select
										className={style['item-number']}
										onChange={event => {
											const newCount = parseInt(event.target.value);
											updateItemCount(item.id, newCount);
										}}
										value={item.count}>
										{numbersArr.map(num => (
											<option value={num} key={num}>
												{num}
											</option>
										))}
									</select>
									</div>
									<button
										className={`btn ${style['remove-btn']}`}
										onClick={() => {
											const newTotalPrice = ctx.totalPrice - item.price * item.count;
											removeItemHandler(item.id);
											ctx.setTotalPrice(newTotalPrice);
										}}>
										{<FaTrashCan size={20} />}
									</button>
								</div>
							);
						})}
					</div>
				</div>
				<div className={style['btn-price-box']}>
					{ctx.itemsInCart.length !== 0 && (
						<>
						<div className={style.underline}></div>
						<p className={style['total-price']}>
							Total price: <span>${ctx.totalPrice}</span>
						</p>
							<ConfirmButton
							onClick={() => {
								ctx.setIsCart(false);
								ctx.setPopup(true)
								ctx.setMessage({
									text: 'Thanks for shopping!',
								});
								ctx.setItems(clearedCart);
								ctx.setTotalPrice(0);
							}}>
							Checkout
						</ConfirmButton>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default ShoppingCart;
