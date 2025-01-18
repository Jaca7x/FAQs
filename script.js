document.addEventListener("DOMContentLoaded", function () {
    const toggleIcons = document.querySelectorAll(".topics-icon img");
    const answers = document.querySelectorAll(".answer");
  
    // Oculta todas as respostas inicialmente
    answers.forEach(function (answer) {
      answer.style.display = "none";
    });
  
    toggleIcons.forEach(function (icon) {
      icon.addEventListener("click", function () {
        const answerDiv = this.closest(".topics-tetx").nextElementSibling;
  
        // Fecha todas as respostas antes de abrir a selecionada
        answers.forEach(function (answer) {
          if (answer !== answerDiv) {
            answer.style.display = "none";
            const allIcons = document.querySelectorAll(".topics-icon img");
            allIcons.forEach(img => img.src = "assets/images/icon-plus.svg");
          }
        });
        
        // Alternar a visibilidade da resposta clicada
        if (answerDiv.style.display === "block") {
          answerDiv.style.display = "none";
          this.src = "assets/images/icon-plus.svg";
        } else {
          answerDiv.style.display = "block";
          this.src = "assets/images/icon-minus.svg";
        }
      });
    });
  });
  