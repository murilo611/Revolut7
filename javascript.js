document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".list .item"); // Todos os itens
  const indicators = document.querySelectorAll(".indicators ul li"); // Pontos indicadores
  const numberDisplay = document.querySelector(".indicators .number"); // Número do indicador
  const prevButton = document.querySelector(".arrows button:nth-child(1)"); // Botão "anterior"
  const nextButton = document.querySelector(".arrows button:nth-child(2)"); // Botão "próximo"
  
  let currentIndex = 0; // Índice inicial

  // Função para atualizar o item ativo
  const updateActiveItem = (index) => {
    items.forEach((item, i) => {
      item.classList.toggle("active", i === index); // Adiciona/remove classe ativa
    });
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index); // Atualiza o indicador ativo
    });
    // Atualiza o número exibido
    numberDisplay.textContent = `0${index + 1}`;
  };

  // Listener para o botão "anterior"
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Volta ao último, se ultrapassar o início
    updateActiveItem(currentIndex);
  });

  // Listener para o botão "próximo"
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length; // Volta ao primeiro, se ultrapassar o final
    updateActiveItem(currentIndex);
  });

  // Inicializa o estado inicial
  updateActiveItem(currentIndex);
});
