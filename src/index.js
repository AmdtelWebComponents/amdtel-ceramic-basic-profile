import { html, css, LitElement } from 'lit';

export class AmdtelCeramicBasicProfile extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--amdtel-ceramic-basic-profile-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      data: { type: Object },
      title: { type: String }
    };
  }

  constructor() {
    super();
    this.title = 'Ceramic Profile';
  }

  render() {
    return html`
      <h2>${this.title}</h2>
    `;
  }
}

window.customElements.define('amdtel-ceramic-basic-profile', AmdtelCeramicBasicProfile);