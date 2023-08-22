import './ShoppingCart.module.scss';
import { FaRegCircleXmark } from 'react-icons/fa6';
import { FaTrashCan } from 'react-icons/fa6';
import style from './ShoppingCart.module.scss';
import { Items } from '../../App';
interface ShoppingCartProps {
	setIsCart: (newIsCartValue: boolean) => void;
	itemsInCart: Items[];
	totalPrice: number;
	setItems: (newItems: Items[]) => void;
}


const ShoppingCart: React.FC<ShoppingCartProps> = ({ setIsCart, itemsInCart, totalPrice, setItems }) => {


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
				<div className={style.header}>
					<h2>Shopping cart</h2>
					<button
						className={`btn ${style['close-btn']}`}
						onClick={() => {
							setIsCart(false);
						}}>
						<FaRegCircleXmark size={29} />
					</button>
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
									}}>
									{numbersArr.map(num => 
										 (
											<option value={num} key={num}>
												{num}
											</option>
										)
									)}
								</select>
								<button
									className={`btn ${style['remove-btn']}`}
									onClick={() => {
										removeItemHandler(item.id);
									}}>
									{<FaTrashCan size={20} />}
								</button>
							</div>
						);
					})}
				</div>
				{itemsInCart.length !== 0 && (
					<p className={style['total-price']}>
						Total price: <span>${totalPrice}</span>
					</p>
				)}
				{itemsInCart.length !== 0 && <button className={`btn ${style['checkout-btn']}`}>Checkout</button>}
			</div>
		</div>
	);
};

export default ShoppingCart;
