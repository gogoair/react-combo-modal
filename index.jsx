import React from 'react';
import { render } from 'react-dom';
import FakeComponent from './FakeComponent';

render(
	<div>
		<FakeComponent />
	</div>,
	document.getElementById('react')
);