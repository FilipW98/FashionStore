import React, {useState,ReactNode, useEffect} from 'react';
import { Items,AuthContextProps,MessageInfo } from '../types/types';

const AuthContext = React.createContext<AuthContextProps | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [isCart, setIsCart] = useState(false);
	const [itemsInCart, setItems] = useState<Items[]>([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [popup, setPopup] = useState(false);
	const [isMobileNav, setMobileNav] = useState(false);
	const [message, setMessage] = useState<MessageInfo>();
	const [isAnimation, setIsAnimation] = useState(false);


    const [currentPage, setCurrentPage] = useState('');
 
	const addItemsToCart = (item: Items) => {
		const itemExists = itemsInCart.some(cartItem => cartItem.id === item.id);

		if (itemExists) {
			setPopup(true);
			setMessage({
				text: 'This item is already in the cart!',
			});
			return;
		}
		const newItem = {
			...item,
			count: 1,
		};
		setTotalPrice(totalPrice + item.price);
		setItems([...itemsInCart, newItem]);
	};

    useEffect(() => {
         if (isMobileNav) {
          document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
            document.body.style.overflowX = 'hidden';
        }
        if (popup){
          document.body.style.overflow = 'hidden';
        }
        if(isCart){
          document.body.style.overflow = 'hidden';
        }
      }, [isMobileNav,popup,isCart]);


    return (
        <AuthContext.Provider value={{
            currentPage,
            setCurrentPage,
            onAddItems: addItemsToCart,
            isCart,
            setIsCart,
            itemsInCart,
            setItems,
            totalPrice,
            setTotalPrice,
            popup,
            setPopup,
            isMobileNav,
            setMobileNav,
            message,
            setMessage,
            isAnimation,
            setIsAnimation
          }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
