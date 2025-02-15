const express = require("express");
const app = express();
var cors = require('cors')

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
app.use(cors())
const Indore_Areas= [
        {
          "count": 1,
          "name": "Vijay Nagar",
          "latitude": 22.7533,
          "longitude": 75.8985,
          "safety_grade": "A"
        },
        {
          "count": 2,
          "name": "Rajwada",
          "latitude": 22.7179,
          "longitude": 75.8333,
          "safety_grade": "B"
        },
        {
          "count": 3,
          "name": "Palasia",
          "latitude": 22.7250,
          "longitude": 75.8794,
          "safety_grade": "A"
        },
        {
          "count": 4,
          "name": "M G Road",
          "latitude": 22.7196,
          "longitude": 75.8577,
          "safety_grade": "B"
        },
        {
          "count": 5,
          "name": "Bhawarkuan",
          "latitude": 22.6900,
          "longitude": 75.8651,
          "safety_grade": "C"
        },
        {
          "count": 6,
          "name": "Sudama Nagar",
          "latitude": 22.6833,
          "longitude": 75.8500,
          "safety_grade": "B"
        },
        {
          "count": 7,
          "name": "Tilak Nagar",
          "latitude": 22.7353,
          "longitude": 75.9035,
          "safety_grade": "A"
        },
        {
          "count": 8,
          "name": "Sapna Sangeeta",
          "latitude": 22.7215,
          "longitude": 75.8507,
          "safety_grade": "B"
        },
        {
          "count": 9,
          "name": "LIG Colony",
          "latitude": 22.7300,
          "longitude": 75.8800,
          "safety_grade": "A"
        },
        {
          "count": 10,
          "name": "Scheme No. 54",
          "latitude": 22.7562,
          "longitude": 75.9005,
          "safety_grade": "A"
        },
        {
          "count": 11,
          "name": "Nehru Park",
          "latitude": 22.7240,
          "longitude": 75.8550,
          "safety_grade": "B"
        },
        {
          "count": 12,
          "name": "Chhota Bangarda",
          "latitude": 22.6880,
          "longitude": 75.8700,
          "safety_grade": "C"
        },
        {
          "count": 13,
          "name": "Sukhliya",
          "latitude": 22.7060,
          "longitude": 75.8830,
          "safety_grade": "B"
        },
        {
          "count": 14,
          "name": "Bhanwarkuan",
          "latitude": 22.6885,
          "longitude": 75.8655,
          "safety_grade": "C"
        },
        {
          "count": 15,
          "name": "Rau",
          "latitude": 22.7065,
          "longitude": 75.8000,
          "safety_grade": "A"
        },
        {
          "count": 16,
          "name": "Kanchan Bagh",
          "latitude": 22.7350,
          "longitude": 75.8700,
          "safety_grade": "B"
        },
        {
          "count": 17,
          "name": "Saraswati Nagar",
          "latitude": 22.7400,
          "longitude": 75.8500,
          "safety_grade": "A"
        },
        {
          "count": 18,
          "name": "Vijay Nagar Extension",
          "latitude": 22.7580,
          "longitude": 75.8950,
          "safety_grade": "A"
        },
        {
          "count": 19,
          "name": "Bengali Square",
          "latitude": 22.7245,
          "longitude": 75.8555,
          "safety_grade": "B"
        },
        {
          "count": 20,
          "name": "Sukhliya Extension",
          "latitude": 22.7100,
          "longitude": 75.8900,
          "safety_grade": "C"
        },
        {
          "count": 21,
          "name": "Kesar Bagh",
          "latitude": 22.7405,
          "longitude": 75.8600,
          "safety_grade": "A"
        },
        {
          "count": 22,
          "name": "Mahalaxmi Nagar",
          "latitude": 22.6950,
          "longitude": 75.8450,
          "safety_grade": "B"
        },
        {
          "count": 23,
          "name": "Saraswati Vihar",
          "latitude": 22.7305,
          "longitude": 75.8955,
          "safety_grade": "A"
        },
        {
          "count": 24,
          "name": "Vijay Nagar Main",
          "latitude": 22.7540,
          "longitude": 75.9000,
          "safety_grade": "B"
        },
        {
          "count": 25,
          "name": "Shivaji Nagar",
          "latitude": 22.7105,
          "longitude": 75.8705,
          "safety_grade": "C"
        },
        {
          "count": 26,
          "name": "Nanda Nagar",
          "latitude": 22.6880,
          "longitude": 75.8550,
          "safety_grade": "B"
        },
        {
          "count": 27,
          "name": "Nehru Nagar",
          "latitude": 22.7255,
          "longitude": 75.8605,
          "safety_grade": "A"
        },
        {
          "count": 28,
          "name": "Narmada Road",
          "latitude": 22.7400,
          "longitude": 75.8800,
          "safety_grade": "B"
        },
        {
          "count": 29,
          "name": "Nehru Garden",
          "latitude": 22.7150,
          "longitude": 75.8450,
          "safety_grade": "A"
        },
        {
          "count": 30,
          "name": "Saraswati Nagar Extension",
          "latitude": 22.7355,
          "longitude": 75.8555,
          "safety_grade": "C"
        },
        {
          "count": 31,
          "name": "Vijay Nagar South",
          "latitude": 22.7500,
          "longitude": 75.8950,
          "safety_grade": "A"
        },
        {
          "count": 32,
          "name": "Rani Sati Nagar",
          "latitude": 22.6800,
          "longitude": 75.8600,
          "safety_grade": "B"
        },
        {
          "count": 33,
          "name": "Sukhliya Main",
          "latitude": 22.7100,
          "longitude": 75.8850,
          "safety_grade": "A"
        },
        {
          "count": 34,
          "name": "Bhanwarkuan Extension",
          "latitude": 22.6905,
          "longitude": 75.8705,
          "safety_grade": "C"
        },
        {
          "count": 35,
          "name": "Shivaji Park",
          "latitude": 22.7200,
          "longitude": 75.8555,
          "safety_grade": "B"
        },
        {
          "count": 36,
          "name": "Mangal Nagar",
          "latitude": 22.7400,
          "longitude": 75.8450,
          "safety_grade": "A"
        },
        {
          "count": 37,
          "name": "Saraswati Nagar South",
          "latitude": 22.7300,
          "longitude": 75.8650,
          "safety_grade": "B"
        },
        {
          "count": 38,
          "name": "Kanchan Nagar",
          "latitude": 22.6950,
          "longitude": 75.8555,
          "safety_grade": "C"
        },
        {
          "count": 39,
          "name": "Rau Extension",
          "latitude": 22.7105,
          "longitude": 75.8050,
          "safety_grade": "A"
        },
        {
          "count": 40,
          "name": "Sukhliya Bypass",
          "latitude": 22.7150,
          "longitude": 75.8905,
          "safety_grade": "B"
        },
        {
          "count": 41,
          "name": "Mahalaxmi Extension",
          "latitude": 22.6955,
          "longitude": 75.8400,
          "safety_grade": "C"
        },
        {
          "count": 42,
          "name": "Narmada Nagar",
          "latitude": 22.7300,
          "longitude": 75.8700,
          "safety_grade": "A"
        },
        {
          "count": 43,
          "name": "Vijay Nagar West",
          "latitude": 22.7550,
          "longitude": 75.8955,
          "safety_grade": "B"
        },
        {
          "count": 44,
          "name": "Bhawarkuan Main",
          "latitude": 22.6880,
          "longitude": 75.8650,
          "safety_grade": "C"
        },
        {
          "count": 45,
          "name": "Nehru Nagar Extension",
          "latitude": 22.7250,
          "longitude": 75.8655,
          "safety_grade": "A"
        },
        {
          "count": 46,
          "name": "Saraswati Vihar Extension",
          "latitude": 22.7350,
          "longitude": 75.8950,
          "safety_grade": "B"
        },
        {
          "count": 47,
          "name": "Kesar Bagh Extension",
          "latitude": 22.7400,
          "longitude": 75.8550,
          "safety_grade": "A"
        },
        {
          "count": 48,
          "name": "Shivaji Nagar Extension",
          "latitude": 22.7100,
          "longitude": 75.8750,
          "safety_grade": "C"
        }
    ]


    app.get("/indore", (req, res) => {
        res.json(Indore_Areas);
      
    });