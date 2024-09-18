import React, { useState } from 'react';
import Input from '../../components/Input';
import styles from './index.module.scss';
import logo from '../../assets/images/logo.png';
import logoPurple from '../../assets/images/logoPurple.png';
import Tooltip from '../../utils/Tooltip';
import InputCheckbox from '../../components/InputCheckbox';
import DataTable from '../DataTable';
import UseMain from '../../hooks/userMain';
import dados from '../../utils/dados.json'

function Main() {
    const {
        encomenda,
        toggleDarkMode,
        handleSearch,
        isPurpleMode,
        isValidateMode,
        isLoading,
    } = UseMain();

    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <div className={`${styles.containerImg} ${isPurpleMode ? styles : ''}`}>
                {isPurpleMode ? (
                    <img src={logoPurple} alt="logo" />
                ) : (
                    <img src={logo} alt="logo" />
                )}
            </div>
            <div className={styles.checkboxesContainer}>
            
                <div>
                    <Tooltip text="Alterar Cores" isPurpleMode={isPurpleMode}>
                        <InputCheckbox
                            id="night-mode"
                            className="lamp"
                            type="checkbox"
                            aria-label="night-mode"
                            onClick={toggleDarkMode}
                            role="switch"
                            indeterminate
                        />
                    </Tooltip>
                </div>
                
            </div>
            <div className={`${styles.container} ${isPurpleMode ? styles['purple-background'] : ''}`}>
                <div className={styles.centeredContent}>
                <button onClick={openModal} className={styles.openModalButton}>Mostrar Números</button>
                    <Input
                        label="Consulte sua Encomenda:"
                        className={styles.customInput}
                        placeholder="Digite o número do pedido"
                        onSearch={handleSearch}
                        isPurpleMode={isPurpleMode}
                    />
                </div>
                
            </div>

            {/* Botão para abrir o modal */}
          

            {/* Modal */}
            {isModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h2>Números das Encomendas</h2>
                        <ul>
                            {dados.encomendas.map((encomenda) => (
                                <li key={encomenda.id}>{encomenda.numero}</li>
                            ))}
                        </ul>
                        <button onClick={closeModal}>Fechar</button>
                    </div>
                </div>
            )}

            <DataTable
                isValidateMode={isValidateMode}
                isLoading={isLoading}
                encomenda={encomenda}
            />
        </div>
    );
}

export default Main;
