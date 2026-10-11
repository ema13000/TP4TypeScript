import type { IUser } from "../../../types/IUser";
import type { Rol } from "../../../types/Rol";
import { navigate } from "../../../utils/navigate";

const form = document.getElementById("form") as HTMLFormElement;
const inputEmail = document.getElementById("email") as HTMLInputElement;
const inputPassword = document.getElementById("password") as HTMLInputElement;

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  const valueEmail = inputEmail.value;
  const valuePassword = inputPassword.value;
  const datosGuardados = localStorage.getItem("users");
  type UsuarioRegistrado = {
    email: string;
    password: string;
    role: Rol;
  };

  let usuarioEncontrado: UsuarioRegistrado | null = null;
  const usuarios: { email: string; password: string; role: Rol}[] =
    datosGuardados !== null ? JSON.parse(datosGuardados) : [];

  for (const usuario of usuarios) {
    if (
      usuario.email === valueEmail &&
      usuario.password === valuePassword
    ){
      usuarioEncontrado = usuario;
      break;
    }
  }

  if (usuarioEncontrado === null) {
       alert("Email o contraseña incorrectos");
    return;
    }

  const user: IUser = {
    email: usuarioEncontrado.email,
    role: usuarioEncontrado.role,
    loggedIn: true,
  };

  const parseUser = JSON.stringify(user);
  localStorage.setItem("userData", parseUser);

  if ( usuarioEncontrado.role === "admin") {
    navigate("/src/pages/admin/home/home.html");
  } else if ( usuarioEncontrado.role === "client") {
    navigate("/src/pages/client/home/home.html");
  }
});
