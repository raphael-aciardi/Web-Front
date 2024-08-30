        const form = document.querySelector("#form");
        const Name = document.querySelector("#userName");
        const Email = document.querySelector("#userEmail");
        const Password = document.querySelector("#userPassword");
        const ConfPassword = document.querySelector("#userConfPassword");
        

        // Adiciona evento de submit ao formulário
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            let isValid = true; // Variável para verificar se o formulário é válido

            if (Name.value === "") {
                alert("Por favor, preencha seu nome");
                isValid = false;
            }
            if (Email.value === "" || !EmailValid(Email.value)) {
                alert("Por favor, preencha seu e-mail corretamente");
                isValid = false;
            }
            if (!validatePassword(Password.value, 8)) {
                alert("A senha deve ter no mínimo 8 dígitos");
                isValid = false;
            }
            if (Password.value !== ConfPassword.value) {
                alert("As senhas não são iguais");
                isValid = false;
            }

            // Se todas as validações forem aprovadas, submeter o formulário
            if (isValid) {
                form.submit();
            }
        });

        // Função para validar o e-mail
        function EmailValid(Email) {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(Email);
        }

        // Função para validar a senha
        function validatePassword(Password, minDigits) {
            return Password.length >= minDigits;
        }

    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    } 