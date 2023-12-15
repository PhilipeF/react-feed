import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from "date-fns/locale/pt-BR";

import { useState } from "react";

import styles from "./Post.module.css";

export function Post({ author, publisheAt, content }) {

    const [comments, setComments] = useState([
        'Texto muito bacana heim 👏👏'
    ])

    const [newCommentText, setNewComentText] = useState('')

    const publisheDateFormatad = format(publisheAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publisheAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText])

        setNewComentText('')
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewComentText(event.target.value)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Este campo é obrigatório');
    }

    function onDeleteComment(commentDelete) {
        const deleteComment = comments.filter(comment => {
            return comment !== commentDelete
        })
        setComments(deleteComment)
    }
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
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button
                        type="submit"
                        disabled={newCommentText.length === 0}
                    >
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commetList}>
                {comments.map(comment => {
                    return <Comment
                        key={comment}
                        content={comment}
                        deleteComment={onDeleteComment}
                    />
                })}
            </div>
        </article >
    )
}