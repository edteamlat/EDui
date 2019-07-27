import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { GlobalStyles } from '../src/index.js';

function loadStories() {
	require('../stories/Button.js');
	require('../stories/Topbar.js');
	require('../stories/Modal.js');
	require('../stories/Form.js');
	require('../stories/Table.js');
	require('../stories/Banner.js');
}


const withGlobal = (cb) => (
  <>
    <GlobalStyles />
    {cb()}
  </>
);

addDecorator(withGlobal);
configure(loadStories, module);
