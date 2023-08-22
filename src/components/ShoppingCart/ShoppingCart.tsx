import './ShoppingCart.module.scss';
import { FaTrashCan } from 'react-icons/fa6';
import style from './ShoppingCart.module.scss';
import { Items } from '../../App';
import Button from '../UI/Buttons/ExitButton/Button';
import ConfirmButton from '../UI/Buttons/ConfirmButton/ConfirmButton';
interface ShoppingCartProps {
	setIsCart: (newIsCartValue: boolean) => void;
	itemsInCart: Items[];
	totalPrice: number;
	setItems: (newItems: Items[]) => void;
	setTotalPrice: (newTotalPrice: number) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ setIsCart, itemsInCart, totalPrice, setItems,setTotalPrice }) => {
	const removeItemHandler = (itemId: number) => {
		const newItemsArr = itemsInCart.filter(item => item.id !== itemId);
		setItems(newItemsArr);
	};

	const updateItemCount = (itemId: number, newCount: number) => {
		const updatedItems = itemsInCart.map(item => {
			if (item.id === itemId) {
				return {
					...item,
					count: newCount,
				};
			}
			return item;
		});
		setItems(updatedItems);
	};

	return (
		<div className={style['cart-shadow']}>
			<div className={style.shoppingCart}>
				<div>
					<div className={style.header}>
						<h2>Shopping cart</h2>
						<Button	onClick={() => {setIsCart(false)}}>
						</Button>
					</div>
					<div className={`${style['cart-items']} ${itemsInCart.length === 0 ? style['no-border'] : ''}`}>
						{itemsInCart.length === 0 && <span className='empty-text'>Your basket is currently empty</span>}

						{itemsInCart.map(item => {
							const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
							return (
								<div className={style['cart-item']} key={item.id}>
									<img className={style['cart-img']} alt='shoe' src={item.image} />
									<div className='item-info'>
										<h4>{item.name}</h4>
										<span className='item-price'>${item.price * item.count}</span>
									</div>
									<select
										className={style['item-number']}
										onChange={event => {
											const newCount = parseInt(event.target.value);
											updateItemCount(item.id, newCount);
											const newTotalPrice = totalPrice + item.price * newCount;
											setTotalPrice(newTotalPrice);
										}}>
										{numbersArr.map(num => (
											<option value={num} key={num}>
												{num}
											</option>
										))}
									</select>
									<button
										className={`btn ${style['remove-btn']}`}
										onClick={() => {
											const newTotalPrice = totalPrice - item.price * item.count;
											removeItemHandler(item.id);
											setTotalPrice(newTotalPrice);
										}}>
										{<FaTrashCan size={20} />}
									</button>
								</div>
							);
						})}
					</div>
				</div>
				<div className={style['btn-price-box']}>
					{itemsInCart.length !== 0 && (
						<p className={style['total-price']}>
							Total price: <span>${totalPrice}</span>
						</p>
					)}
					{itemsInCart.length !== 0 && (
						<ConfirmButton
							onClick={() => {
								setIsCart(false);
							}}>
							Checkout
						</ConfirmButton>
					)}
				</div>
			</div>
		</div>
	);
};

export default ShoppingCart;
