export const getCardContainer = (): void => {
  const cards = document.querySelectorAll(".character-card");
  const cardsContainer = document.createElement("div");

  cards.forEach((card) => {
    cardsContainer.appendChild(card);
  });

  document.body.appendChild(cardsContainer);
};
