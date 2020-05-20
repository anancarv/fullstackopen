import React from 'react';
import { Patient, Entry } from '../types';
import { Icon } from 'semantic-ui-react';

import { useParams } from 'react-router-dom';
import { useStateValue } from '../state';

import Hospital from './Hospital';
import HealthCheck from './HealthCheck';
import OccupationalHealthcare from './OccupationalHealthcare';

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
  switch (entry.type) {
    case 'Hospital':
      return <Hospital entry={entry} />;
    case 'OccupationalHealthcare':
      return <OccupationalHealthcare entry={entry} />;
    case 'HealthCheck':
      return <HealthCheck entry={entry} />;
    default:
      return assertNever(entry);
  }
};

const PatientPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [{ patients }] = useStateValue();
  const [{ diagnoses }] = useStateValue();

  const patient = Object.values(patients).find(
    (patient: Patient) => patient.id === id
  );

  let iconName: 'man' | 'woman' | 'genderless';

  if (patient) {
    switch (patient.gender) {
      case 'male':
        iconName = 'man';
        break;
      case 'female':
        iconName = 'woman';
        break;
      case 'other':
        iconName = 'genderless';
        break;
      default:
        iconName = 'woman';
    }

    return (
      <div>
        <h2>
          {patient.name} <Icon name={iconName} />{' '}
        </h2>
        <p>ssh: {patient.ssn}</p>
        <p>occupation: {patient.occupation}</p>
        <h3>entries</h3>
        {patient.entries.map((entry, i) => (
          <div key={i}>
            {Object.keys(diagnoses).length === 0 ? null : (
              <EntryDetails entry={entry} />
            )}
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default PatientPage;
