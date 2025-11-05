// ===== Dark Mode persistente =====
const darkToggle = document.getElementById('darkModeToggle');
const currentTheme = localStorage.getItem('theme');

if(currentTheme === 'dark') document.body.classList.add('dark');

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    darkToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});


 
// ===== Modal =====
const modal = document.getElementById('projectModal');
const modalText = document.getElementById('modal-text');

function openModal(projectName){
    modal.style.display = 'flex';
    modalText.textContent = `${projectName}`;
}

function closeModal(){
    modal.style.display = 'none';
}

window.onclick = function(event){
    if(event.target == modal) closeModal();
}

// ===== Formulário com validação =====
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    form.reset();
});
// ===== Efeito digitação =====
const typingText = document.getElementById('typing-text');
const text = "Arthur Ferraz Nascimento";
let i=0;

function typeWriter(){
    if(i<text.length){
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,150);
    }
}
typeWriter();
function mascara_telefone()
        {
           //limitador
         var tel = document.getElementById("telefone").value
            console.log(tel)
          tel=tel.slice(0,14) //(pode limitar a quantidade de char na entrada pelo java script)
            console.log(tel)
          document.getElementById("telefone").value=tel
     tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)
           
            //máscara
            var tel_formatado = document.getElementById("telefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
        }