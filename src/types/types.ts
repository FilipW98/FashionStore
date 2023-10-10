import { ReactNode } from 'react';
export interface Items {
	id: number;
	name: string;
	price: number;
	image: string;
	count: number;
}
export interface MessageInfo {
	text: string;
}

export interface PopupProps {
	setPopup: (newIsCartValue: boolean) => void;
	newText: MessageInfo | undefined;
}

export interface ButtonProps {
	onClick: () => void;
	className: string;
	size: number;
}

export interface ConfirmButtonProps {
	children: ReactNode;
	onClick: () => void;
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
	message: MessageInfo | undefined;
	setMessage: React.Dispatch<React.SetStateAction<MessageInfo | undefined>>;
	isAnimation: boolean;
	setIsAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}
