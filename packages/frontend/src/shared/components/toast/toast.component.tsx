import { OverlayToaster, Position } from '@blueprintjs/core';
import { createRoot } from 'react-dom/client';

export const toaster = await OverlayToaster.createAsync(
	{ position: Position.TOP_LEFT },
	{
		// Use createRoot() instead of ReactDOM.render(). This can be deleted after
		// a future Blueprint version uses createRoot() for Toasters by default.
		domRenderer: (toaster, containerElement) =>
			createRoot(containerElement).render(toaster),
	},
);
