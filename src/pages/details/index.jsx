import { useParams, useNavigate } from "react-router-dom";
import  {useEffect, useState} from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

import style from "./style.module.css";


export default function Details(){

    const navigate = useNavigate();

    
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem("products"));
        if (storedProducts) {
            const foundProduct = storedProducts.find(prod => prod.id === parseInt(id)); // Buscar o produto pelo ID
            setProduct(foundProduct);
        }
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className={style.container}>
            <Header />
                <div className={style.content}>
                    <div><img src={product.img} alt={product.nome}/>
                    </div>
                    <div className={style.details}>
                        <p>{product.nome}</p>
                        <p>{product.id}</p>
                        <p>{product.preco}</p>
                        <p>{product.fabricante}</p>
                        <p>{product.descricao}</p>
                    </div>
                </div>
                <button className={style.return} onClick={() => navigate(-1)}>Retornar</button>
            <Footer />
           
              
          
        </div>
    );
}