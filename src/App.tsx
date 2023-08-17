import React from 'react';
// import ShoppingCard from './components/ShoppingCard';

function App() {
	return (
		<div className='App'>
			<div className='navbar'>
				<h3 className='logo'>Logo</h3>
				<button className='btn shopping-cart-btn'>button</button>
			</div>
			<main>
				<h2 className='title'>Products</h2>
				<div className='items'>
					<div className='item'>
						<img className='item-image' alt='' />
						<h4 className='item-name'>Telefon</h4>
						<p></p>
						<span className='item-price'>499$</span>
						<button className='btn'>Add to cart</button>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
