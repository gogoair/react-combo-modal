# react-combo-modal

Simple modal using props to open and close it with single callback. Should be used as a wrapping element, the way it works is creating div with elements directly in the body of page and will center modal using only css, other than that will disable scroll on body while opened. Younger brother of https://www.npmjs.com/package/react-combo-select

## Usability
This plugin require for you to have react after that import react combo modal
```javascript
import Modal from 'react-combo-modal';
```
and include css files with styles and font awesome (you may include this in different way)
```javascript
require('../node_modules/react-combo-modal/style.css');
```

## props/options

### open and onCloseCallback
There are two mandatory props: first one is "open" which is a boolean and will control visibility of modal. Second one is "onCloseCallback", a callback function that returns an object with (for now only) open property. onCloseCallback() will be called by default when user presses Escape key. To disable this, pass ignoreEsc prop to the component. Additionally, modal can be told to call onCloseCallback() on click outside the modal by passing closeOnClickOutside prop.

```javascript
import React, {Component} from 'react';
import Modal from 'react-combo-modal';
// You sould not forget to include css

export default class FakeComponent extends Component {

	constructor(props) {
		super(props);

		this.onCloseCallback = this.onCloseCallback.bind(this);

		this.state = {
			open: false
		}
	}

	onCloseCallback(closeCallbackData) {
		this.setState({open: closeCallbackData.open})
	}

	render() {

		return (
			<div>
				<a href="#" onClick={(e) => {e.preventDefault(); this.setState({open: true})}}>Open</a>
				<Modal
					open={this.state.open}
					onCloseCallback={this.onCloseCallback}
				>
					Hello I am modal! :D
				</Modal>
			</div>
		);
	}
}
```

### style and customClassNames
Some modal require additional styling options and there are two ways of doing that: if you want to add styles inline directly to the modal styles you would use props "style". Other way is to replace existing class names with custom ones in that case you should use props "customClassName". Either way, you are sending object with 3 properties: background, holder and modal each representing one element that is used in react-combo-modal.  

```javascript

	render() {

		const style = {
			background: {},
			holder: {},
			modal: {
				background: 'none'
			}
		};

		const customClassNames = {
			background: '',
			holder: '',
			modal: 'asd'
		};

		return (
			<div>
				<a href="#" onClick={(e) => {e.preventDefault(); this.setState({open: true})}}>Open</a>
				<Modal
					customClassNames={customClassNames}
					style={style}
					open={this.state.open}
					onCloseCallback={this.onCloseCallback}
				>
					Hello I am modal! :D
				</Modal>
			</div>
		);
	}
```

### all props

| Property         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| **open** | boolean | false | Whether the modal is open. |
| **onCloseCallback** | function | required | Function to call when an action that should close the modal is performed by the user. |
| **closeOnClickOutside** | boolean | false | Close the modal (call onCloseCallback) when user clicks outside the modal |
| **ignoreEsc** | boolean | false | Do not close the modal (call onCloseCallback) when user presses Escape key |
| **style** | object of objects | undefined | Custom styles to apply to various parts of the modal by passing them as their style prop. Valid keys are background, holder and modal. |
| **customClassNames** | object of strings | background: 'ReactComboModalBackground'<br>holder: 'ReactComboModalHolder'<br>modal: 'ReactComboModal' | Custom class names to replace the default ones for each part of the modal. Valid keys are background, holder and modal. |
