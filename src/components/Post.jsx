import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from "date-fns/locale/pt-BR";

import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publisheAt, content }) {

    const [comments, setComments] = useState([
        'Texto muito bacana heim 👏👏'
    ])

    const [newCommentText, setNewComentText] = useState('')

    const publisheDateFormatad = format(publisheAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText])

        setNewComentText('')
    }

    function handleNewCommentChange() {
        setNewComentText(event.target.value)
    }

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
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div >
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea
                    name="content"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commetList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} />
                })}
            </div>
        </article >
    )
}