import { useEffect, useState } from "react";
import { Form, Stack, Button, Modal } from "react-bootstrap";

export function ModalFormEdit({
  car,
  statusModal,
  handleChangeForm,
  actionUpdatedCar,
  handleStatusModal
}) {
  const [input, setInput] = useState({});
  
  const defaultCloseModal = () => handleStatusModal({ edit: false });

  useEffect(() => { setInput(car) }, [car]);

  useEffect(() => { handleChangeForm(input) }, [handleChangeForm, input]);

  return (
    <Modal show={statusModal} onHide={defaultCloseModal}>
      <Modal.Header>
        <Modal.Title className="text-center">
          Atualizar veículo
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form
          className="container"
          onSubmit={actionUpdatedCar}
        >
          <Form.Group className="mb-3" controlId="automobileEdit">
            <Form.Label>Veículo</Form.Label>
            <Form.Control 
              type='text' 
              name="automobileEdit"
              value={input?.automobile}
              placeholder='Ex: Carro, Moto, Caminhão, etc.'
              onChange={({ target: { value } }) => setInput((props) => ({
                ...props,
                automobile: value
              }))}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="markEdit">
            <Form.Label>Marca</Form.Label>
            <Form.Control 
              type='text' 
              name="markEdit"
              value={input?.mark}
              placeholder='Ex: Fiat, Toyota, Ford, etc.'
              onChange={({ target: { value } }) => setInput((props) => ({
                ...props,
                mark: value
              }))}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="modelEdit">
            <Form.Label>Modelo</Form.Label>
            <Form.Control 
              type='text' 
              name="modelEdit"
              value={input?.model}
              placeholder='Ex: Palio, Corsa, Corolla, etc.'
              onChange={({ target: { value } }) => setInput((props) => ({
                ...props,
                model: value
              }))}
            />
          </Form.Group>
          
          <Stack 
            direction="horizontal" 
            gap={2} 
            className="justify-content-end"
          >
            <Button 
              variant="outline-secondary"
              onClick={defaultCloseModal}
            >
              Fechar
            </Button>
            <Button 
              variant="success" 
              type="submit"
            >
              Atualizar
            </Button>
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  )
}