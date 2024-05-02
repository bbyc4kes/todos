import { useState } from 'react';

interface UseModal {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
}

export const useModal = (
	initialState: { isOpen: boolean } = { isOpen: false },
): UseModal => {
	const [isOpen, setIsOpen] = useState<boolean>(initialState.isOpen);

	const openModal = (): void => {
		setIsOpen(true);
	};

	const closeModal = (): void => {
		setIsOpen(false);
	};

	return { isOpen, openModal, closeModal };
};
