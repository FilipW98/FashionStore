import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../../UI/Navigation/Navigation';
import AuthContext from '../../../store/auth-context';
import style from "./RootLayout.module.scss";

const RootLayout = () => {
	const authContext = useContext(AuthContext);

	if (!authContext) {
		return null;
	}

	const { itemsInCart, setMobileNav, setError, setPopup} = authContext;

	return (
		<>
			<Navigation
				itemsInCart={itemsInCart}
				setMobileNav={setMobileNav}
				setError={setError}
				setPopup={setPopup}
			/>
			<main className={style.main}>
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
