import style from "./style.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products(props){

    const [isFavorited, setIsFavorited] = useState(
        Array.isArray(props.favorites) && props.favorites.some(fav => fav.id === props.produto.id)
    );

    const handleFavoriteClick = () => {
        if (isFavorited) {
            props.handleRemoveFromFavorites(props.produto.id);
        } else {
            props.handleAddToFavorites(props.produto);
        }
        setIsFavorited(!isFavorited);  
    };

    const handleEditClick = () => {
        props.setFormData({
            id: props.produto.id,
            nome: props.produto.nome,
            classificacao: props.produto.classificacao,
            preco: props.produto.preco,
            url: props.produto.img,
            descricao: "", 
        });
        props.setOpenAdd(true); 
    };

    useEffect(() => {
        setIsFavorited(Array.isArray(props.favorites) && props.favorites.some(fav => fav.id === props.produto.id));
    }, [props.favorites, props.produto.id]);
    

    return(

        <div className={style.card}>
            <Link to={`/details/${props.produto.id}`}>
                <p>{props.produto.nome}</p>
                <img src={props.produto.img}/>
                <p>Nota: {props.produto.classificacao}</p>
                <p>R$ {props.produto.preco}</p>
            </Link>
            <div className={style.float_button_fav_div}>
            
                <button className={style.float_button_fav_img} onClick={handleFavoriteClick} ><img src={isFavorited ? "https://www.svgrepo.com/show/502535/broken-heart.svg" : "https://www.svgrepo.com/show/532473/heart.svg"} alt={isFavorited ? "Desfavoritar" : "Favoritar"} title={isFavorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}></img></button>

                <button className={style.float_button_fav_img} onClick={handleEditClick}><img src="https://www.svgrepo.com/show/522527/edit-3.svg" alt="Editar" title="Editar Hotel"></img></button>
                <button className={style.float_button_fav_img} onClick={() => props.handleDeleteProduct(props.produto.id)}><img src="https://www.svgrepo.com/show/474658/bin.svg" alt="Excluir" title="Excluir Hotel"></img></button>
            </div>
        </div>
); 
}