import React from 'react';
import { Link } from 'react-router-dom'; //para clicar no botão 'não tenho cadastro' e ele não precisar carregar a página inteira
import { FiArrowLeft } from 'react-icons/fi' //npm install react-icons //para instalar ícones

import './style.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>
                <form>
                    <input placeholder="Título do caso"/>
                    <textarea  placeholder="Descrição"/>
                    <input placeholder="Valor em reais"/>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );

}