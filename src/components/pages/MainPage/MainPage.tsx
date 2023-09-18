import React from 'react';
import style from './MainPage.module.scss';

import clothesMain from '../../../assets/img/MainPageImg/clothes-main.jpg';
import shoesMain from '../../../assets/img/MainPageImg/shoes-main.jpg';
import accessoriesMain from '../../../assets/img/MainPageImg/accessories-main.jpg';

import { Link } from 'react-router-dom';

const MainPage = () => {
	return (
		<div className={style.container}>
			<div className={style['img-box']}>
				<Link to='/Clothes' className={style.link}>
					<div className={`${style['img-text']} ${style.clothes}`}>
						<div className={style['img-shadow']}>
							<p>Clothes</p>
						</div>

						<img src={clothesMain} alt='Clothes' className={style['category-img']} />
					</div>
				</Link>

				<Link to='/Shoes' className={style.link}>
					<div className={style['img-text']}>
						<div className={style['img-shadow']}>
							<p>Shoes</p>
						</div>
						<img src={shoesMain} alt='Shoes' className={style['category-img']} />
					</div>
				</Link>

				<Link to='/Accessories' className={style.link}>
					<div className={style['img-text']}>
						<div className={style['img-shadow']}>
							<p>Accessories</p>
						</div>
						<img src={accessoriesMain} alt='Accessories' className={style['category-img']} />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default MainPage;
