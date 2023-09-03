import { useState } from 'react';
import style from './App.module.scss';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Navigation from './components/UI/Navigation/Navigation';
import Popup from './components/Popup/Popup';
import MobileNavigation from './components/UI/MobileNavigation/MobileNavigation';

export interface Items {
	id: number;
	name: string;
	price: number;
	image: string;
	count: number;
}

export interface ErrorInfo {
	text: string;
}

function App() {
	const items = [
		{
			id: 1,
			name: 'Nike Free RN',
			price: 149,
			image: require('./assets/img/nike-air-force.png'),
			count: 1,
		},
		{
			id: 2,
			name: 'Nike Air Force 1',
			price: 130,
			image: require('./assets/img/black-nike2.png'),
			count: 1,
		},
		{
			id: 3,
			name: 'Puma Vikky V3',
			price: 110,
			image: require('./assets/img/puma.png'),
			count: 1,
		},
		{
			id: 4,
			name: 'Adidas Deerupt Runner',
			price: 99,
			image: require('./assets/img/gray-shoe.png'),
			count: 1,
		},
		{
			id: 5,
			name: 'Nike Kyrie 7',
			price: 185,
			image: require('./assets/img/black-nike.png'),
			count: 1,
		},
		{
			id: 6,
			name: 'Steve Madded Filiz',
			price: 129,
			image: require('./assets/img/big-shoe.png'),
			count: 1,
		},
	];

	const [isCart, setIsCart] = useState(false);
	const [itemsInCart, setItems] = useState<Items[]>([]);
	const [totalPrice, setTotalPrice] = useState(0);
	// const [addItemError, setItemError] = useState(false);
	const [popup, setPopup] = useState(false);
	// const [unvaliableFeature, setUnavaliableFeature] = useState(false);
	const [isMobileNav, setMobileNav] = useState(false);
	const [error, setError] = useState<ErrorInfo>();
	console.log(error);

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

					<div className={style.items}>
						{items.map(item => {
							return (
								<div className={style.item} key={item.id}>
									<img className={style['item-img']} alt='shoes' src={item.image} />
									<div className={style['item-data']}>
										{' '}
										<h4 className={style['item-name']}>{item.name}</h4>
										<span className='item-price'>${item.price}</span>
										<button
											className={`btn ${style['add-btn']}`}
											onClick={() => {
												addItemsToCart(item);
											}}>
											Add to cart
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;

