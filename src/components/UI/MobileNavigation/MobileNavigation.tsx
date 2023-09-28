import { useState, useContext } from 'react';
import style from './MobileNavigation.module.scss';

import ExitButton from '../Buttons/ExitButton/ExitButton';

import AuthContext from '../../../store/auth-context';
import { Link } from 'react-router-dom';


const MobileNavigation = () => {
	const [closing, setClosing] = useState(false);

	const mobileNavCtx = useContext(AuthContext);
	if(!mobileNavCtx){
		return null;
	}

	const handleCloseNav = () => {
		setClosing(true);
		setTimeout(() => {
			mobileNavCtx.setMobileNav(false);
		}, 500);
	};


	return (
		<div className={`${style.mobileNav} ${closing ? style.closing : ''}`}>
			<ExitButton
				className={style['mobileNav-btn']}
				onClick={() => {
					handleCloseNav();
				}}
				size={45}>
				</ExitButton>

			<div className={style['mobile-nav-box']}>
				<h1 className={style.title}>FashionStore</h1>

				<div className={style['btn-box']}>
					<Link to='/Clothes'
						className={` ${mobileNavCtx.currentPage === 'Clothes'? style.active : ''} ${style.mobileBtn} ${style.clothesBtn}`}
						onClick={() => {
							handleCloseNav();
							mobileNavCtx.setCurrentPage('Clothes')
						}}>
						Clothes
					</Link>
					<Link to='/Shoes'
						className={` ${mobileNavCtx.currentPage === 'Shoes'  ? style.active : ''} ${style.mobileBtn} ${style.shoesBtn}`}
						onClick={() => {
							handleCloseNav();
							mobileNavCtx.setCurrentPage('Shoes');
						}}>
						Shoes
					</Link>
					<Link to="/Accessories"
						className={` ${mobileNavCtx.currentPage === 'Accessories' ? style.active : ''} ${style.mobileBtn} ${style.accessoriesBtn}`}
						onClick={() => {
							handleCloseNav();
							mobileNavCtx.setCurrentPage('Accessories')
						}}>
						Accessories
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MobileNavigation;
