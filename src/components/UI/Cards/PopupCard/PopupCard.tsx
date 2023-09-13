import style from '../PopupCard/PopupCard.module.scss';

import { PopupCardProps } from '../../../../types/types';

const PopupCard: React.FC<PopupCardProps> = ({ children, className }) => {
	const classes = `${style['popup-card']} ${className}`;

	return <div className={classes}>{children}</div>;
};

export default PopupCard;
