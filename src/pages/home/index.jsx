import {Link} from "react-router-dom";
import {Modal} from "react-responsive-modal";
import { useState, useEffect  } from "react";

import Header from "../../components/header";
import Product from "../../components/products";
import Footer from "../../components/footer";

import style from "./style.module.css";
import "react-responsive-modal/styles.css";

export default function Home(){

    const [openAdd, setOpenAdd] = useState(false)
    const [openFav, setOpenFav] = useState(false)

    const [formData, setFormData] = useState({
        id: null, 
        nome: "", 
        preco:"", 
        fornecedor:"", 
        url:"", 
        descricao:""
    });

    const [products, setProducts] = useState([]);

    const handleSaveProduct = () => {
        if (!formData.nome || !formData.preco || !formData.fornecedor || !formData.url || !formData.descricao) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        let updatedProducts;
        if (formData.id) {
            updatedProducts = products.map(product =>
                product.id === formData.id ? { ...product, ...formData } : product
            );
        } else {
            const newProduct = {
                id: Date.now(),
                nome: formData.nome,
                fabricante: formData.fornecedor,
                preco: formData.preco,
                img: formData.url,
                descricao: formData.descricao,
            };
            updatedProducts = [...products, newProduct];
        }

        
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        setOpenAdd(false);
        setFormData({id: null, nome: "", preco: "", fornecedor: "", url: "", descricao: "" });
    };

    useEffect(() => {
        try {
            const storedProducts = JSON.parse(localStorage.getItem("products"));
            if (storedProducts) {
                setProducts(storedProducts);
            }
        } catch (error) {
            console.error("Erro ao salvar os dados no localStorage: ", error);
        }
    }, []);

    const handleEditProduct = (product) => {
        setFormData(product);
        setOpenAdd(true); 
    };

    useEffect(() => {
        if (openAdd && !formData.id) {
            setFormData({ id: null, nome: "", preco: "", fornecedor: "", url: "", descricao: "" });
        }
    }, [openAdd]);
    
    return (
        <div >
            <Header />
            
            <div className={style.container}>
                <h2>Produtos</h2>
                <div className={style.container_list}>
                    {products.map((produto) => (
                        <Product 
                        key={produto.id} 
                        produto={produto}
                        setOpenAdd={setOpenAdd}
                        setOpenFav={setOpenFav}
                        setFormData={setFormData}
                        />
                        
                    ))}
                </div>
            </div>
            
            <button
                className={style.float_button_add}
                onClick={() => {
                    setFormData({ id: null, nome: "", preco: "", fornecedor: "", url: "", descricao: "" });
                    setOpenAdd(true);
                }}
            >
              +
            </button>

            <button
                className={style.float_button_fav}
                onClick={() => setOpenFav(true)}
            >
                <img src="https://www.svgrepo.com/show/532473/heart.svg" alt="Favoritos" />
            </button>
            
            <Footer />
            <Modal  open={openAdd} onClose={()=>setOpenAdd(false)} center>
                <div className={style.container_modal}>
                    <h1>{formData.id ? "Editar Produto" : "Adicionar Produto"}</h1>

                    <input
                    value={formData.nome}
                    onChange={(event) =>
                        setFormData({ ...formData, nome:event.target.value})
                    } 
                    placeholder="Nome do Produto (Campo obrigatório)" />

                    <div className={style.row}>
                       <input
                       value={formData.preco}
                       onChange={(event) =>
                           setFormData({ ...formData, preco:event.target.value})
                       } placeholder="Preco (Campo obrigatório)" />
                      <input 
                      value={formData.fornecedor}
                      onChange={(event) =>
                          setFormData({ ...formData, fornecedor:event.target.value})
                      }
                      placeholder="Fornecedor (Campo obrigatório)" />
                    </div>
                    <input
                    value={formData.url}
                    onChange={(event) =>
                        setFormData({ ...formData, url:event.target.value})
                    } 
                    placeholder="URL da Imagem (Campo obrigatório)" />
                    <textarea
                    value={formData.descricao}
                    onChange={(event) =>
                        setFormData({ ...formData, descricao:event.target.value})
                    }
                    placeholder="Descrição (Campo obrigatório)"></textarea>
                    <div className={style.row}>
                        <button onClick={handleSaveProduct}>Salvar</button>
                        <button onClick={()=> setOpenAdd(false)}>Cancelar</button>
                    </div>
                </div>
            </Modal>


            <Modal open={openFav} onClose={()=>setOpenFav(false)} center>
                <h1>Hello Favoritos</h1>
            </Modal>
            
        </div>
    );
}