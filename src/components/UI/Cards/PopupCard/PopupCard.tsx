import style from '../PopupCard/PopupCard.module.scss';

import { CardProps } from '../../../../types/types';

const Card: React.FC<CardProps> = ({ children, className }) => {
	const classes = `${style['popup-card']} ${className}`;

	return <div className={classes}>{children}</div>;
};

export default Card;
