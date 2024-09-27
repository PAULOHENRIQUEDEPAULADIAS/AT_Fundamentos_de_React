import { Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import { useState, useEffect } from "react";

import Header from "../../components/header/index.jsx";
import Product from "../../components/products/index.jsx";
import Footer from "../../components/footer/index.jsx";

import style from "./style.module.css";
import "react-responsive-modal/styles.css";

export default function Home() {
    const [openAdd, setOpenAdd] = useState(false);
    const [openFav, setOpenFav] = useState(false);
    const [formData, setFormData] = useState({
        id: null,
        nome: "",
        preco: "",
        classificacao: "",
        url: "",
        url1: "",
        url2: "",
        descricao: ""
    });

    const [products, setProducts] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("classificacao"); // Novo estado para a ordenação

    const handleSaveProduct = () => {
        if (!formData.nome || !formData.preco || !formData.classificacao || !formData.url || !formData.descricao) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        let updatedProducts;
        if (formData.id) {
            updatedProducts = products.map(product =>
                product.id === formData.id ? { ...product, ...formData } : product
            );
            alert("Dados atualizados com sucesso");
        } else {
            const newProduct = {
                id: Date.now(),
                nome: formData.nome,
                classificacao: formData.classificacao,
                preco: formData.preco,
                img: formData.url,
                img1: formData.url1,
                img2: formData.url2,
                descricao: formData.descricao,
            };
            updatedProducts = [...products, newProduct];
            alert("Dados inseridos com sucesso");
        }

        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        setOpenAdd(false);
        setFormData({ id: null, nome: "", preco: "", classificacao: "", url: "", url1: "", url2: "", descricao: "" });
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
            setFormData({ id: null, nome: "", preco: "", classificacao: "", url: "", url1: "", url2: "", descricao: "" });
        }
    }, [openAdd]);

    const handleDeleteProduct = (id) => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        alert("Dados excluídos com sucesso");
    };

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        if (storedFavorites) {
            setFavorites(storedFavorites);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const handleAddToFavorites = (product) => {
        if (!favorites.some(fav => fav.id === product.id)) {
            const updatedFavorites = [...favorites, product];
            setFavorites(updatedFavorites);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        }
    };

    const handleRemoveFromFavorites = (productId) => {
        const updatedFavorites = favorites.filter(fav => fav.id !== productId);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    const filteredProducts = products.filter(product =>
        product.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Função para ordenar os produtos
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOrder === "classificacao") {
            return b.classificacao - a.classificacao; // Maior para menor
        } else if (sortOrder === "preco") {
            return b.preco - a.preco; // Maior para menor
        }
        return 0;
    });

    return (
        <div>
            <Header />
            <input
                type="text"
                placeholder="Pesquisar por nome"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={style.searchBar}
            />
            <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className={style.sortSelect}
            >
                <option value="classificacao">Ordenar por Classificação</option>
                <option value="preco">Ordenar por Preço</option>
            </select>
            <div className={style.container}>
                <h2>Produtos</h2>
                <div className={style.container_list}>
                    {/* Usando sortedProducts em vez de filteredProducts */}
                    {sortedProducts.map((produto) => (
                        <Product
                            key={produto.id}
                            produto={produto}
                            setOpenAdd={setOpenAdd}
                            setOpenFav={setOpenFav}
                            setFormData={setFormData}
                            handleDeleteProduct={handleDeleteProduct}
                            favorites={favorites}
                            handleAddToFavorites={handleAddToFavorites}
                            handleRemoveFromFavorites={handleRemoveFromFavorites}
                        />
                    ))}
                </div>
            </div>

            <button
                className={style.float_button_add}
                onClick={() => {
                    setFormData({ id: null, nome: "", preco: "", classificacao: "", url: "", url1: "", url2: "", descricao: "" });
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
            <Modal open={openAdd} onClose={() => setOpenAdd(false)} center>
                <div className={style.container_modal}>
                    <h1>{formData.id ? "Editar Produto" : "Adicionar Produto"}</h1>

                    <input
                        value={formData.nome}
                        onChange={(event) =>
                            setFormData({ ...formData, nome: event.target.value })
                        }
                        placeholder="Nome do Produto (Campo obrigatório)" />

                    <div className={style.row}>
                        <input
                            value={formData.preco}
                            onChange={(event) =>
                                setFormData({ ...formData, preco: event.target.value })
                            } placeholder="Preço (Campo obrigatório)" />
                        <input
                            type="number"
                            value={formData.classificacao}
                            onChange={(event) => {
                                const value = Number(event.target.value);
                                if (value >= 1 && value <= 5) {
                                    setFormData({ ...formData, classificacao: value });
                                }
                            }}
                            placeholder="Classificação de 1 - 5 (Campo obrigatório)"
                        />
                    </div>

                    <input
                        value={formData.url}
                        onChange={(event) =>
                            setFormData({ ...formData, url: event.target.value })
                        }
                        placeholder="URL da Imagem (Campo obrigatório)" />

                    <input
                        value={formData.url1}
                        onChange={(event) =>
                            setFormData({ ...formData, url1: event.target.value })
                        }
                        placeholder="URL da Imagem (Campo opcional)" />

                    <input
                        value={formData.url2}
                        onChange={(event) =>
                            setFormData({ ...formData, url2: event.target.value })
                        }
                        placeholder="URL da Imagem (Campo opcional)" />

                    <textarea
                        value={formData.descricao}
                        onChange={(event) =>
                            setFormData({ ...formData, descricao: event.target.value })
                        }
                        placeholder="Descrição (Campo obrigatório)"></textarea>
                    <div className={style.row}>
                        <button onClick={handleSaveProduct}>Salvar</button>
                        <button onClick={() => setOpenAdd(false)}>Cancelar</button>
                    </div>
                </div>
            </Modal>

            <Modal open={openFav} onClose={() => setOpenFav(false)} center>
                <div className={style.container_modal_fav}>
                    <h1>Hello Favoritos</h1>
                    {favorites.map((produto) => (
                        <Product
                            key={produto.id}
                            produto={produto}
                            setOpenAdd={setOpenAdd}
                            setFormData={setFormData}
                            handleDeleteProduct={handleDeleteProduct}
                            handleRemoveFromFavorites={handleRemoveFromFavorites}
                        />
                    ))}
                    
                </div>
            </Modal>
        </div>
    );
}
