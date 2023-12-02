import { ThumbsUp } from "@phosphor-icons/react";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import styles from "./Comment.module.css";

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/PhilipeF.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Philipe Ferreira</strong>
                            <time title="02 de Dezembro às 16:45" dateTime="2023-12-02 08:13:30">
                                Cerca de 1h atŕas
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Muito bom Philipe, parabéns !! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}