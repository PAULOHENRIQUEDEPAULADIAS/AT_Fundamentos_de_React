import {Link, useNavigate} from "react-router-dom";

export default function Home(){
    return (
        <div>
            <h2>Hello Home</h2>

            <Link to="/products">Ir para a próxima tela</Link>
        </div>
    );
}