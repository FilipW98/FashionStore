import { useContext} from 'react';
import style from './App.module.scss';

import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Navigation from './components/UI/Navigation/Navigation';
import Popup from './components/Popup/Popup';
import MobileNavigation from './components/UI/MobileNavigation/MobileNavigation';
import Shoes from './components/Categories/Shoes/Shoes';
import Clothes from './components/Categories/Clothes/Clothes';
import Accesories from './components/Categories/Accesories/Accesories';

import AuthContext from './store/auth-context';

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
   isMobileNav,
   setMobileNav,
   error,
   setError,
   isShoes,
   setIsShoes,
   isClothes,
   setIsClothes,
   isAccessories,
   setIsAccessories,
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
				{isMobileNav && (
					<MobileNavigation
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
						setIsCart={setIsCart}
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
						{isShoes && <Shoes></Shoes>}
						{isClothes && <Clothes></Clothes>}
						{isAccessories && <Accesories></Accesories>}
					</main>
				</div>
			</div>
	);
}

export default App;
