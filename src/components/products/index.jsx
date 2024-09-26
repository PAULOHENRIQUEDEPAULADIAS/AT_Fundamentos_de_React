import style from "./style.module.css";

import { Link } from "react-router-dom";

export default function Products(props){
    return(

        <div className={style.card}>
            <Link to="/details">
                <p>{props.produto.nome}</p>
                <img src={props.produto.img}/>
                <p>{props.produto.fabricante}</p>
                <p>R$ {props.produto.preco}</p>
            </Link>
            <button className={style.float_button_fav_img}><img src="https://www.svgrepo.com/show/532473/heart.svg" alt="Favoritos" title="Add aos favoritos"></img></button>
        </div>
); 


    
}