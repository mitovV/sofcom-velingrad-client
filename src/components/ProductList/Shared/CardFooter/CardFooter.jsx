import { Card } from "react-bootstrap"

export default function CardFooter({data}){
    return(
        <Card.Footer>
        <small className="text-muted">
            Добавен на {new Date(data).toLocaleString('bg-BG', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            })}
        </small>
    </Card.Footer>
    )
}