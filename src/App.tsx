import React from 'react';
import style from './App.module.scss';
import { FaShoppingBag } from 'react-icons/fa';
import { FaScrewdriverWrench } from 'react-icons/fa6';
// import ShoppingCard from './components/ShoppingCard';

function App() {
	const items = [
		{
			id: 1,
			name: 'Nike Free RN',
			rating: 4.3,
			description: 'Vivamus vitae neque accumsan, ultrices nisl et, viverra magna. Fusce nec maximus sem.',
			price: 199,
			// image: snickersNikeSmall,
			// image: require('./assets/img/snickers-nike-small.png'),

			image: require('./assets/img/nike-air-force.png'),
		},
		{
			id: 2,
			name: 'Fusce sit amet ipsum',
			rating: 4.2,
			description:
				'Maecenas fermentum urna egestas urna ullamcorper sodales. Sed a enim imperdiet, tempus massa a, iaculis tellus.',
			price: 229,
			image: require('./assets/img/black-nike2.png'),
		},
		{
			id: 3,
			name: 'Etiam volutpat aliquam',
			rating: 3.2,
			description: 'Praesent et orci vel nunc interdum aliquet et non dolor. Etiam eget finibus justo',
			price: 99,
			image: require('./assets/img/puma.png'),
		},
		{
			id: 4,
			name: 'Lorem ipsum dolor',
			rating: 4.8,
			description: 'Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.',
			price: 119,
			// image: require('./assets/img/adidas.png'),

			image: require('./assets/img/gray-shoe.png'),
		},
		{
			id: 5,
			name: 'Ultrices nisl',
			rating: 4.5,
			description:
				'Phasellus condimentum, ante et dictum placerat, nulla ipsum commodo lorem, ut mollis nibh turpis a metus.',
			price: 85,
			// image: require('./assets/img/nike-air.png'),
			image: require('./assets/img/black-nike.png'),
		},
		{
			id: 6,
			name: 'Curabitur in elementum tortor',
			rating: 3.8,
			description:
				' Mauris convallis diam nibh, non malesuada enim facilisis non. Etiam sapien augue, molestie a porta sed',
			price: 149,
			image: require('./assets/img/big-shoe.png'),
		},
	];
	return (
		<div className={style.app}>
			<div className={style.navbar__container}>
				<div className={style.navbar__categories}>
					<button>Clothes</button>
					<button>Shoes</button>
					<button>Accessories</button>
				</div>
				<div className={style.navbar}>
					<h3 className={style.logo}>FashionStore</h3>
					<div className={style['icons-box']}>
						
						<button className={style['shopping-cart-btn']}>
							<FaShoppingBag className={style.icon} size={22} />
						</button>
						<button className={style['shopping-cart-btn']}>
							<FaScrewdriverWrench className={style.icon} size={22} />
						</button>
					</div>
				</div>
			</div>
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
	);
}

export default App;
