import React from 'react';
import { Icon } from 'semantic-ui-react';

import { useParams } from 'react-router-dom';
import { useStateValue } from '../state';
import { Patient } from '../types';

const PatientPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [{ patients }] = useStateValue();

  const patient = Object.values(patients).find(
    (patient: Patient) => patient.id === id
  );

  if (patient) {
    if (patient.gender === 'male')
      return (
        <div>
          <h2>
            {patient.name} <Icon name="man" />{' '}
          </h2>
          <p>ssh: {patient.ssn}</p>
          <p>occupation: {patient.occupation}</p>
        </div>
      );
    else if (patient.gender === 'female') {
      return (
        <div>
          <h2>
            {patient.name} <Icon name="woman" />{' '}
          </h2>
          <p>ssh: {patient.ssn}</p>
          <p>occupation: {patient.occupation}</p>
        </div>
      );
    } else {
      return (
        <div>
          <h2>
            {patient.name} <Icon name="genderless" />{' '}
          </h2>
          <p>ssh: {patient.ssn}</p>
          <p>occupation: {patient.occupation}</p>
        </div>
      );
    }
  }

  return null;
};

export default PatientPage;
