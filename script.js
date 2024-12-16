
console.log("Titulo Atual :", document.title);

document.title = "Novo Titulo";


console.log("Novo Título Aplicado :", document.title);

function changeTitle() {
    // Obtém o valor do campo de texto
    const newTitle = document.getElementById("titleInput").value;

    // Altera o título da página
    if (newTitle.trim() !== "") {
      document.title = newTitle;
      alert(`Título alterado para: ${newTitle}`);
    } else {
      alert("Por favor, insira um título válido!");
    }
}