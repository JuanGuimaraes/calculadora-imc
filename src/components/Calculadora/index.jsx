import { useState, useEffect } from "react";

import styles from './CalculadoraImc.module.css';


const Calculadora = () => {
    const [peso, setPeso] = useState(0);
    const[altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [classificacao, setClassificacao] = useState('');

const calculaImc = () => {
    if (peso <= 0) {
        alert("Insita um peso valido");
        return; 
    }
    if (altura <= 0) {
        alert("Insita uma altura valida");
        return; 
    }

    const imc = peso / (altura * altura);
    const formatoImc = imc.toFixed(1);
    setResultado(formatoImc);
    
    

    if(imc >= 40.0) return setClassificacao('você está com obesidade grau 3');
    if(imc >= 34.9) return setClassificacao('você está com obesidade grau 2');
    if(imc >= 29.9) return setClassificacao('você está com obesidade grau 1');
    if(imc >= 24.9) return setClassificacao('você está com excesso de peso');
    if(imc >= 18.5) return setClassificacao('você está com o peso normal');
    if(imc <= 18.5) return setClassificacao('você está abaixo do peso normal');

    setClassificacao(classificacao);
};


const resetar = () => {
    setPeso(0);
    setAltura(0);
    setResultado(0);
    setClassificacao(0);
}

    return (
        <div className={styles.container}>
            <div className={styles.inputs}>
            <input className={styles.campos}
                type="number" 
                value={peso} 
                onChange={(e) => setPeso(e.target.value)}
                placeholder="Peso (Kg)" />

            <input className={styles.campos}
                type="number" 
                value={altura} 
                onChange={(e) => setAltura(e.target.value)}
                placeholder="Altura (M)" />

            </div>
            <div className={styles.botoes}>
                <button className={styles.button} type="button" onClick={calculaImc}>Calcular</button>
                <button className={styles.button} type="button" onClick={resetar}>Resetar</button>
            </div>

            {resultado > 0 && (
                <div >
                    Seu imc é {resultado}, {classificacao}
                </div>
            )}
            
        </div>
    )
}


export default Calculadora