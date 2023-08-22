import style from './Navigation.module.scss';
import hangerImage from '../../../assets/img/clothes-hanger.png';
import { FaShoppingBag } from 'react-icons/fa';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import { Items } from '../../../App';

interface NavigationProps {
	cartHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
	itemsInCart: Items[];
}

const Navigation: React.FC<NavigationProps> = ({ cartHandler, itemsInCart }) => {
	return (
		<div className={style.navbar__container}>
			<div className={style.navbar__categories}>
				<button>Clothes</button>
				<button className={style.active}>Shoes</button>
				<button>Accessories</button>
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
					<button className={style['shopping-cart-btn']}>
						<FaScrewdriverWrench className={style.icon} size={25} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
