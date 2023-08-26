import style from './Navigation.module.scss';
import hangerImage from '../../../assets/img/clothes-hanger.png';
import { FaShoppingBag } from 'react-icons/fa';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import {FaBars} from 'react-icons/fa6';
import { Items } from '../../../App';

interface NavigationProps {
	cartHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
	itemsInCart: Items[];
	setUnavaliableFeature: (isFeature: boolean) => void;
	setMobileNav: (isMobileNav: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ cartHandler, itemsInCart,setUnavaliableFeature,setMobileNav }) => {


	return (
		<div className={style.navbar__container}>
			<FaBars onClick={() => {setMobileNav(true)}} className={style.burgerBtn} size={35}/>
			<div className={style.navbar__categories}>
				<button onClick={() => {setUnavaliableFeature(true)}}>Clothes</button>
				<button className={style.active}>Shoes</button>
				<button onClick={() => {setUnavaliableFeature(true)}}>Accessories</button>
			</div>
			<div className={style.navbar}>
				<div className={style['logo-box']}>
					<img className={style.logo} src={hangerImage} alt='hanger' />
					<h2>FashionStore</h2>
				</div>

				<div className={style['icons-box']}>
					<button className={style['shopping-cart-btn']} onClick={cartHandler}>
						<FaShoppingBag className={style.icon} size={25} />
						<div className={style.counter}>
							<p>{itemsInCart.length}</p>
						</div>
					</button>
					<button className={style['shopping-cart-btn']} onClick={() => {setUnavaliableFeature(true)}}>
						<FaScrewdriverWrench className={style.icon} size={25}  />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
