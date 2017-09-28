import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotContainer } from 'react-hot-loader';

import FakeComponent from './FakeComponent';

function render(Component) {
	ReactDOM.render(
		<HotContainer>
			<div>
				<Component />
			</div>
		</HotContainer>,
		document.getElementById('react')
	);
}

render(FakeComponent);

if (module.hot) {
	module.hot.accept('./FakeComponent', () => {
		render(FakeComponent);
	});
}
