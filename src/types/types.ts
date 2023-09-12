export interface Items {
	id: number;
	name: string;
	price: number;
	image: string;
	count: number;
}

export interface ErrorInfo {
	text: string;
}

export interface ShoppingCartProps {
	setIsCart: (newIsCartValue: boolean) => void;
	itemsInCart: Items[];
	totalPrice: number;
	setItems: (newItems: Items[]) => void;
	setTotalPrice: (newTotalPrice: number) => void;
}

export interface PopupProps {
	setPopup: (newIsCartValue: boolean) => void;
	newText: ErrorInfo | undefined;
}

export interface ButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	className: string;
	size: number;
}

export interface CardProps{
    children: React.ReactNode;
    className: string;
}

export interface MobileNavigationProp {
	setMobileNav: (isMobileNav: boolean) => void;
	setError: (errorText: ErrorInfo) => void;
	setPopup: (isPopup: boolean) => void;
}

export interface NavigationProps {
	cartHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
	itemsInCart: Items[];
	setMobileNav: (isMobileNav: boolean) => void;
	setError: (errorText: ErrorInfo) => void;
	setPopup: (isPopup: boolean) => void;
}