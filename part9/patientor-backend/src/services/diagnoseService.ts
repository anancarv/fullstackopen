import diagnoseEntries from '../../data/diagnoses';
import { DiagnoseEntry } from '../types';

const diagnoses: Array<DiagnoseEntry> = diagnoseEntries;

const getAll = (): Array<DiagnoseEntry> => {
  return diagnoses;
};

export default {
  getAll
};
