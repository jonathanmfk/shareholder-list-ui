import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *::before, *::after {
  box-sizing: inherit;
}

.mb-0-5 {
  margin-bottom: 0.5rem;
}

.ml-0-5 {
  margin-left: 0.5rem;
}

.row {
  display: flex;
  align-items: baseline;
}

.opacity-grey {
  color: rgba(52, 52, 52, 0.5176470588);
}
`;
