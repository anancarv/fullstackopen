import React from 'react';
import { Icon } from 'semantic-ui-react';

import { useParams } from 'react-router-dom';
import { useStateValue } from '../state';
import { Patient } from '../types';

const PatientPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [{ patients }] = useStateValue();
  const [{ diagnoses },] = useStateValue();

  const patient = Object.values(patients).find(
    (patient: Patient) => patient.id === id
  );

  let iconName: 'man' | 'woman' | 'genderless';

  if (patient) {
    switch(patient.gender) {
      case 'male':
        iconName = 'man'
        break;
      case 'female':
        iconName = 'woman'
        break;
      case 'other':
        iconName = 'genderless'
        break;
      default:
        iconName = 'woman'
    }

    return  (
      <div>
        <h2>
          {patient.name} <Icon name={iconName} />{' '}
        </h2>
        <p>ssh: {patient.ssn}</p>
        <p>occupation: {patient.occupation}</p>
        <h3>entries</h3>
          {patient.entries.map((entry, i) =>
            <div key={i}>
              <p>{entry.date}: {entry.description} </p>
              <ul>
                { Object.keys(diagnoses).length === 0 ? (
                      null
                    ) : (
                      entry.diagnosisCodes?.map((code, i) => <li key={i}> {code}: {diagnoses[code].name} </li>))}
              </ul>
            </div>
          )}
      </div>
    );
  };

  return null;
};

export default PatientPage;
