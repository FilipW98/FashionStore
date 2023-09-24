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
					
					{/* <svg
						preserveAspectRatio='none'
						viewBox='0 0 1040 230'>
						<g mask='url("#SvgjsMask1030")' fill='none'>
							<path
								d='M 0,25 C 41.4,43.2 124.2,100 207,116 C 289.8,132 331.2,91.4 414,105 C 496.8,118.6 538.2,188.8 621,184 C 703.8,179.2 745.2,91 828,81 C 910.8,71 952.6,146 1035,134 C 1117.4,122 1199,43.6 1240,21L1240 230L0 230z'
								fill='rgba(37, 35, 32, 1)'></path>
						</g>
					
					</svg> */}

					<svg
					xmlns='http://www.w3.org/2000/svg'
					version='1.1'
					width='1240'
					height='30'
					preserveAspectRatio='none'
					viewBox='0 0 1240 30'>
					<g mask='url("#SvgjsMask1227")' fill='none'>
						<path
							d='M 0,28 C 20.8,24 62.4,8.2 104,8 C 145.6,7.8 166.4,27.8 208,27 C 249.6,26.2 270.4,4 312,4 C 353.6,4 374.4,26 416,27 C 457.6,28 478.4,8.6 520,9 C 561.6,9.4 582.4,29 624,29 C 665.6,29 686.4,11.4 728,9 C 769.6,6.6 790.4,17.4 832,17 C 873.6,16.6 894.4,7.2 936,7 C 977.6,6.8 998.4,15.2 1040,16 C 1081.6,16.8 1104,8.8 1144,11 C 1184,13.2 1220.8,23.8 1240,27L1240 30L0 30z'
							fill='rgba(37, 35, 32, 1)'></path>
					</g>
					<defs>
						<mask id='SvgjsMask1227'>
							<rect width='1240' height='30' fill='#ffffff'></rect>
						</mask>
					</defs>
				</svg>
				</div>
			</div>
		
	);
};

export default Newsletter;
