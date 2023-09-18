import React from 'react'
import hangerImage from "../../../assets/img/white-hanger.png";
import style from './Footer.module.scss';
import {FaFacebook,FaSquareTwitter,FaSquareInstagram} from "react-icons/fa6";
const Footer = () => {
  return (
    <div className={style.footer}>
<img className={style.logo} src={hangerImage} alt='hanger' />
        <div className={style['footer-links']}>
        <ul className={`${style.list} ${style.text}`}>
            <li>ABOUT US</li>
            <li>FAQ</li>
            <li>NEWS</li>
            <li>CONTACT US</li>
            <li>REGULATIONS</li>
        </ul>
        </div>

        <div className={style['social-box']}>
            <ul className={`${style.list} ${style.icons}`}>
                <li><FaFacebook size={20}/></li>
                <li><FaSquareTwitter size={20}/></li>
                <li><FaSquareInstagram size={20}/></li>
            </ul>
        </div>

    </div>
  )
}

export default Footer