import {useState} from 'react'

const Contador = () => {
const[show, setShow] = useState(true)

    return(
        <div>
            <button onClick={() => setShow(!show)}>{show ? 'Ocultar' : 'Mostrar'}</button>
        </div>
    )
}
export default Contador