import style from './ExitButton.module.scss';
import { FaRegCircleXmark } from 'react-icons/fa6';

import {ButtonProps} from "../../../../types/types";


const ExitButton: React.FC<ButtonProps> = ({children, onClick,className, size }) => {
	return (
		<button className={`${style['exit-button']} ${className}`} onClick={onClick}>
			{children}
			<FaRegCircleXmark size={size} />
		</button>
	);
};

export default ExitButton;
