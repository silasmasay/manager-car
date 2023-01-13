import { Form, Stack, Button, Modal } from "react-bootstrap";

export function ModalFormAdd({
  statusModal,
  handleChangeForm,
  actionCreateCar,
  handleStatusModal
}) {
  const defaultCloseModal = () => handleStatusModal({ add: false });

  return (
    <Modal show={statusModal} onHide={defaultCloseModal}>
      <Modal.Header>
        <Modal.Title className="text-center">
          Cadastrar novo veículo
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form
          className="container"
          onSubmit={actionCreateCar}
        >
          <Form.Group className="mb-3" controlId="automobileCreate">
            <Form.Label>Veículo</Form.Label>
            <Form.Control 
              type='text' 
              name="automobileCreate"
              placeholder='Ex: Carro, Moto, Caminhão, etc.'
              onChange={({ target: { value } }) => handleChangeForm((props) => ({
                ...props,
                automobile: value
              }))}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="markCreate">
            <Form.Label>Marca</Form.Label>
            <Form.Control 
              type='text' 
              name="markCreate"
              placeholder='Ex: Fiat, Toyota, Ford, etc.'
              onChange={({ target: { value } }) => handleChangeForm((props) => ({
                ...props,
                mark: value
              }))}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="modelCreate">
            <Form.Label>Modelo</Form.Label>
            <Form.Control 
              type='text' 
              name="modelCreate"
              placeholder='Ex: Palio, Corsa, Corolla, etc.'
              onChange={({ target: { value } }) => handleChangeForm((props) => ({
                ...props,
                model: value
              }))}
            />
          </Form.Group>
          
          <Stack 
            gap={2}
            direction="horizontal"
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
              Cadastrar
            </Button>
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  )
}