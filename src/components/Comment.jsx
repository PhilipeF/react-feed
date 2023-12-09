import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

import { ThumbsUp } from "@phosphor-icons/react";
import { Trash } from "@phosphor-icons/react/dist/ssr";

export function Comment({ content, deleteComment }) {

    function handleDeleteComment() {
        deleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/pamellafernandes.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Philipe Ferreira</strong>
                            <time className={styles.time} title="02 de Dezembro às 16:45" dateTime="2023-12-02 08:13:30">
                                Cerca de 1h atŕas
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}