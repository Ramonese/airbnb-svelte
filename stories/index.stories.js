import { action } from '@storybook/addon-actions';

// import Button from './button.svelte';
import { storiesOf } from '@storybook/svelte';
import Button from './button.svelte';

storiesOf('Buttons | Buttons', module)
  //Simple Button
  .add(
    'Simple',
    () => ({
      Component: Button,
      props: { text: 'Button' },
      on: {
        click: action('I am logging in the actions tab too'),
      },
    }),
  )
  // .add('Accessible', () => (
  //   <button style="{ backgroundColor: 'black', color: 'white', }">
  //     Accessible button
  //   </button>
  // ))
