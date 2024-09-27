import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css'; // Você pode adicionar estilos conforme necessário

export default function NotFound(){
    const navigate = useNavigate();

    return (
        <div className={style.notFoundContainer}>
            <h1>Página Não Encontrada (404)</h1>
            <p>Desculpe, a página que você está procurando não existe.</p>
            <button onClick={() => navigate(-1)} className={style.backButton}>
                Voltar
            </button>
        </div>
    );
};
