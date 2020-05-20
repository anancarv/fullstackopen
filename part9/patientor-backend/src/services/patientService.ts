import { v4 as uuidv4 } from 'uuid';
import patientEntries from '../../data/patients';
import {
  NonSensitivePatientEntry,
  PatientEntry,
  NewPatientEntry
} from '../types';

const patients: Array<NonSensitivePatientEntry> = patientEntries.map(
  ({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
  })
);

const getAll = (): Array<NonSensitivePatientEntry> => {
  return patients;
};

const getOne = (id: string): NonSensitivePatientEntry | undefined => {
  return patients.find((patient) => patient.id === id);
};

const addPatient = (entry: NewPatientEntry): PatientEntry => {
  const newPatientEntry = {
    id: uuidv4(),
    ...entry
  };
  patients.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getAll,
  getOne,
  addPatient
};
