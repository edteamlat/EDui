import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { GlobalStyles } from '../src/index.js';

addParameters({ viewport: { defaultViewport: 'desktop' } });

function loadStories() {
	require('../stories/Button.js');
	require('../stories/Topbar.js');
	require('../stories/Modal.js');
	require('../stories/Form.js');
	require('../stories/Table.js');
	require('../stories/Banner.js');
	require('../stories/Grid.js');
	require('../stories/Tabs.js');
	require('../stories/Carousel.js');
}


const withGlobal = (cb) => (
  <>
    <GlobalStyles />
    {cb()}
  </>
);

addDecorator(withGlobal);
configure(loadStories, module);
