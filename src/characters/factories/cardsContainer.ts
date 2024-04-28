export const getCardContainer = (): void => {
  const cards = document.querySelectorAll(".character-card");
  const cardsContainer = document.createElement("div");
  const mainDiv = document.querySelector(".root")!;

  cardsContainer.classList.add("card-container");

  cards.forEach((card) => {
    cardsContainer.appendChild(card);
  });

  mainDiv.appendChild(cardsContainer);
};
