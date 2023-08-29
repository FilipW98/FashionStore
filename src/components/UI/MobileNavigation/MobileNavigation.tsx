import { useState } from 'react';
import style from './MobileNavigation.module.scss';
import ExitButton from '../Buttons/ExitButton/ExitButton';
import hangerImage from '../../../assets/img/clothes-hanger.png';

interface MobileNavigationProp {
	setUnavaliableFeature: (isFeature: boolean) => void;
	setMobileNav: (isMobileNav: boolean) => void;
}

const MobileNavigation: React.FC<MobileNavigationProp> = ({ setUnavaliableFeature, setMobileNav }) => {

	const [closing, setClosing] = useState(false);

    const handleCloseNav = () => {
		setClosing(true);
		setTimeout(() => {
            setMobileNav(false); // Ukrycie nawigacji po zakończeniu animacji
        }, 500);
	}
    
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
					{' '}
					<button
						onClick={() => {
							setUnavaliableFeature(true);
						}}>
						Clothes
					</button>
					<button
						className={style.active}
						onClick={() => {
							setMobileNav(false);
						}}>
						Shoes
					</button>
					<button
						onClick={() => {
							setUnavaliableFeature(true);
						}}>
						Accessories
					</button>
				</div>
			</div>
		</div>
	);
};

export default MobileNavigation;
