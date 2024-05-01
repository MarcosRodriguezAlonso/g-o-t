export const createCardContainer = (): void => {
  const cards = document.querySelectorAll(".character-card");
  const cardsContainer = document.createElement("ul");
  const mainContainer = document.querySelector(".main-container")!;

  cardsContainer.classList.add("card-container");

  cards.forEach((card) => {
    cardsContainer.appendChild(card);
  });

  mainContainer.appendChild(cardsContainer);
};
