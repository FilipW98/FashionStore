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

export interface PopupCardProps{
    children: React.ReactNode;
    className: string;
}

export interface CategoryProps{
    children: React.ReactNode;
    className: string;
	categoryName: string;
}

export interface MobileNavigationProp {
	setMobileNav: (isMobileNav: boolean) => void;
	setError: (errorText: ErrorInfo) => void;
	setPopup: (isPopup: boolean) => void;
	setIsShoes: (isShoes: boolean) => void;
	isShoes:boolean;
	setIsClothes: (isClothes:boolean) => void;
	isClothes:boolean;
}

export interface NavigationProps {
	cartHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
	itemsInCart: Items[];
	setMobileNav: (isMobileNav: boolean) => void;
	setError: (errorText: ErrorInfo) => void;
	setPopup: (isPopup: boolean) => void;
	setIsShoes: (isShoes:boolean) => void;
	isShoes:boolean;
	setIsClothes: (isClothes:boolean) => void;
	isClothes:boolean;
}

export interface ShoesProps {
	addItemsToCart: (item: Items) => void;
} 

export interface ItemProps {
	item:{
	  id: number;
	  name: string;
	  price: number;
	  image: string;
	  count: number;
	}
	onAddToCart: (item:Items) => void;
  }