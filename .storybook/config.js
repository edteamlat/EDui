import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Button.js');
}

configure(loadStories, module);
