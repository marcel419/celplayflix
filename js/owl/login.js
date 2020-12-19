function inciaModal(modalID) {
    var email = document.getElementById("email")
    var senha = document.getElementById("senha")

    if (email.value == "" || senha.value == "") {

        const modal = document.getElementById(modalID);
        if (modal) {

            modal.classList.add('mostrar');

            modal.addEventListener('click', (e) => {

                if (e.target.id == modalID) {
                    modal.classList.remove('mostrar');
                }
            })
        }
    } else {
        window.location.href = "index.html"
        localStorage.setItem("Logado", 1)
    }

}

const ativaModal = document.querySelector('#entra');
ativaModal.addEventListener('click', (e) => {
    inciaModal('modal-ativar');
})