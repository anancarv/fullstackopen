# First steps with typescript

Simple express applicaton for understanding the core concepts of TypeScript

## Start the application

To start an application, do the following :

```bash
# npm dependancies
$ yarn install
# Start the application
$ npm start
```

You can then access the app on : [http://localhost:3003/](http://localhost:3003/)

# Endpoints

The following enpoinds are available:
* `/bmi`: For calculating `the body mass index` based on given weight (in kilograms) and height (in centimeters). For example to get bmi for a person having height 180 and weight 72, the url is http://localhost:3003/bmi?height=180&weight=72. The response is a json of the form:

```json
{
  "weight": 72,
  "height": 180,
  "bmi": "Normal (healthy weight)"
}
```

* `/exercises`: That calculates the average time of daily exercise hours and compares it to the target amount of daily hours. It can be used by doing a HTTP POST request to `/exercises` exercises with the input in the request body:

```json
{
  "daily_exercises": [1, 0, 2, 0, 3, 0, 2.5],
  "target": 2.5
}
```

The response is a json of the form:
```json
{
    "periodLength": 7,
    "trainingDays": 4,
    "success": false,
    "rating": 1,
    "ratingDescription": "bad",
    "target": 2.5,
    "average": 1.2142857142857142
}
```