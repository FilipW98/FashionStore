import { useState } from 'react';
import style from './App.module.scss';

import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Navigation from './components/UI/Navigation/Navigation';
import Popup from './components/Popup/Popup';
import MobileNavigation from './components/UI/MobileNavigation/MobileNavigation';
import Shoes from './components/Categories/Shoes/Shoes';
import Clothes from './components/Categories/Clothes/Clothes';

import { Items, ErrorInfo } from './types/types';
import Accesories from './components/Categories/Accesories/Accesories';

function App() {
	const [isCart, setIsCart] = useState(false);
	const [itemsInCart, setItems] = useState<Items[]>([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [popup, setPopup] = useState(false);
	const [isMobileNav, setMobileNav] = useState(false);
	const [error, setError] = useState<ErrorInfo>();

	const [isShoes, setIsShoes] = useState(true);
	const [isClothes, setIsClothes] = useState(false);
	const [isAccessories, setIsAccessories] = useState(false);

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
			{isMobileNav && (
				<MobileNavigation
					setError={setError}
					setPopup={setPopup}
					setMobileNav={setMobileNav}
					setIsShoes={setIsShoes}
					isShoes={isShoes}
					setIsClothes={setIsClothes}
					isClothes={isClothes}
					setIsAccessories={setIsAccessories}
					isAccessories={isAccessories}
				/>
			)}
			{popup && <Popup setPopup={setPopup} newText={error} />}

			<div className={style.app}>
				<Navigation
					cartHandler={cartHandler}
					itemsInCart={itemsInCart}
					setMobileNav={setMobileNav}
					setError={setError}
					setPopup={setPopup}
					setIsShoes={setIsShoes}
					isShoes={isShoes}
					setIsClothes={setIsClothes}
					isClothes={isClothes}
					setIsAccessories={setIsAccessories}
					isAccessories={isAccessories}
				/>
				<main className={style.main}>
					{isShoes && <Shoes addItemsToCart={addItemsToCart}></Shoes>}
					{isClothes && <Clothes addItemsToCart={addItemsToCart}></Clothes>}
					{isAccessories && <Accesories addItemsToCart={addItemsToCart}></Accesories>}
				</main>
			</div>
		</div>
	);
}

export default App;
