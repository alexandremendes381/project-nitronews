import Input from '../../components/Input';
import styles from './index.module.scss';
import logo from '../../assets/images/logo.png';
import DataTable from '../DataTable';
import UseMain from '../../hooks/userMain';


function Main() {
    const {
        encomenda,
        handleSearch,
        isValidateMode,
        isLoading,
    } = UseMain()

    return (
        <div>
            <div className={styles.containerImg}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.container}>
                <div className={styles.centeredContent}>
                    <Input
                        label="Consulte sua Encomenda:"
                        className={styles.customInput}
                        placeholder="Digite o número do pedido"
                        onSearch={handleSearch}
                    />
                </div>
            </div>
            <DataTable
                isValidateMode={isValidateMode}
                isLoading={isLoading}
                encomenda={encomenda}
            />
        </div>
    );
}

export default Main;
