import { getUSer } from "./utils/localStorage";
import { navigate } from "./utils/navigate";
import type { IUser } from "./types/IUser";

function protegerRuta(): void {
  const rutaActual = window.location.pathname;
  const usuarioGuardado = getUSer();
  if (usuarioGuardado === null) {
    navigate("/src/pages/auth/login/login.html");
    return;
  }
  const usuario: IUser = JSON.parse(usuarioGuardado);
  
  if (usuario.role === "client" && rutaActual.includes("/src/pages/admin")) {
    navigate("/src/pages/client/home/home.html");
  }
}
protegerRuta();