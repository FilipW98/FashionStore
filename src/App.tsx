import { useState } from 'react';
import style from './App.module.scss';

import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Navigation from './components/UI/Navigation/Navigation';
import Popup from './components/Popup/Popup';
import MobileNavigation from './components/UI/MobileNavigation/MobileNavigation';
import Shoes from './components/Categories/Shoes/Shoes';

import {Items,ErrorInfo} from "./types/types";


function App() {
	
	const [isCart, setIsCart] = useState(false);
	const [itemsInCart, setItems] = useState<Items[]>([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [popup, setPopup] = useState(false);
	const [isMobileNav, setMobileNav] = useState(false);
	const [error, setError] = useState<ErrorInfo>();
	
	const cartHandler = () => {
		setIsCart(true);
	};

	const addItemsToCart = (item: Items) => {
		const itemExists = itemsInCart.some(cartItem => cartItem.id === item.id);

		if (itemExists) {
			setPopup(true);
			setError({
				text: 'This item is already in the cart!',
			});
			return;
		}

		const newItem = {
			...item,
			count: 1,
		};
		setTotalPrice(totalPrice + item.price);
		setItems([...itemsInCart, newItem]);
	};

	const overflowClass = isCart || isMobileNav ? style['overflow-hidden'] : '';

	return (
		<div className={`${style.container} ${overflowClass}`}>
			{isCart && (
				<ShoppingCart
					setIsCart={setIsCart}
					itemsInCart={itemsInCart}
					totalPrice={totalPrice}
					setItems={setItems}
					setTotalPrice={setTotalPrice}
				/>
			)}
			{isMobileNav && <MobileNavigation setError={setError} setPopup={setPopup} setMobileNav={setMobileNav} />}
			{popup && <Popup setPopup={setPopup} newText={error} />}

			<div className={style.app}>
				<Navigation
					cartHandler={cartHandler}
					itemsInCart={itemsInCart}
					setMobileNav={setMobileNav}
					setError={setError}
					setPopup={setPopup}
				/>
				<main className={style.main}>
					<div className={style['title-box']}>
						<h3 className={style.title}>Shoes</h3>
						<div className={style.underline}></div>
					</div>

		<Shoes addItemsToCart={addItemsToCart} ></Shoes>
				</main>
			</div>
		</div>
	);
}

export default App;

