import React from 'react';
import style from './ItemsCard.module.scss';
import { ItemsCardProps } from '../../../../types/types';
import Underline from '../../Underline/Underline';

const ItemsCard: React.FC<ItemsCardProps> = ({ children, categoryName }) => {
	return (
		<div className={style['items-card-container']}>
			<div className={style['title-box']}>
				<h3 className={style.title}>{categoryName}</h3>
				<Underline />
			</div>
			<div className={style.items}>{children}</div>
		</div>
	);
};

export default ItemsCard;
