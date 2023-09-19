
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

export interface PopupCardProps {
	children: React.ReactNode;
	className: string;
}

export interface ItemsCardProps {
	children: React.ReactNode;
	className: string;
	categoryName: string;
}

// export interface MobileNavigationProp {
// 	setMobileNav: (isMobileNav: boolean) => void;
// }

// export interface NavigationProps {
// 	// itemsInCart: Items[];
// 	// setMobileNav: (isMobileNav: boolean) => void;
// 	// setError: (errorText: ErrorInfo) => void;
// 	setPopup: (isPopup: boolean) => void;
	
// }

export interface ItemProps {
	item: {
		id: number;
		name: string;
		price: number;
		image: string;
		count: number;
	};
}

export interface AuthContextProps {
	setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
	currentPage: string;
	onAddItems: (item: Items) => void;
	isCart: boolean;
	setIsCart: React.Dispatch<React.SetStateAction<boolean>>;
	itemsInCart: Items[];
	setItems: React.Dispatch<React.SetStateAction<Items[]>>;
	totalPrice: number;
	setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
	popup: boolean;
	setPopup: React.Dispatch<React.SetStateAction<boolean>>;
	isMobileNav: boolean;
	setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
	error: ErrorInfo | undefined;
	setError: React.Dispatch<React.SetStateAction<ErrorInfo | undefined>>;
	overflowClass: string;
}
