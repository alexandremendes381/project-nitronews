import React, { useEffect, useState } from 'react';
import { toastInfo, toastSuccess } from '../../utils/ToastInfo';
import axios from 'axios';
import * as yup from "yup";


function UseMain() {
    const [encomenda, setEncomenda] = useState(null);
    const [isPurpleMode, setIsPurpleMode] = useState(false);
    const [isValidateMode, setIsValidateMode] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const startLoading = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    useEffect(() => {
        if (isPurpleMode) {
            document.documentElement.classList.add('night-mode');
        } else {
            document.documentElement.classList.remove('night-mode');
        }
    }, [isPurpleMode]);

    const toggleDarkMode = () => {
        setIsPurpleMode(!isPurpleMode);
    };

    const validationSchema = yup.object().shape({
        numeroPedido: yup.string()
            .matches(/^[A-Z]{3}-\d{2}[A-Z]$/, 'Format should be AAA-99A')
            .required('Número do pedido é obrigatório'),
    });

    const handleSearch = async (numeroPedido) => {
        startLoading();

        try {

            setEncomenda(null);
            await validationSchema.validate({ numeroPedido });
            const response = await axios.get('./dados.json');
            const data = response.data;
            const resultado = data.encomendas.find((item) => item.numero === numeroPedido);

            console.log('Resultado da busca:', resultado);

            if (resultado) {
                setEncomenda(resultado);
                toastSuccess('Busca Feita com Sucesso');
                setIsValidateMode(true);
            } else {
                toastInfo('Não há registros correspondentes ao item pesquisado');
                setIsValidateMode(false);

            }
        } catch (error) {
            toastInfo('Erro de validação: Caracteres insuficientes', error.errors);
            setIsValidateMode(null);
        } finally {

        }
    };

    return {
        encomenda,
        toggleDarkMode,
        handleSearch,
        isPurpleMode,
        validationSchema,
        isValidateMode,
        isLoading,
    }
}

export default UseMain;
