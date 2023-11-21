export function Post(props) {
    return (
        <p>
            <strong>Nome do autor é..</strong> {props.author} e o &nbsp;
            <strong>texto tem o conteudo</strong> {props.content}
        </p>
    )
}