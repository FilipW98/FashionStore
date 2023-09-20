import { useContext } from 'react';
import style from './App.module.scss';

import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Popup from './components/Popup/Popup';
import Shoes from './components/pages/Shoes/Shoes';
import Clothes from './components/pages/Clothes/Clothes';
import Accesories from './components/pages/Accesories/Accesories';

import AuthContext from './store/auth-context';
import Footer from './components/UI/Footer/Footer';
import MainPage from './components/pages/MainPage/MainPage';
import RootLayout from "./components/pages/RootLayout/RootLayout";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
	const authContext = useContext(AuthContext);

	if (!authContext) {
		return null;
	}

	const {
		isCart,
		setIsCart,
		itemsInCart,
		setItems,
		totalPrice,
		setTotalPrice,
		popup,
		setPopup,
		error,
		overflowClass,
	} = authContext;

	const router = createBrowserRouter([
		{path: '/', 
		element: <RootLayout/>, 
		children: [
			{ path: '/FashionStore', element: <MainPage /> },
			{ path: '/Shoes', element: <Shoes /> },
			{ path: '/Clothes', element: <Clothes /> },
			{ path: '/Accessories', element: <Accesories /> },
		]
	},
	]);

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
				{popup && <Popup setPopup={setPopup} newText={error} />}
				<div className={style.app}>
					<RouterProvider router={router}/>
					<Footer />
				</div>
			</div>
		
	);
}

export default App;
