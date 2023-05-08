import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './shareholder-list-ui.css.js';

import '@bbva-web-components/bbva-web-divider/bbva-web-divider.js';
import '@bbva-web-components/bbva-web-list-item-clip/bbva-web-list-item-clip.js';
import { bbvaBuilding } from '@bbva-web-components/bbva-foundations-icons/bbva-foundations-icons.js';
import '@bbva-web-components/bbva-web-clip-box/bbva-web-clip-box.js';
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
    this.shareholders = [
      {
        NIT: '80808080',
        Nombre: 'Lucia Gaviria',
        TipoDocumento: 'CC',
        Documento: 10282952,
        Porcentaje: '25%'
      },
      {
        NIT: '80808080',
        Nombre: 'Manofacturas S.A.S',
        TipoDocumento: 'NIT',
        Documento: 10282353,
        CantidadAccionitas: 5,
        Porcentaje: '8%'
      }
    ];
  }

  static get styles() {
    return [ styles, getComponentSharedStyles('shareholder-list-ui-shared-styles') ];
  }

  getInicialLetters(name) {
    const split = name.split(' ');
    let inicials = '';
    split.forEach((s) => (inicials += s.charAt(0).toUpperCase()));
    return inicials;
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
      @click="${() => this.nextToPage(element)}">

      <div slot="image">
        ${element.TipoDocumento == TIPO_DOCUMENTO.NIT
          ? html`<bbva-web-clip-box icon="${bbvaBuilding()}" label="building" variant="aqua"></bbva-web-clip-box>`
          : html`<bbva-web-clip-box initials="${this.getInicialLetters(element.Nombre)}"></bbva-web-clip-box>`}
      </div>

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
