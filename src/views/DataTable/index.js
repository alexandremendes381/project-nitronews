import React from 'react'
import styles from './index.module.scss'
import Loading from '../../components/loading'
function DataTable({ isValidateMode, isLoading,encomenda }) {

    return (
        <div>
            {isValidateMode === true ? (
                isLoading ? (
                    <Loading/>
                ) : (
                    <><div className={styles.rowContainer}>
                        <div className={styles.spanscontainerone}>
                            <div>
                                <h1>{encomenda?.numero} - {encomenda?.cliente?.nome}</h1>
                                <span>Numero de ordem e nome do cliente</span>
                            </div>
                            <div className={styles.valorpedido}>
                                <h1>{`R$ ${encomenda?.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</h1>
                                <span>Valor do pedido</span>
                            </div>
                        </div>
                        <div className={styles.rowContainer}>
                            <div className={styles.spanscontainerone}>
                                <div>
                                    <h1>
                                        {new Date(encomenda?.data).toLocaleDateString('pt-BR')}
                                    </h1>
                                    <span>data do pedido</span>
                                </div>
                                <div>
                                    <h1>{encomenda?.entregue ? 'Entregue' : 'Entregar'}</h1>
                                    <span>situacao da encomenda</span>
                                </div>
                            </div>
                        </div>
                        </div >
                    </>
                        )
                        ) : isValidateMode === false ? isLoading ? (
                        <Loading />
                        ) : (
                        <>
                            <h2 className={styles.styleh1}>Encomenda</h2>
                            <h2 className={styles.styleh1}>não encontrada!</h2>
                            <h2 className={styles.stylesh1}>Procure Novamente</h2>
                        </>
                        ) : (
                        null
            )}
                    </div>
            )
}

            export default DataTable