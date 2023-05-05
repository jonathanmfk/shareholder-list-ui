import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../shareholder-list-ui.js';

suite('ShareholderListUi', () => {
  let el;

  teardown(() => fixtureCleanup());

  suite('default', () => {
    setup(async () => {
      el = await fixture(html`
        <shareholder-list-ui></shareholder-list-ui>
      `);
      await el.updateComplete;
    });

    test('_fireEvent', () => el._fireEvent('eventName'));

    test('render true', () => {
      el.shareholders = [
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
          Nombre: 'Pinturas S.A.S',
          TipoDocumento: 'CC',
          Documento: 10282312,
          CantidadAccionitas: 5,
          Porcentaje: '15%'
        }
      ];

      el.isRender = true;
    });
    test('nextToPage', () => el.nextToPage('90909090', 'CC'));
  });
});
