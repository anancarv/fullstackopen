import express from 'express';
import patientService from '../services/patientService';
import toNewPatientEntry from '../utils';

const patientRouter = express.Router();

patientRouter.get('/', (_req, res) => {
  res.send(patientService.getAll());
});

patientRouter.get('/:patientId', (req, res) => {
  res.send(patientService.getOne(req.params.patientId));
});

patientRouter.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewPatientEntry(req.body);
    const addedEntry = patientService.addPatient(newDiaryEntry);
    res.json(addedEntry);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

export default patientRouter;
