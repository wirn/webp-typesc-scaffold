const appContainer = document.getElementById("app");
const el = document.createElement("div");
el.innerHTML = `
  <h1>Hej Världen</h1>
  <span style="background-color: gray; color: white; padding: 1rem; border-radius:.25rem">
   En app med bara typescipt
   </span>
 `;
appContainer?.appendChild(el);
