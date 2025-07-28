import { NavLink } from "react-router-dom";

function SignUp() {
  return (
    <NavLink to="/signup">
      {/* As classes de estilo do botão foram alteradas para garantir o contraste */}
      <button className="rounded-lg bg-purple-600 py-2 px-4 font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:bg-purple-700">
        Criar Conta
      </button>
    </NavLink>
  );
}

export default SignUp;
