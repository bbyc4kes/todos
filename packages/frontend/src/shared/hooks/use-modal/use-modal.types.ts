export interface IModalState {
	isOpen: boolean;
}

export interface IUseModal {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
}
