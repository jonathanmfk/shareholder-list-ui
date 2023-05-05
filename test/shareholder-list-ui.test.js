import {
  html,
  fixture,
  assert,
  fixtureCleanup
} from '@open-wc/testing';
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

    test('a11y', async () => {
      await assert.isAccessible(el);
    });

    test('semantic shadow DOM diff', async () => {
      await assert.shadowDom.equalSnapshot(el, { ignoreAttributes: ['id'] });
    });

    test('semantic light DOM diff', async () => {
      await assert.lightDom.equalSnapshot(el, { ignoreAttributes: ['id'] });
    });
  });
});
