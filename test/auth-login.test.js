import { html, fixture, expect } from '@open-wc/testing';
import '../src/auth-login';

describe('auth-login', () => {
  it('defaut login et mot de pass', async () => {
    const el = await fixture(
      html`
        <auth-login></auth-login>
      `,
    );
    expect(el.login).to.equal('');
    expect(el.password).to.equal('');
  });

  it('good login and password', async () => {
    const el = await fixture(
      html`
        <auth-login login="test@test.com" password="123456"></auth-login>
      `,
    );
    // const login = false
    // el.shadowRoot.querySelector('button').click()
    // el.onLogin = () => console.log('onLogin')
    // expect(login).toBe(true)
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(
      html`
        <gp-auth></gp-auth>
      `,
    );
    await expect(el).shadowDom.to.be.accessible();
  });
});
