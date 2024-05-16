import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PortalProvider } from '@blueprintjs/core';
import './shared/styles/global-styles.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import Router from './router/router';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from 'react-auth-kit/AuthProvider';
import { store } from '~store/user/user.store.auth';
import { Client as Styletron } from 'styletron-engine-monolithic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import Layout from '~shared/layouts/layout';

const engine = new Styletron();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<PortalProvider portalClassName="my-custom-class">
		<StyletronProvider value={engine}>
			<BaseProvider theme={LightTheme}>
				<AuthProvider store={store}>
					<BrowserRouter basename="">
						<Layout>
							<Router />
						</Layout>
					</BrowserRouter>
				</AuthProvider>
			</BaseProvider>
		</StyletronProvider>
	</PortalProvider>,
);
