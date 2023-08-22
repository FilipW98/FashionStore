import { FaRegCircleXmark } from 'react-icons/fa6';
import style from './ExitButton.module.scss';

interface ButtonProps {
	children: React.ReactNode;
	onClick: () => void;
}

const ExitButton: React.FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<button className={style.button} onClick={onClick}>
			{children}
			<FaRegCircleXmark size={29} />
		</button>
	);
};

export default ExitButton;
