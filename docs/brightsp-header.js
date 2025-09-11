class BrightSPHeader extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    const wrap = document.createElement('div');
    const btn  = document.createElement('button');

    const style = document.createElement('style');
    style.textContent = `
      :host { display: inline-flex; align-items: center; height: 100%; }
      button {
        cursor: pointer; padding: 8px 12px;
        border-radius: 8px; font: 600 12px/1.2 system-ui, sans-serif;
      }
    `;

    btn.textContent = this.getAttribute('label') || 'Open Google';

    // Apply styles from properties if passed in Desktop Layout
    const props = JSON.parse(this.getAttribute('properties') || '{}');
    if (props.style) {
      Object.assign(btn.style, props.style);
    }

    btn.addEventListener('click', () => {
	// important: open in a new tab								 
      window.open('https://cdw.sharepoint.com/sites/ITS-ProjectDocumentation/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FITS%2DProjectDocumentation%2FShared%20Documents%2FB%2FBrokerLink%2F2024%2E07%2DWebex%20Calling%20%2B%202024%2E07%2DWebex%20CC%20Migration%2FPublic%20Share&viewid=cd4466b8%2Dd7f7%2D4add%2Db20a%2D97fa30ce98e9&csf=1&amp%3Bweb=1&amp%3Be=XT1I2B%2F&FolderCTID=0x01200043F80EA5B50A99478A5F7A07E546CAEB', '_blank', 'noopener');
    });

    wrap.appendChild(btn);
    root.append(style, wrap);
  }
}

	// must include a dash in the custom element name											 
customElements.define('brightsp-header', BrightSPHeader);
