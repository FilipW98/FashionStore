import style from './Navigation.module.scss';
import { useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import hangerImage from '../../../assets/img/white-hanger.png';

import { FaShoppingBag } from 'react-icons/fa';
import { FaScrewdriverWrench, FaBars } from 'react-icons/fa6';

import { Link } from 'react-router-dom';

const Navigation = () => {
	const navCtx = useContext(AuthContext);
	if (!navCtx) {
		return null;
	}


	return (
		<div className={style['navbar-container']}>
			<div className={style.wave}>
				<svg
					preserveAspectRatio='none'
					viewBox='0 0 1240 30'>
					<g mask='url("#SvgjsMask1227")' fill='none'>
						<path
							d='M 0,28 C 20.8,24 62.4,8.2 104,8 C 145.6,7.8 166.4,27.8 208,27 C 249.6,26.2 270.4,4 312,4 C 353.6,4 374.4,26 416,27 C 457.6,28 478.4,8.6 520,9 C 561.6,9.4 582.4,29 624,29 C 665.6,29 686.4,11.4 728,9 C 769.6,6.6 790.4,17.4 832,17 C 873.6,16.6 894.4,7.2 936,7 C 977.6,6.8 998.4,15.2 1040,16 C 1081.6,16.8 1104,8.8 1144,11 C 1184,13.2 1220.8,23.8 1240,27L1240 30L0 30z'
							fill='#1c1c1ce2'></path>
					</g>
				</svg>
			</div>

			<FaBars
				onClick={() => {
					navCtx.setMobileNav(true);
				}}
				className={style.burgerBtn}
				size={35}
			/>
			<div className={style['navbar-categories']}>
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
				<Link
					onClick={() => {
						navCtx.setCurrentPage('FashionStore');
					}}
					to='/FashionStore'>
					<img className={style.logo} src={hangerImage} alt='hanger' />
					<h1 className={style.title}>FashionStore</h1>
				</Link>
			</div>

			<div className={style['icons-box']}>
				<button
					className={style['shopping-cart-btn']}
					onClick={() => {
						navCtx.setIsCart(true);
					}}>
					<FaShoppingBag className={style.icon} size={26} />
					<div   className={ `${navCtx.isAnimation ? style['resize-couner'] : ''} ${style.counter} `}>
						<p>{navCtx.itemsInCart.length}</p>
					</div>
				</button>
				<button
					className={style['shopping-cart-btn']}
					onClick={() => {
						navCtx.setPopup(true);
						navCtx.setMessage({
							text: 'This feature is unavaliable.',
						});
					}}>
					<FaScrewdriverWrench className={style.icon} size={26} />
				</button>
			</div>
		</div>
	);
};

export default Navigation;
