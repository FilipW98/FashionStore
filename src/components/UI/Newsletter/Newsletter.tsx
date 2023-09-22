import React, { useContext, useState, ChangeEventHandler } from 'react';
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

	const inputHandler: ChangeEventHandler<HTMLInputElement> = e => {
		setInputValue(e.target.value);
	};

	return (
	
			<div className={style['newsletter-box']}>
				<h2 className={style.title}>NEWSLETTER</h2>
				<p className={style.text}>
					Get exclusive discounts and offers delivered straight to your inbox. Stay ahead of the trends with early
					access to our latest products and collections.
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
				<div className={` ${style['wave']} `}>
					
					<svg
						preserveAspectRatio='none'
						viewBox='0 0 1040 230'>
						<g mask='url("#SvgjsMask1030")' fill='none'>
							<path
								d='M 0,25 C 41.4,43.2 124.2,100 207,116 C 289.8,132 331.2,91.4 414,105 C 496.8,118.6 538.2,188.8 621,184 C 703.8,179.2 745.2,91 828,81 C 910.8,71 952.6,146 1035,134 C 1117.4,122 1199,43.6 1240,21L1240 230L0 230z'
								fill='rgba(37, 35, 32, 1)'></path>
						</g>
					
					</svg>
				</div>
			</div>
		
	);
};

export default Newsletter;
