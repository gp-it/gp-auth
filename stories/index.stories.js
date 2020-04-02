// import { Story, Preview, Meta, Props, html } from '@open-wc/demoing-storybook';
import { withKnobs, withWebComponentsKnobs, html, action } from '@open-wc/demoing-storybook';

import '../src/auth-login.js';

export default {
  component: 'auth-login',
  title: 'auth-login',
  decorators: [withKnobs, withWebComponentsKnobs],
};

export const simple = () =>
  html`
    <auth-login @login="${action('login')}"></auth-login>
  `;

// <Meta
//   title="auth-login"
//   decorators={[withKnobs, withWebComponentsKnobs]}
//   parameters={{
//     component: "auth-login",
//     options: { selectedPanel: "storybookjs/knobs/panel" }
//   }}
// />

// # GpAuth

// A component for...

// ## Features:

// - a
// - b
// - ...

// ## How to use

// ### Installation

// ```bash
// npm i @gp-auth/auth-login
// ```

// ```js
// import '@gp-auth/auth-login';
// ```

// <Preview withToolbar>
//   <Story name="Simple">
//     {html`
//       <auth-login login="test@test.com"
//                   password="123456"
//                   @login="${() => action('login')}">
//       </auth-login>
//     `}
//   </Story>
// </Preview>
