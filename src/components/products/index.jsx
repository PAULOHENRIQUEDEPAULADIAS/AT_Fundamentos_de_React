import style from "./style.module.css";

import { Link } from "react-router-dom";

export default function Products(props){

    const handleEditClick = () => {
        props.setFormData({
            id: props.produto.id,
            nome: props.produto.nome,
            fornecedor: props.produto.fabricante,
            preco: props.produto.preco,
            url: props.produto.img,
            descricao: "", 
        });
        props.setOpenAdd(true); 
    };

    return(

        <div className={style.card}>
            <Link to={`/details/${props.produto.id}`}>
                <p>{props.produto.nome}</p>
                <img src={props.produto.img}/>
                <p>{props.produto.fabricante}</p>
                <p>R$ {props.produto.preco}</p>
            </Link>
            <div className={style.float_button_fav_div}>
                <button className={style.float_button_fav_img} ><img src="https://www.svgrepo.com/show/532473/heart.svg" alt="Favoritos" title="Add aos favoritos"></img></button>
                <button className={style.float_button_fav_img} onClick={handleEditClick}><img src="https://www.svgrepo.com/show/522527/edit-3.svg" alt="Editar" title="Editar Hotel"></img></button>
            </div>
        </div>
); 
}