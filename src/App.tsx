import { useContext } from 'react';
import style from './App.module.scss';

import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Navigation from './components/UI/Navigation/Navigation';
import Popup from './components/Popup/Popup';
import MobileNavigation from './components/UI/MobileNavigation/MobileNavigation';
import Shoes from './components/pages/Shoes/Shoes';
import Clothes from './components/pages/Clothes/Clothes';
import Accesories from './components/pages/Accesories/Accesories';

import AuthContext from './store/auth-context';
import Footer from './components/UI/Footer/Footer';
import MainPage from './components/pages/MainPage/MainPage';

function App() {
	const authContext = useContext(AuthContext);

	if (!authContext) {
		return null;
	}

	const {
		currentPage,

		handleSwitchPages,
		isCart,
		setIsCart,
		itemsInCart,
		setItems,
		totalPrice,
		setTotalPrice,
		popup,
		setPopup,
		isMobileNav,
		setMobileNav,
		error,
		setError,
		overflowClass,
	} = authContext;

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
			{isMobileNav && <MobileNavigation currentPage={currentPage} setMobileNav={setMobileNav} />}
			{popup && <Popup setPopup={setPopup} newText={error} />}

			<div className={style.app}>
				<Navigation
					handleSwitchPages={handleSwitchPages}
					setIsCart={setIsCart}
					itemsInCart={itemsInCart}
					setMobileNav={setMobileNav}
					setError={setError}
					setPopup={setPopup}
					currentPage={currentPage}
				/>
				{currentPage === 'main' && <MainPage />}

				<main className={style.main}>
					{currentPage === 'Shoes' && <Shoes />}
					{currentPage === 'Clothes' && <Clothes />}
					{currentPage === 'Accessories' && <Accesories />}
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
