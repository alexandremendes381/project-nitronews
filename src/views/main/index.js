import Input from '../../components/Input';
import styles from './index.module.scss';
import logo from '../../assets/images/logo.png';
import logoPurple from '../../assets/images/logoPurple.png';
import Tooltip from '../../utils/Tooltip';

import InputCheckbox from '../../components/InputCheckbox';
import DataTable from '../DataTable';
import UseMain from '../../hooks/userMain';


function Main() {
    const {
        encomenda,
        toggleDarkMode,
        handleSearch,
        isPurpleMode,
        isValidateMode,
        isLoading,
    } = UseMain()

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
                    <Input
                        label="Consulte sua Encomenda:"
                        className={styles.customInput}
                        placeholder="Digite o número do pedido"
                        onSearch={handleSearch}
                        isPurpleMode={isPurpleMode}
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
