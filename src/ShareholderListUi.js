import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './shareholder-list-ui.css.js';

import '@bbva-web-components/bbva-web-divider/bbva-web-divider.js';
import '@bbva-web-components/bbva-web-list-item-clip/bbva-web-list-item-clip.js';
const TIPO_DOCUMENTO = {
  CC: 'CC',
  NIT: 'NIT'
};

/**
 * ![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)
 *
 * This component ...
 *
 * Example:
 *
 * ```html
 *   <shareholder-list-ui></shareholder-list-ui>
 * ```
 */
export class ShareholderListUi extends LitElement {
  static get properties() {
    return {
      isRender: {
        type: Boolean
      },
      shareholders: {
        type: Array
      }
    };
  }

  constructor() {
    super();
    this.isRender = true;
    this.shareholders = [ ];
  }

  static get styles() {
    return [ styles, getComponentSharedStyles('shareholder-list-ui-shared-styles') ];
  }

  nextToPage(row) {
    this._fireEvent('go-to-next', { row });
  }

  /**
   * Fires event
   * @param {String} nameEvent
   * @param {Object} detail
   */
  _fireEvent(nameEvent, detail = {}) {
    this.dispatchEvent(new CustomEvent(nameEvent, { bubbles: true, composed: true, detail: detail }));
  }

  _listShareholdersRender() {
    return this.shareholders.map(
      (element) =>
        html`<bbva-web-list-item-clip
      clip-image="${null}"
      heading="${element.Nombre}"
      status="Participación: ${element.Porcentaje}"
      @click="${() => this.nextToPage(element)}"
      >
      <div class="mb-0-5">
      ${element.TipoDocumento == TIPO_DOCUMENTO.CC ? 'C.C: ' + element.Documento : 'NIT: ' + element.NIT}
      </div>
      ${element.TipoDocumento == TIPO_DOCUMENTO.NIT ? element.CantidadAccionitas + ' accionistas' : ''}

      </bbva-web-list-item-clip>
      <bbva-web-divider></bbva-web-divider>
      `
    );
  }

  render() {
    return html`${this.isRender ? this._listShareholdersRender() : html``}`;
  }
}
