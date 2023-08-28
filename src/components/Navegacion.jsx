import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


const Navegacion =() => {
  const {state, login, logout} = useContext(AuthContext)

  return (
    <header className="p-3 text-bg-dark">
    <div className="container-fluid">
        <div className="px-lg-5 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div className="nav col-12 col-lg-auto me-lg-auto mb-2 mb-md-0">
                <a href="#" className="navbar-brand d-flex align-items-center">
                    <strong>PRDCEL</strong>
                </a>
            </div>

            <div className="text-end">
            {state?.isLogued && (
                            <button 
                            type="button" 
                            className="btn btn-outline-light m-2"
                            onClick={logout}
                        >
                            Logout
                        </button>
            )} 
            {!state?.isLogued && (
                 <button 
                 type="button" 
                 className="btn btn-outline-light m-2"
                 onClick={login}
             >
                 Login
             </button>
            )}
            </div>
        </div>
    </div>
</header>
  );
}

export default Navegacion;