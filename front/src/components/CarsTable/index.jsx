import { Button, Card, OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdEditNote, MdOutlineDeleteSweep } from "react-icons/md";

import styles from './CarsTable.module.scss';

const TABLE_HEADER = ["Automóvel", "Marca", "Modelo", "Ações"];

export function CarsTable({
  cars,
  handleDeleteForm,
  handleStatusModal
}) {
  return (
    <Card className={styles.cars}>
      <Card.Header>
        <h3 className="mb-0">Registros - lista de veículos</h3>
      </Card.Header>
      <Card.Body>
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              {TABLE_HEADER.map((prop, key) => (
                <th key={key}>{prop}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cars?.length ? cars.map((car) => (
              <tr key={car.id}>
                <td>{car.automobile}</td>
                <td>{car.mark}</td>
                <td>{car.model}</td>
                <td>
                  <OverlayTrigger 
                  placement="top" 
                  overlay={
                    <Tooltip id="edit">Editar</Tooltip>
                  }>
                    <Button
                      as={Link}
                      variant="primary" 
                      to={`/?id=${car.id}/edit`}
                      onClick={() => handleStatusModal({ edit: true })}
                    >
                      <MdEditNote />
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger 
                  placement="top" 
                  overlay={
                    <Tooltip id="delete">Excluir</Tooltip>
                  }>
                    <Button
                      as={Link}
                      variant="danger" 
                      to={`/?id=${car.id}/delete`}
                      onClick={() => handleDeleteForm(car.id)}
                    >
                      <MdOutlineDeleteSweep />
                    </Button>
                  </OverlayTrigger>
                </td>
              </tr>
            )) : (
              <tr>Nenhum registo encontrado...</tr>
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}