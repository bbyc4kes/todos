import { useState } from 'react';
import { IModalState, IUseModal } from './use-modal.types';

export const useModal = (
	initialState: IModalState = { isOpen: false },
): IUseModal => {
	const [isOpen, setIsOpen] = useState<boolean>(initialState.isOpen);

	const openModal = (): void => {
		setIsOpen(true);
	};

	const closeModal = (): void => {
		setIsOpen(false);
	};

	return { isOpen, closeModal, openModal };
};
