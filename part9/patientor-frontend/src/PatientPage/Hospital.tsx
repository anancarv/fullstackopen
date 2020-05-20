import React from 'react';
import { Icon, Card } from 'semantic-ui-react';
import { HospitalEntry } from '../types';

const style = { margin: 10 };

const Hospital: React.FC<{ entry: HospitalEntry }> = ({ entry }) => (
  <div>
    <Card style={style}>
      <Card.Content>
        {entry.date} <Icon name="hospital symbol" />
      </Card.Content>
      <Card.Content description={entry.description} />
    </Card>
  </div>
);

export default Hospital;
