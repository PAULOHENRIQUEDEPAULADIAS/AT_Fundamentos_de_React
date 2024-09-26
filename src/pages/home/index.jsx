import {Link} from "react-router-dom";
import {Modal} from "react-responsive-modal";
import { useState } from "react";

import Header from "../../components/header";
import Product from "../../components/products";
import Footer from "../../components/footer";

import style from "./style.module.css";
import "react-responsive-modal/styles.css";

export default function Home(){

    const [openAdd, setOpenAdd] = useState(false)
    const [openFav, setOpenFav] = useState(false)

    const mock = [
        {
            id: 1,
            nome: "teste",
            fabricante: "Fabricante",
            preco: 899,
            img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/8903790.jpg?k=2df634bd82f0e765e20e77426fc5da57c266a9d72c499920c4048e89bc34e534&o=&hp=1",
        },
        {
            id: 2,
            nome: "teste",
            fabricante: "Fabricante",
            preco: 899,
            img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/09/Hotel-beira-mar-fortaleza-capa.jpg",
        },
        {
            id: 3,
            nome: "teste",
            fabricante: "Fabricante",
            preco: 899,
            img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/09/Hotel-beira-mar-fortaleza-capa.jpg",
        },
        {
            id: 2,
            nome: "teste",
            fabricante: "Fabricante",
            preco: 899,
            img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/09/Hotel-beira-mar-fortaleza-capa.jpg",
        },
        {
            id: 1,
            nome: "teste",
            fabricante: "Fabricante",
            preco: 899,
            img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/09/Hotel-beira-mar-fortaleza-capa.jpg",
        },
        {
            id: 2,
            nome: "teste",
            fabricante: "Fabricante",
            preco: 899,
            img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/09/Hotel-beira-mar-fortaleza-capa.jpg",
        },
        {
            id: 3,
            nome: "teste",
            fabricante: "Fabricante",
            preco: 899,
            img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/09/Hotel-beira-mar-fortaleza-capa.jpg",
        },
        {
            id: 2,
            nome: "teste",
            fabricante: "Fabricante",
            preco: 899,
            img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/09/Hotel-beira-mar-fortaleza-capa.jpg",
        },
        {
            id: 1,
            nome: "teste",
            fabricante: "Fabricante",
            preco: 899,
            img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/09/Hotel-beira-mar-fortaleza-capa.jpg",
        },
        {
            id: 2,
            nome: "teste",
            fabricante: "Fabricante",
            preco: 899,
            img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/09/Hotel-beira-mar-fortaleza-capa.jpg",
        },
        {
            id: 2,
            nome: "teste",
            fabricante: "Fabricante",
            preco: 899,
            img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/09/Hotel-beira-mar-fortaleza-capa.jpg",
        },
        {
            id: 1,
            nome: "teste",
            fabricante: "Fabricante",
            preco: 899,
            img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/09/Hotel-beira-mar-fortaleza-capa.jpg",
        },
        {
            id: 2,
            nome: "teste",
            fabricante: "Fabricante",
            preco: 899,
            img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/09/Hotel-beira-mar-fortaleza-capa.jpg",
        },
        {
            id: 3,
            nome: "teste",
            fabricante: "Fabricante",
            preco: 899,
            img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/09/Hotel-beira-mar-fortaleza-capa.jpg",
        },
        {
            id: 2,
            nome: "teste",
            fabricante: "Fabricante",
            preco: 899,
            img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/09/Hotel-beira-mar-fortaleza-capa.jpg",
        },
        {
            id: 1,
            nome: "teste",
            fabricante: "Fabricante",
            preco: 899,
            img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/09/Hotel-beira-mar-fortaleza-capa.jpg",
        },
        {
            id: 2,
            nome: "teste",
            fabricante: "Fabricante",
            preco: 899,
            img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/09/Hotel-beira-mar-fortaleza-capa.jpg",
        },
    ];

    return (
        <div >
            <Header />
            
            <div className={style.container}>
                <h2>Produtos</h2>
                <div className={style.container_list}>
                    {mock.map((produto) => (
                        <Product key={produto.id} produto={produto}/>
                    ))}
                </div>
            </div>

            <button className={style.float_button_add} onClick={()=>setOpenAdd(true)}>+</button>


            <button className={style.float_button_fav} onClick={()=>setOpenFav(true)}><img src="https://www.svgrepo.com/show/532473/heart.svg" alt="Favoritos"></img></button>
            <Footer />
            <Modal  open={openAdd} onClose={()=>setOpenAdd(false)} center>
                <div className={style.container_modal}>
                    <h1>Hello Adicionar</h1>

                    <input placeholder="Nome do Produto" />

                    <div className={style.row}>
                       <input placeholder="Preco" />
                      <input placeholder="Fornecedor" />
                    </div>
                    <input placeholder="URL da Imagem" />
                    <textarea placeholder="Descrição"></textarea>
                    <div className={style.row}>
                        <button>Salvar</button>
                        <button>Cancelar</button>
                    </div>
                </div>


            </Modal>


            <Modal open={openFav} onClose={()=>setOpenFav(false)} center>
                <h1>Hello Favoritos</h1>
            </Modal>
            
        </div>
    );
}