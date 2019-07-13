import { configure } from '@storybook/react';

function loadStories() {
	require('../stories/Button.js');
	require('../stories/Topbar.js');
}

configure(loadStories, module);
