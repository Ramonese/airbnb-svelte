
import { configure, addParameters, addDecorator } from '@storybook/svelte';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};
//This has to be before configure
addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports,
    },
  },
  a11y: {
      element: '#root', // optional selector which element to inspect
      config: {

      }, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
      options: {

      } 
    }, 

});


configure(require.context('../stories', true, /\.stories\.js$/), module);

addDecorator(withA11y);
