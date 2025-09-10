class BrightSPHeader extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    const wrap = document.createElement('div');
    const btn  = document.createElement('button');

    // minimal, header-friendly styling
    const style = document.createElement('style');
    style.textContent = `
      :host { display: inline-flex; align-items: center; height: 100%; }
      button {
        border: none; cursor: pointer; padding: 8px 12px;
        border-radius: 8px; font: 600 12px/1.2 system-ui, sans-serif;
      }
    `;

    btn.textContent = this.getAttribute('label') || 'Open Google';
    btn.addEventListener('click', () => {
      // important: open in a new tab
      window.open('https://www.google.com', '_blank', 'noopener');
    });

    wrap.appendChild(btn);
    root.append(style, wrap);
  }
}

// must include a dash in the custom element name
customElements.define('brightsp-header', BrightSPHeader);
