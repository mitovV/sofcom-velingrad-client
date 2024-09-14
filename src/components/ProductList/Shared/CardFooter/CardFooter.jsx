import { Card } from "react-bootstrap"

import './CardFooter.css'

export default function CardFooter({data}){
    return(
        <Card.Footer className="card-footer">
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