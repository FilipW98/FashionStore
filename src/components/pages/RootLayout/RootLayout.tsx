import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../../UI/Navigation/Navigation';
import MobileNavigation from '../../UI/MobileNavigation/MobileNavigation';
import AuthContext from '../../../store/auth-context';
import style from "./RootLayout.module.scss";

const RootLayout = () => {
	const ctx = useContext(AuthContext);

	if (!ctx) {
		return null;
	}

	return (
		<>
			{ctx.isMobileNav && <MobileNavigation/>}
			<Navigation/>
			<main className={style.main}>
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
