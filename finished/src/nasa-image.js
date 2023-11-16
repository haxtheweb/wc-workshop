import { LitElement, html, css } from "lit";

export class NasaImage extends LitElement {

  constructor() {
    super();
    this.source = '';
    this.title = '';
  }

  static get properties() {
    return {
        source: { type: String },
        title: { type: String },
    };
  }

  static get styles() {
    return [css`
    :host {
        display: block;
    }
      .image {
        display: inline-block;
      }
      .image img {
        width: 200px;
        height: 200px;
        border: 10px solid orange;
        display: block;
      }
    `];
  }

  render() {
    return html`
        <div class="image">
          <img src="${this.source}" />
          <div class="title">${this.title}</div>
        </div>
    `;
  }
  static get tag() {
    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);