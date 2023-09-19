import style from './Navigation.module.scss';
import { useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import hangerImage from '../../../assets/img/black-hanger.png';

import { FaShoppingBag } from 'react-icons/fa';
import { FaScrewdriverWrench, FaBars } from 'react-icons/fa6';

// import { NavigationProps } from '../../../types/types';

import { Link } from 'react-router-dom';

const Navigation= () => {

	const navCtx = useContext(AuthContext);
	if(!navCtx){
		return null;
	}

	return (
		<div className={style.navbar__container}>
			<FaBars
				onClick={() => {
					navCtx.setMobileNav(true);
				}}
				className={style.burgerBtn}
				size={35}
			/>
			<div className={style.navbar__categories}>
				<Link
					onClick={() => {
						navCtx.setCurrentPage('Clothes');
					}}
					to='/Clothes'
					className={`${navCtx.currentPage === 'Clothes' ? style.active : ''} ${style['category-link']}`}>
					Clothes
				</Link>

				<Link
					onClick={() => {
						navCtx.setCurrentPage('Shoes');
					}}
					to='/Shoes'
					className={`${navCtx.currentPage === 'Shoes' ? style.active : ''} ${style['category-link']}`}>
					Shoes
				</Link>

				<Link
					onClick={() => {
						navCtx.setCurrentPage('Accessories');
					}}
					to='/Accessories'
					className={`${navCtx.currentPage === 'Accessories' ? style.active : ''} ${style['category-link']}`}>
					Accessories
				</Link>
			</div>
			<div className={style['logo-box']}>
				<Link onClick={() => {
						navCtx.setCurrentPage('');
					}}
				to='/'>
					<img className={style.logo} src={hangerImage} alt='hanger' />
					<h2>FashionStore</h2>
				</Link>
			</div>

			<div className={style['icons-box']}>
				<button
					className={style['shopping-cart-btn']}
					onClick={() => {
						navCtx.setIsCart(true);
					}}>
					<FaShoppingBag className={style.icon} size={25} />
					<div className={style.counter}>
						<p>{navCtx.itemsInCart.length}</p>
					</div>
				</button>
				<button
					className={style['shopping-cart-btn']}
					onClick={() => {
						navCtx.setPopup(true);
						navCtx.setError({
							text: 'This feature is unavaliable.',
						});
					}}>
					<FaScrewdriverWrench className={style.icon} size={25} />
				</button>
			</div>
		</div>
	);
};

export default Navigation;
