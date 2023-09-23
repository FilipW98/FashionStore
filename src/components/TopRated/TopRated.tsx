import React from 'react';
import style from './TopRated.module.scss';
import Item from '../UI/Item/Item';
import Underline from '../UI/Underline/Underline';

const TopRated = () => {
	const items = [
		{
			id: 15,
			name: 'Casio Watch',
			price: 220,
			image: require('../../assets/img/Accessories/watch.png'),
			count: 1,
		},
		{
			id: 13,
			name: 'H&M Scarf',
			price: 30,
			image: require('../../assets/img/Accessories/scarf.png'),
			count: 1,
		},
		{
			id: 6,
			name: 'New York Yankees Cap',
			price: 75,
			image: require('../../assets/img/ClothesImg/black-cap.png'),
			count: 1,
		},
		{
			id: 3,
			name: 'Rainbow Shorts',
			price: 99,
			image: require('../../assets/img/ClothesImg/shorts.png'),
			count: 1,
		},
		{
			id: 9,
			name: 'Puma Vikky V3',
			price: 110,
			image: require('../../assets/img/ShoesImg/puma.png'),
			count: 1,
		},
		{
			id: 4,
			name: 'Graphite Bugatti Coat',
			price: 599,
			image: require('../../assets/img/ClothesImg/coat.png'),
			count: 1,
		},
	];
	return (
		<div className={style['top-rated-container']}>
			<div className={style['title-box']}>
				<h2 className={style.title}>Top Rated:</h2>
				<Underline />
			</div>
			
				<div className={style['top-items-box']}>
					{items.map(item => {
						return <Item key={item.id} item={item}></Item>;
					})}
				</div>
			
		</div>
	);
};

export default TopRated;
