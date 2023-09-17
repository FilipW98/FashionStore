import { useState } from 'react';
import style from './MobileNavigation.module.scss';

import ExitButton from '../Buttons/ExitButton/ExitButton';
import hangerImage from '../../../assets/img/black-hanger.png';

import { MobileNavigationProp } from '../../../types/types';

const MobileNavigation: React.FC<MobileNavigationProp> = ({
	setMobileNav,
	setIsShoes,
	isShoes,
	setIsClothes,
	isClothes,
	setIsAccessories,
	isAccessories,
}) => {
	const [closing, setClosing] = useState(false);

	const handleCloseNav = () => {
		setClosing(true);
		setTimeout(() => {
			setMobileNav(false);
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
				<div className={style['logo-box']}>
					<img className={style.logo} src={hangerImage} alt='hanger' />
					<h2>FashionStore</h2>
				</div>

				<div className={style['btn-box']}>
					<button
						className={` ${isClothes ? style.active : ''}`}
						onClick={() => {
							handleCloseNav();
							setIsClothes(true);
							setIsShoes(false);
							setIsAccessories(false);
						}}>
						Clothes
					</button>
					<button
						className={` ${isShoes ? style.active : ''}`}
						onClick={() => {
							handleCloseNav();
							setIsShoes(true);
							setIsClothes(false);
							setIsAccessories(false);
						}}>
						Shoes
					</button>
					<button
						className={` ${isAccessories ? style.active : ''}`}
						onClick={() => {
							handleCloseNav();
							setIsAccessories(true);
							setIsShoes(false);
							setIsClothes(false);
						}}>
						Accessories
					</button>
				</div>
			</div>
		</div>
	);
};

export default MobileNavigation;
