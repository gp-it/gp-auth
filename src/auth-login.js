import { LitElement, html, css } from 'lit-element';

class AuthLogin extends LitElement {
  static get styles() {
    return css`
      :host {
        display: grid;
        align-content: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.5);
        width: 100vw;
        height: 100vh;
      }

      form {
        box-sizing: border-box;
        min-width: 320px;
        max-width: 500px;
        background: white;
        box-shadow: var(--box-shadow, 0 1px 2px rgba(0, 0, 0, 0.5));
        margin: auto;
        padding: 16px;
        border-radius: 4px;
      }

      input {
        padding: 8px;
        margin: 4px 0;
        width: 100%;
        box-sizing: border-box;
      }
    `;
  }

  render() {
    return html`
      <style>
        h2 {
          text-align: center;
          margin: 0;
          padding: 16px;
        }

        .action {
          text-align: right;
          padding: 4px 0;
        }
      </style>

      <form @submit="${this._login}" autocomplete="on">
        <h2>Connexion</h2>
        <input
          placeholder="email"
          aria-label="email"
          type="email"
          value="${this.login}"
          @change="${e => (this.login = e.target.value)}"
          required
        />
        <input
          placeholder="mot de passe"
          aria-label="mot de passe"
          type="password"
          value="${this.password}"
          @change="${e => (this.password = e.target.value)}"
          error-message="6 caractères minimum"
          pattern=".{6,}"
          required
        />
        <div class="action">
          <button>Me connecter</button>
        </div>
      </form>
    `;
  }

  static get properties() {
    return {
      login: { type: String },
      password: { type: String },
    };
  }

  constructor() {
    super();
    this.login = '';
    this.password = '';
  }

  _login(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('login', { composed: true, bubbles: true }));
  }
}
customElements.define('auth-login', AuthLogin);
