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
import RootLayout from './components/pages/RootLayout/RootLayout';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Newsletter from './components/UI/Newsletter/Newsletter';

function App() {
	const ctx = useContext(AuthContext);

	if (!ctx) {
		return null;
	}

	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			children: [
				{ path: '/FashionStore', element: <MainPage /> },
				{ path: '/Shoes', element: <Shoes /> },
				{ path: '/Clothes', element: <Clothes /> },
				{ path: '/Accessories', element: <Accesories /> },
			],
		},
	]);

	return (
		<div className={style.container}>
			{ctx.isCart && (<ShoppingCart/>)}
			{ctx.popup && <Popup setPopup={ctx.setPopup} newText={ctx.message} />}
			<div className={style.app}>
				<RouterProvider router={router} />
				<Newsletter />
				<Footer />
			</div>
		</div>
	);
}

export default App;
