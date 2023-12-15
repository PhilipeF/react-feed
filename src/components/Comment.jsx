import { Avatar } from "./Avatar";
import { ThumbsUp } from "@phosphor-icons/react";
import { Trash } from "@phosphor-icons/react/dist/ssr";

import styles from "./Comment.module.css";
import { useState } from "react";

export function Comment({ content, deleteComment }) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        deleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
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
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Aplaudir <span> {likeCount} </span>
                    </button>
                </footer>
            </div>
        </div>
    )
}