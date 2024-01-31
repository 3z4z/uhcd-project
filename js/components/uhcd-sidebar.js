class uhcdSidebar extends HTMLElement {
  constructor() {
    super();
    fetch('/components/sidebar.html')
      .then((response) => response.text())
      .then((htmlContent) => {
        this.innerHTML = htmlContent;
      })
      .catch((error) => {
        console.error('Error loading HTML content:', error);
      });
  }
}

customElements.define('uhcd-sidebar', uhcdSidebar);
