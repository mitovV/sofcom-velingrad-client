import { ListGroup, ListGroupItem, Button } from "react-bootstrap"


export default function Listing(data, value, path, className) {
    <ListGroup>
        {data.map((item, index) => (
            <ListGroupItem key={index}>
                {item[value]}
                <Button as={Link} to={`${path}${item._id}`} className={className} variant="info" ><i className="bi bi-pencil-fill"></i></Button>
                <DeleteModal _id={item._id} size={item.size} setRerender={setRerender} />
            </ListGroupItem>)
        )}
    </ListGroup>
}