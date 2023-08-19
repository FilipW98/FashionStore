import { useState } from 'react';
import style from './App.module.scss';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Navigation from './components/Navigation/Navigation';

function App() {
	const items = [
		{
			id: 1,
			name: 'Nike Free RN',
			price: 149,
			image: require('./assets/img/nike-air-force.png'),
		},
		{
			id: 2,
			name: 'Nike Air Force 1',
			price: 130,
			image: require('./assets/img/black-nike2.png'),
		},
		{
			id: 3,
			name: 'Puma Vikky V3',
			price: 110,
			image: require('./assets/img/puma.png'),
		},
		{
			id: 4,
			name: 'Adidas Deerupt Runner',
			price: 99,
			image: require('./assets/img/gray-shoe.png'),
		},
		{
			id: 5,
			name: 'Nike Kyrie 7',
			price: 185,
			image: require('./assets/img/black-nike.png'),
		},
		{
			id: 6,
			name: 'Steve Madded Filiz',
			price: 129,
			image: require('./assets/img/big-shoe.png'),
		},
	];

	const [isCart, setIsCart] = useState(false);

	const cartHandler = () => {
		setIsCart(true);
	};

	return (
		<div>
			{isCart && <ShoppingCart setIsCart={setIsCart} />}
			<div className={style.app}>
				<Navigation cartHandler={cartHandler} />
				<main className={style.main}>
					<h2 className={style.title}>Shoes</h2>
					<div className={style.items}>
						{items.map(item => {
							return (
								<div className={style.item} key={item.id}>
									<img className={style['item-img']} alt='shoes' src={item.image} />
									<h4 className='item-name'>{item.name}</h4>
									<span className='item-price'>${item.price}</span>
									<button className='btn'>Add to cart</button>
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
