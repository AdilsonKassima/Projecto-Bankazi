

/*MENU HAM,BURGER */
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})




// Galeria E CONTACTO

function openModal(event) {
    if (event.target.tagName === 'IMG') {
      var modal = document.getElementById('myModal');
      var modalImg = document.getElementById('modalImg');
      modal.style.display = 'flex';
      modalImg.src = event.target.src;
    }
  }
  
  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }





//  CONTACTO

  // Referências aos elementos do DOM
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const contactModal = document.getElementById('contactModal');

// Adiciona evento de clique para abrir o modal
openModalBtn.addEventListener('click', function() {
  contactModal.style.display = 'block';
});

// Adiciona evento de clique para fechar o modal
closeModalBtn.addEventListener('click', function() {
  contactModal.style.display = 'none';
});

// Fecha o modal se o usuário clicar fora da área do formulário
window.addEventListener('click', function(event) {
  if (event.target === contactModal) {
    contactModal.style.display = 'none';
  }
});

// Submete o formulário (aqui você pode adicionar lógica para enviar os dados)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Adicione aqui a lógica para enviar os dados do formulário
  alert('A Mensagem Foi enviada com sucesso!');
  contactModal.style.display = 'none';
});




/*PESQUISASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS**/


const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const options = [
  { label: 'Gestão de Sistemas Informáticos ', link: '../Cursos/GSI.html' },
  { label: 'Contablidade e Gestão', link: '../Cursos/CG.html' },
  { label: 'Electrónica e Telecomunicões', link: '../Cursos/ET.html' },
  { label: 'Ensino Geral 1º Cículo', link: '../Cursos/EG.html' },
  { label: 'Ciências Físicas e Biologicas', link: '../Cursos/FB.html' },
  { label: 'Ciências Económicas e Jurídicas', link: '../Cursos/EC.html' },
  { label: 'Início', link: '../html/index.html' }
];

searchInput.addEventListener('input', function() {
  const query = searchInput.value.toLowerCase();
  const filteredOptions = options.filter(option => option.label.toLowerCase().includes(query));
  
  displayResults(filteredOptions);
});

function displayResults(results) {
  searchResults.innerHTML = '';

  if (results.length > 0) {
    results.forEach(result => {
      const listItem = document.createElement('li');
      listItem.textContent = result.label;

      listItem.addEventListener('click', function() {
        // Redireciona para a página associada à opção selecionada
        window.location.href = result.link;
      });

      searchResults.appendChild(listItem);
    });

    searchResults.style.display = 'block';
  } else {
    searchResults.style.display = 'none';
  }
}

document.addEventListener('click', function(event) {
  const isClickInside = searchInput.contains(event.target) || searchResults.contains(event.target);

  if (!isClickInside) {
    searchResults.style.display = 'none';
  }
});




/* Botton Scroll rolagem. bla bla bla bla bla bla bla bla bla bla */

  // Função para mostrar ou ocultar o botão dependendo da posição de rolagem
  window.onscroll = function() {
    showScrollTopButton();
  };

  function showScrollTopButton() {
    var scrollTopBtn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  }

  // Função para rolar suavemente para o topo da página
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


