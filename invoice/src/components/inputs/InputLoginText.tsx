import '@styles/components/inputs/InputLoginText.css'

function InputLoginText(props:any){
    return(
        <input type={props.type} placeholder={props.placeholder} className="input-login"/>
    )
}

export default InputLoginText