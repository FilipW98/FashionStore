import React, { useContext } from 'react';
import style from './MainPage.module.scss';
import clothesMain from '../../../assets/img/MainPageImg/clothes-main.jpg';
import shoesMain from '../../../assets/img/MainPageImg/shoes-main.jpg';
import accessoriesMain from '../../../assets/img/MainPageImg/accessories-main.jpg';
import AuthContext from '../../../store/auth-context';

const MainPage = () => {
	const mainCtx = useContext(AuthContext);

	return (
		// <div className={style.container}>
		//     <div className={style['img-box']}>
		//         <a href="''"><img src={clothesMain} alt="model in jacket" className={style['category-img']} />  </a>

		//         <img src={shoesMain} alt="model in shoes" className={style['category-img']} />
		//         <img src={accessoriesMain} alt="accesories" className={style['category-img']} />
		//     </div>
		//     <div>Top realated</div>
		// </div>

		<div className={style.container}>
			<div className={style['img-box']}>
				<img
					onClick={() => {
						mainCtx?.handleSwitchPages('Clothes');
					}}
					src={clothesMain}
					alt='Clothes'
					className={style['category-img']}
				/>
				<p>Clothes</p>

				<a href='/shoes'>
					<img src={shoesMain} alt='Shoes' className={style['category-img']} />
					<p>Shoes</p>
				</a>
				<a href='/accessories'>
					<img src={accessoriesMain} alt='Accessories' className={style['category-img']} />
					<p>Accessories</p>
				</a>
			</div>
			<div>Top related</div>
		</div>
	);
};

export default MainPage;
