import '@styles/components/buttons/ButtonLogin.css'

function BtnLogin (){
     return (
       <button className="btn-login" onClick={()=>{console.log('hola')}}>
        Iniciar Sesion
       </button>
    );
}

export default BtnLogin;