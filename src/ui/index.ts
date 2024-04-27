import { getMainContainer } from "./main-container";
import { getMainHeader } from "./main-header";

export const renderGeneralLayout = (webTitle: string): void => {
  const rootElement = document.querySelector(".root");
  const mainContainer = getMainContainer();
  const mainHeader = getMainHeader(webTitle);

  if (!mainContainer) {
    throw new Error("patata");
  }

  if (rootElement) {
    mainContainer.appendChild(mainHeader);
    rootElement.appendChild(mainContainer);
  } else {
    throw new Error("Something went wrong");
  }
};
