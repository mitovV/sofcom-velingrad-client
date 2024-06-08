import { ListGroup, ListGroupItem, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import DeleteModal from "../DeleteModal/DeleteModal"

import './BaseListing.css'

export default function Listing({ data, name, path, message, setRerender, onDeleteHandler }) {
    return (
        <>
            <ListGroup>
                {data.length > 0 ? data.map((item, index) => (
                    <ListGroupItem key={index}>
                        {item[name]}
                        <Button
                            as={Link}
                            to={`${path}${item._id}`}
                            className="edit-btn"
                            variant="info" >
                            <i className="bi bi-pencil-fill"></i>
                        </Button>
                        <DeleteModal _id={item._id} title={item[name]} message={message} setRerender={setRerender} onDeleteHandler={onDeleteHandler} />
                    </ListGroupItem>)
                ) : <h6>Loading...</h6>}
            </ListGroup>
        </>
    )
}