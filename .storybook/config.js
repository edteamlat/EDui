import { configure } from '@storybook/react';
import "./styles.scss";
// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
