import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { MdLibraryAdd } from "react-icons/md";

import { ModalFormAdd } from "../components/ModalForm/ModalFormAdd";
import { ModalFormEdit } from "../components/ModalForm/ModalFormEdit";
import { CarsTable } from "../components/CarsTable";
import { createCar, deleteCar, getCar, getCars, updatedCar } from "../services/utils";

const INITIAL_DEFAULT_MODAL = {
	add: false,
	edit: false
}

const INITIAL_DEFAULT_FORM = {
  automobile: '',
  mark: '',
  model: ''
}

export function Dashboard() {
  const [modal, setModal] = useState(INITIAL_DEFAULT_MODAL);
  const [form, setForm] = useState(INITIAL_DEFAULT_FORM);
  const [cars, setCars] = useState({});
  const [car, setCar] = useState({});

  const location = useLocation();
  
  const handleStatusModal = (props) => setModal((prev) => ({
		...prev,
		...props
	}));

  const actionGetCar = async () => {
    if (!location.search) return;
    
    const params = new URLSearchParams(location.search);
    
    if (params.get('id').includes('/edit')) {
      const id = params.get('id').split('/')[0];
      const result = await getCar(id);
      
      setCar(...result.data);
    }
  }
  
  const actionGetCars = async () => {
    const result = await getCars();
    
    setCars(result.data);
  }

  const actionCreateCar = async (ev) => {
    ev.preventDefault();
    
    await createCar(form);
    
    handleStatusModal({ add: false });
    actionGetCars();
  }

  const actionUpdatedCar = async (ev) => {
    ev.preventDefault();

    await updatedCar(car?.id, form);

    handleStatusModal({ edit: false });
    actionGetCars();
  }

  const actionDeleteCar = async (id) => {
    await deleteCar(id);
    actionGetCars();
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { actionGetCar() }, [location]);

  useEffect(() => { actionGetCars() }, []);

  return (
    <Container>
      <Button
        as={Link}
        to={`/`}
        gap={2}
        variant="primary"
        className="my-3"
        onClick={() => handleStatusModal({ add: true })}
      >
        <MdLibraryAdd className="me-2" />Cadastrar novo veículo?
      </Button>

      {modal.add && (
        <ModalFormAdd
          statusModal={modal.add}
          handleChangeForm={setForm}
          actionCreateCar={actionCreateCar}
          handleStatusModal={handleStatusModal} 
        />
      )}

      {modal.edit && (
        <ModalFormEdit
          car={car}
          statusModal={modal.edit}
          handleChangeForm={setForm}
          actionUpdatedCar={actionUpdatedCar}
          handleStatusModal={handleStatusModal}
        />
      )}

      <CarsTable
        cars={cars}
        handleDeleteForm={actionDeleteCar}
        handleStatusModal={handleStatusModal}
      />
    </Container>
  )
}