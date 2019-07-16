import { configure } from '@storybook/react';

function loadStories() {
	require('../stories/Button.js');
	require('../stories/Topbar.js');
	require('../stories/Modal.js');
}

configure(loadStories, module);
