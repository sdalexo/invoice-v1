import BtnLogin from "../components/buttons/ButtonLogin"
import InputLoginText from "../components/inputs/InputLoginText"
import '@styles/pages/Login.css'
function Login(){
    return(
        <div className="page-login">
            <div className="container-login">
                <h1 className="title-login">Ingresa tu correo electronico y tu contraseña</h1>
                <form className="form-login"onSubmit={(e)=>{e.preventDefault()}} method="POST">
                    <label htmlFor="">Ingresa tu correo</label>
                    <InputLoginText placeholder="Ingresa tu correo" type="email" />
                    <label htmlFor="password">Ingresa tu contraseña</label>
                    <InputLoginText placeholder="******" type="password" />
                     <BtnLogin />
                </form>
            </div>
        </div>
    )
}

export default Login

