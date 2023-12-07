import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from "date-fns/locale/pt-BR";

import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publisheAt, content }) {

    // usamos o useState toda vez que queremos q um componente monitore e comportamento de uma variável

    const [comments, setComments] = useState([
        1,
        2
    ])

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, comments.length + 1])
    }

    const publisheDateFormatad = format(publisheAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publisheAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publisheDateFormatad} dateTime={publisheAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div >
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commetList}>
                {comments.map(coment => {
                    return <Comment />

                })}

            </div>
        </article >
    )
}