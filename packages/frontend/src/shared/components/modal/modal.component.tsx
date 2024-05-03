import ReactDOM from 'react-dom';
import React, { useCallback, useEffect } from 'react';
import { IModalProps } from './modal.types';

const rootModal = document.querySelector('#modal');

const Modal: React.FunctionComponent<IModalProps> = ({
	children,
	closeModal,
}) => {
	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeModal();
			}
		},
		[closeModal],
	);

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
		document.body.style.overflow = 'hidden';

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = 'visible';
		};
	}, [closeModal, handleKeyDown]);

	const handleBackDrop = ({
		currentTarget,
		target,
	}: React.MouseEvent<HTMLDivElement>): void => {
		if (currentTarget === target) {
			closeModal();
		}
	};

	let content = null;

	if (rootModal) {
		content = ReactDOM.createPortal(
			<div onClick={handleBackDrop}>
				<div>
					<button
						type="button"
						title="Modal Button"
						onClick={closeModal}
					>
						Close
					</button>
					{children}
				</div>
			</div>,
			rootModal,
		);
	}

	return content;
};

export default Modal;
