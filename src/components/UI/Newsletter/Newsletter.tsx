import React, { useContext, useState,ChangeEventHandler } from 'react';
import style from './Newsletter.module.scss';
import AuthContext from '../../../store/auth-context';

const Newsletter = () => {
	const [inputValue, setInputValue] = useState('');
	const newsCtx = useContext(AuthContext);

	if (!newsCtx) {
		return null;
	}

	const subscribeHandler = () => {
		if (inputValue.includes('@')) {
			newsCtx.setPopup(true);
			newsCtx.setMessage({
				text: 'You have been subscribed.',
			});
		}
	};

	const inputHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<div className={style['newsletter-box']}>
			<h2 className={style.title}>NEWSLETTER</h2>
			<p className={style.text}>
				Get exclusive discounts and offers delivered straight to your inbox. Stay ahead of the trends with early access
				to our latest products and collections.
			</p>
			<div className={style['input-btn-box']}>
				<input type='text' className={style.input} value={inputValue} onChange={inputHandler} />
				<button
					className={style.btn}
					onClick={() => {
						subscribeHandler();
					}}>
					SUBSCRIBE
				</button>
			</div>
		</div>
	);
};

export default Newsletter;
