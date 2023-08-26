import { FaRegCircleXmark } from 'react-icons/fa6';
import style from './ExitButton.module.scss';


interface ButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	className: string;
	size: number;
}

const ExitButton: React.FC<ButtonProps> = ({children, onClick,className, size }) => {
	return (
		<button className={`${style.button} ${className}`} onClick={onClick}>
			{children}
			<FaRegCircleXmark size={size} />
		</button>
	);
};

export default ExitButton;
