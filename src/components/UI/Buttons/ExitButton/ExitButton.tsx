import style from './ExitButton.module.scss';
import { FaRegCircleXmark } from 'react-icons/fa6';

import { ButtonProps } from '../../../../types/types';

const ExitButton: React.FC<ButtonProps> = ({ onClick, className, size }) => {
	return (
		<button className={`${style['exit-button']} ${className}`} onClick={onClick}>
			<FaRegCircleXmark size={size} />
		</button>
	);
};

export default ExitButton;
