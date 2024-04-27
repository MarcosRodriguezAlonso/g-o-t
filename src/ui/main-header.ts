export const getMainHeader = (webTitle: string) => {
  const mainHeader = document.createElement("header");
  const title = document.createElement("h1");

  title.classList.add("main-title");
  title.textContent = webTitle;

  mainHeader.appendChild(title);
};
