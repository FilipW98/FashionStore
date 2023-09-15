import React from 'react';
import { Items } from '../types/types';

const AuthContext = React.createContext<{ onAddItems: (item: Items) => void }>({
	onAddItems: () => {},
});

export default AuthContext;
