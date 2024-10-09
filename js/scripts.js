/*!
* Start Bootstrap - Business Frontpage v5.0.9 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document
  .getElementById("cadastroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      nome: document.getElementById("nome").value = " ",
      email: document.getElementById("email").value = " ",
      mensagem: document.getElementById("mensagem").value = " ",
      // genero: document.querySelector('input[name="genero"]:checked').value,
      // pais: document.getElementById("pais").value,
    };

    console.log("Dados:", formData);

    fetch("http://localhost:8000/contato", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Contato realizado com sucesso!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Erro ao enviar contato.");
      });
  });

