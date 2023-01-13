import api from './api';

export const getCars = async () => await api.get('/cars');

export const getCar = async (id) => await api.get(`/cars/${id}`);

export const createCar = async (car) => await api.post('/cars', { car });

export const updatedCar = async (id, car) => await api.put(`/cars/${id}`, { car });

export const deleteCar = async (id) => await api.delete(`/cars/${id}`);