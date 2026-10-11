import type { Rol } from "../../../types/Rol";

const formRegistro = document.querySelector<HTMLFormElement>("#registro");
formRegistro?.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    const inputEmail = document.querySelector<HTMLInputElement>("#email");
    const inputPassword = document.querySelector<HTMLInputElement>("#password");
    if(inputEmail != null && inputPassword != null){
        const email = inputEmail.value
        const password = inputPassword.value
        const role: Rol = "client";
        const datosGuardados = localStorage.getItem("users");

        const usuarioIngreso: { email: string; password: string; role: Rol;}[] =
        datosGuardados !== null ? JSON.parse(datosGuardados) : [];

        usuarioIngreso.push({ email, password, role});

        localStorage.setItem("users", JSON.stringify(usuarioIngreso));
    }
});
