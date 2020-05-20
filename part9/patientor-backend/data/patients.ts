import { PatientEntry, Gender } from "../src/types";
import toNewPatientEntry from "../src/utils";

const data: Array<PatientEntry> = [
    {
      id: 'd2773336-f723-11e9-8f0b-362b9e155667',
      name: 'John McClane',
      dateOfBirth: '1986-07-09',
      ssn: '090786-122X',
      gender: Gender.Male,
      occupation: 'New york city cop',
      entries: [
        {
          id: 'd811e46d-70b3-4d90-b090-4535c7cf8fb1',
          date: '2015-01-02',
          type: 'Hospital',
          specialist: 'MD House',
          diagnosisCodes: ['S62.5'],
          description:
            "Healing time appr. 2 weeks. patient doesn't remember how he got the injury.",
          discharge: {
            date: '2015-01-16',
            criteria: 'Thumb has healed.',
          },
        },
      ],
    },
    {
      id: 'd2773598-f723-11e9-8f0b-362b9e155667',
      name: 'Martin Riggs',
      dateOfBirth: '1979-01-30',
      ssn: '300179-777A',
      gender: Gender.Male,
      occupation: 'Cop',
      entries: [
        {
          id: 'fcd59fa6-c4b4-4fec-ac4d-df4fe1f85f62',
          date: '2019-08-05',
          type: 'OccupationalHealthcare',
          specialist: 'MD House',
          employerName: 'HyPD',
          diagnosisCodes: ['Z57.1', 'Z74.3', 'M51.2'],
          description:
            'Patient mistakenly found himself in a nuclear plant waste site without protection gear. Very minor radiation poisoning. ',
          sickLeave: {
            startDate: '2019-08-05',
            endDate: '2019-08-28',
          },
        },
      ],
    },
    {
      id: 'd27736ec-f723-11e9-8f0b-362b9e155667',
      name: 'Hans Gruber',
      dateOfBirth: '1970-04-25',
      ssn: '250470-555L',
      gender: Gender.Male,
      occupation: 'Technician',
      entries: [],
    },
    {
      id: 'd2773822-f723-11e9-8f0b-362b9e155667',
      name: 'Dana Scully',
      dateOfBirth: '1974-01-05',
      ssn: '050174-432N',
      gender: Gender.Female,
      occupation: 'Forensic Pathologist',
      entries: [
        {
          id: 'b4f4eca1-2aa7-4b13-9a18-4a5535c3c8da',
          date: '2019-10-20',
          specialist: 'MD House',
          type: 'HealthCheck',
          description: 'Yearly control visit. Cholesterol levels back to normal.',
          healthCheckRating: 0,
        },
        {
          id: 'fcd59fa6-c4b4-4fec-ac4d-df4fe1f85f62',
          date: '2019-09-10',
          specialist: 'MD House',
          type: 'OccupationalHealthcare',
          employerName: 'FBI',
          description: 'Prescriptions renewed.',
        },
        {
          id: '37be178f-a432-4ba4-aac2-f86810e36a15',
          date: '2018-10-05',
          specialist: 'MD House',
          type: 'HealthCheck',
          description:
            'Yearly control visit. Due to high cholesterol levels recommended to eat more vegetables.',
          healthCheckRating: 1,
        },
      ],
    },
    {
      id: 'd2773c6e-f723-11e9-8f0b-362b9e155667',
      name: 'Matti Luukkainen',
      dateOfBirth: '1971-04-09',
      ssn: '090471-8890',
      gender: Gender.Male,
      occupation: 'Digital evangelist',
      entries: [
        {
          id: '54a8746e-34c4-4cf4-bf72-bfecd039be9a',
          date: '2019-05-01',
          specialist: 'Dr Byte House',
          type: 'HealthCheck',
          description: 'Digital overdose, very bytestatic. Otherwise healthy.',
          healthCheckRating: 0,
        },
      ],
    },
  ];


const patientEntries: PatientEntry [] = data.map(obj => {
    const object = toNewPatientEntry(obj) as PatientEntry;
    object.id = obj.id;
    return object;
});


export default patientEntries;