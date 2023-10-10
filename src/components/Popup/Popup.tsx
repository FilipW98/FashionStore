import ReactDom from 'react-dom';
import style from './Popup.module.scss';
import PopupCard from '../UI/Cards/PopupCard/PopupCard';
import ExitButton from '../UI/Buttons/ExitButton/ExitButton';
import ConfirmButton from '../UI/Buttons/ConfirmButton/ConfirmButton';

import { PopupProps } from '../../types/types';

const Popup: React.FC<PopupProps> = ({ setPopup, newText }) => {
	const text = newText ? newText.text : '';
	const popupRoot = document.getElementById('popup-root');

	if (!popupRoot) {
		return null;
	}

	return ReactDom.createPortal(
		<div className={style['error-shadow']}>
			<PopupCard className={style['error-box']}>
				<ExitButton
					className={style.button}
					size={29}
					onClick={() => {
						setPopup(false);
					}}></ExitButton>
				<div>
					<p>{text}</p>
					<ConfirmButton
						onClick={() => {
							setPopup(false);
						}}>
						Okay
					</ConfirmButton>
				</div>
			</PopupCard>
		</div>,
		popupRoot
	);
};

export default Popup;
