import style from './Navigation.module.scss';

import hangerImage from '../../../assets/img/black-hanger.png';

import { FaShoppingBag } from 'react-icons/fa';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa6';

import { NavigationProps } from '../../../types/types';

const Navigation: React.FC<NavigationProps> = ({
	handleSwitchPages,
	setIsCart,
	itemsInCart,
	setMobileNav,
	setError,
	setPopup,
	currentPage
}) => {
	return (
		<div className={style.navbar__container}>
			<FaBars
				onClick={() => {
					setMobileNav(true);
				}}
				className={style.burgerBtn}
				size={35}
			/>
			<div className={style.navbar__categories}>
				<button
					className={`${currentPage === 'Clothes' ? style.active : ''} ${style['category-btn']}`}
					onClick={() => {
						handleSwitchPages('Clothes');
					}}>
					Clothes
				</button>
				<button
					className={`${currentPage === 'Shoes' ? style.active : ''} ${style['category-btn']}`}
					onClick={() => {
						handleSwitchPages('Shoes');
					}}>
					Shoes
				</button>
				<button
					className={`${currentPage === 'Accessories' ? style.active : ''} ${style['category-btn']}`}
					onClick={() => {
						handleSwitchPages('Accessories');
					}}>
					Accessories
				</button>
			</div>
			<div className={style['logo-box']}>
				<img className={style.logo} src={hangerImage} alt='hanger' />
				<h2 onClick={()=> {handleSwitchPages('main')}}>FashionStore</h2>
			</div>

			<div className={style['icons-box']}>
				<button className={style['shopping-cart-btn']} onClick={()=>{setIsCart(true)}}>
					<FaShoppingBag className={style.icon} size={25} />
					<div className={style.counter}>
						<p>{itemsInCart.length}</p>
					</div>
				</button>
				<button
					className={style['shopping-cart-btn']}
					onClick={() => {
						setPopup(true);
						setError({
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
