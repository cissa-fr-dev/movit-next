import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        resetCountdown
    } = useContext(CountdownContext);

    // não é parte da regra de negócio, e sim de como os dados são mostrados em tela.
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); // padStart = caso tiver uma casa decimal, acrescenta um zero no começo (esquerda)
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split(''); // padStart = caso tiver uma casa decimal, acrescenta um zero no começo (esquerda)

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                    <>
                        {isActive ? (
                            <button
                                type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}
                            >
                                Abandonar ciclo
                            </button>
                        ) : (
                                <button
                                    type="button"
                                    className={styles.countdownButton}
                                    onClick={startCountDown}
                                >
                                    Iniciar um ciclo
                                </button>
                            )
                        }
                    </>
                )}
        </div>
    );
}