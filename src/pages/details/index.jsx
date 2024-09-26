
import Header from "../../components/header";
import Footer from "../../components/footer";

import style from "./style.module.css";


export default function Details(){

    const mock = 
        {
            id: 1,
            nome: "teste",
            fabricante: "Fabricante",
            preco: 899,
            img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/8903790.jpg?k=2df634bd82f0e765e20e77426fc5da57c266a9d72c499920c4048e89bc34e534&o=&hp=1",
            descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dolore, quae maiores ratione ullam commodi fugit aliquam dignissimos, voluptatem nisi tempore dolor. Voluptatem, odio. Veritatis hic sint mollitia sit architecto."
        };
    

    return (
        <div className={style.container}>
            <Header />
            <div className={style.content}>
                <div><img src={mock.img}></img></div>
                <div className={style.details}>
                    <p>{mock.nome}</p>
                    <p>{mock.id}</p>
                    <p>{mock.preco}</p>
                    <p>{mock.fabricante}</p>
                    <p>{mock.descricao}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}