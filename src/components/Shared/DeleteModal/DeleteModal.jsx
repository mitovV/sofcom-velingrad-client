import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import './DeleteModal.css'

export default function DeleteModal({ _id, title, message, setRerender, onDeleteHandler }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const onDeleteBtnHandler = () => {
    handleClose()
    onDeleteHandler(_id)
    setRerender(true)
  }

  return (
    <>
      <Button className="delete-btn" variant="danger" onClick={handleShow}>
        <i className="bi bi-x-circle"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Затвори
          </Button>
          <Button variant="danger" onClick={onDeleteBtnHandler}>
            Изтрии
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
