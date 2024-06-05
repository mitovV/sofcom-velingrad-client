import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router-dom'

import * as ringSizesService from '../../../services/ringSizesService'

export default function DeleteModal({ _id, size }) {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const onDeleteBtnHandler = () => {
    ringSizesService.deleteBySize(_id)
      .then(navigate('administration/ring-size'))
      .catch(err => console.error(err))
  }

  return (
    <>

      <Button className="ring-size-delete-btn" variant="danger" onClick={handleShow}>
        <i className="bi bi-x-circle"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{size}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Сигурни ли сте, че искате да изтриете този размер?</Modal.Body>
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
