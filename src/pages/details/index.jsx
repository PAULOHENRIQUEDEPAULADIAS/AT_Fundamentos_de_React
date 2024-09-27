import { useParams, useNavigate } from "react-router-dom";
import  {useEffect, useState} from "react";

import Header from "../../components/header/index.jsx";
import Footer from "../../components/footer/index.jsx";

import style from "./style.module.css";


export default function Details(){

    const navigate = useNavigate();

    
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

    const images = [product.img, product.img1, product.img2].filter(Boolean); 

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className={style.container}>
            <Header />
                <div className={style.content}>

                <div className={style.imageCarousel}>
                    <button onClick={handlePreviousImage}>&lt;</button>
                    <img src={images[currentImageIndex]} alt={product.nome} />
                    <button onClick={handleNextImage}>&gt;</button>
                </div>
                    <div className={style.details}>
                        <p>{product.nome}</p>
                        <p>{product.id}</p>
                        <br/>
                        <p>R$ {product.preco}</p>
                        <p>{product.fabricante}</p>
                        <p>{product.descricao}</p>
                    </div>
                </div>
                <button className={style.return} onClick={() => navigate(-1)}>Retornar</button>
            <Footer />
           
              
          
        </div>
    );
}