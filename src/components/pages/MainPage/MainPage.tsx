import React, {useContext} from 'react';
import style from './MainPage.module.scss';

import clothesMain from '../../../assets/img/MainPageImg/clothes-main.jpg'
import shoesMain from '../../../assets/img/MainPageImg/shoes-main.jpg';
import accessoriesMain from '../../../assets/img/MainPageImg/accessories-main.jpg';

import { Link } from 'react-router-dom';
import AuthContext from '../../../store/auth-context';
import TopRated from '../../TopRated/TopRated';


const MainPage = () => {

	const mainPageCtx = useContext(AuthContext);
	if(!mainPageCtx){
		return null;
	}

	return (
		<div className={style.container}>
			<div className={style['img-box']}>
				<Link to='/Clothes' className={style.link} onClick={() => {mainPageCtx.setCurrentPage('Clothes')}}>
					<div className={`${style['img-text']} ${style.clothes}`}>
						<div className={style['img-shadow']}>
							<p>Clothes</p>
						</div>
						<img src={clothesMain} alt='Clothes' className={style['category-img']} />
					</div>
				</Link>

				<Link to='/Shoes' className={style.link} onClick={() => {mainPageCtx.setCurrentPage('Shoes')}}>
					<div className={style['img-text']}>
						<div className={`${style['img-shadow']} ${style['img-shoes']}`}>
							<p>Shoes</p>
						</div>
						<img src={shoesMain} alt='Shoes' className={style['category-img']} />
					</div>
				</Link>

				<Link to='/Accessories' className={style.link}  onClick={() => {mainPageCtx.setCurrentPage('Accessories')}}>
					<div className={style['img-text']}>
						<div className={`${style['img-shadow']} ${style['img-accessories']}`}>
							<p>Accessories</p>
						</div>
						<img src={accessoriesMain} alt='Accessories' className={style['category-img']} />
					</div>
				</Link>
			</div>
			<TopRated/>
		</div>
	);
};

export default MainPage;
