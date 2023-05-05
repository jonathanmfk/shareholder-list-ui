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
        Nombre: 'Catalina Orjuela',
        TipoDocumento: 'CC',
        Documento: 10282537,
        Porcentaje: '25%'
      },
      {
        NIT: '80808080',
        Nombre: 'Manofacturas S.A.S',
        TipoDocumento: 'NIT',
        Documento: 10282353,
        CantidadAccionitas: 5,
        Porcentaje: '8%'
      },
      {
        NIT: '80808080',
        Nombre: 'Daniel Rojas',
        TipoDocumento: 'CC',
        Documento: 10282356,
        Porcentaje: '22%'
      },
      {
        NIT: '80808080',
        Nombre: 'Arturo Henao',
        TipoDocumento: 'CC',
        Documento: 10282340,
        Porcentaje: '11%'
      },

      {
        NIT: '90909090',
        Nombre: 'Augusto Garcia',
        TipoDocumento: 'CC',
        Documento: 10282910,
        Porcentaje: '20%'
      },
      {
        NIT: '90909090',
        Nombre: 'Catalina Rodriguez',
        TipoDocumento: 'CC',
        Documento: 10282511,
        Porcentaje: '10%'
      },
      {
        NIT: '90909090',
        Nombre: 'Pinturas S.A.S',
        TipoDocumento: 'NIT',
        Documento: 10282312,
        CantidadAccionitas: 5,
        Porcentaje: '15%'
      },
      {
        NIT: '90909090',
        Nombre: 'Daniel Rojas',
        TipoDocumento: 'CC',
        Documento: 10282313,
        Porcentaje: '9%'
      },
      {
        NIT: '90909090',
        Nombre: 'Ana sofia Enao',
        TipoDocumento: 'CC',
        Documento: 10282314,
        Porcentaje: '40%'
      }
    ];
  }

  static get styles() {
    return [ styles, getComponentSharedStyles('shareholder-list-ui-shared-styles') ];
  }

  _listShareholdersRender() {
    return this.shareholders.map(
      (element) =>
        html`<bbva-web-list-item-clip
      clip-image="${null}"
      heading="${element.Nombre}"
      status="Participación: ${element.Porcentaje}"
      @click="${() => this.nextToPage(element.NIT)}"
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
    return html`
    <div class="row">
      <h2>Accionistas</h2>
      <div class="ml-0-5">
        <h4 class="opacity-grey">(2 of 5)</h4>
      </div>
    </div>
    <h4>Esta es la información sobre los accionistas de tu empresa</h4>
    ${this.isRender ? this._listShareholdersRender() : html``}`;
  }
}
