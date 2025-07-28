import { NavLink } from "react-router-dom";

function Login() {
  return (
    <NavLink to="/login">
      <button className="mr-4 rounded-md py-2 px-4 text-neutral-500 hover:text-white">
        Entrar
      </button>
    </NavLink>
  );
}

export default Login;
