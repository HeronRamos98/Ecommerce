//*Scrpit Dropdown
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-link')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  //*Scrpit consumindo arquivo JSON(nome do arquivo : fem.jason)
  fetch('fem.json')
  .then(response => response.json())
  .then(data => {
      const container = document.getElementById('produto-container');
      let produtosHtml = '';
  
      //*Relacionar os produtos e gerá-los no HTML
      data.forEach(produto => {
          produtosHtml += `
              <div class="produto">
                  <img src="${produto['img-capa']}" alt="${produto['nome-produto']}">
                  <h3>${produto['nome-produto']}</h3>
                  <p><strong>Marca:</strong> ${produto.marca}</p>
                  <p><strong>Categoria:</strong> ${produto.categoria}</p>
                  <p><strong>Valor:</strong> R$ ${produto.valor}</p>
              </div>
          `;
      });
  
      //*Inserindo produtos no container
      container.innerHTML = produtosHtml;
  })
  .catch(error => {
      console.error('Erro ao carregar o arquivo JSON:', error);
  });
  
  