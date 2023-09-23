/* @refresh reload */
import { render } from 'solid-js/web';

import { Root } from './Root.js';

import './scss/global.scss';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (<Root/>), root!);
