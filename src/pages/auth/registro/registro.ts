const formRegistro = document.querySelector<HTMLFormElement>("#registro");
formRegistro?.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    const inputEmail = document.querySelector<HTMLInputElement>("#email");
    const inputPassword = document.querySelector<HTMLInputElement>("#password");
    if(inputEmail != null && inputPassword != null){
        const email = inputEmail.value
        const password = inputPassword.value
        let usuarioIngreso: {email:string; password:string}[] = [{email, password}];
    }
});
