const express = require("express");
const app = express();
var cors = require('cors')
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});


app.get("/", (req, res) => {
  res.render("index");
});
app.use(cors())
const Indore_Areas = [
  {
    "count": 1,
    "name": "Vijay Nagar",
    "latitude": 22.7533,
    "longitude": 75.8985,
    "safety_grade": "A",
    "crime_statistics": {
      "rape": 5,
      "murder": 2,
      "total_crimes": 10
    }
  },
  {
    "count": 2,
    "name": "Rajwada",
    "latitude": 22.7179,
    "longitude": 75.8333,
    "safety_grade": "B",
    "crime_statistics": {
      "rape": 8,
      "murder": 3,
      "total_crimes": 15
    }
  },
  {
    "count": 3,
    "name": "Palasia",
    "latitude": 22.7250,
    "longitude": 75.8794,
    "safety_grade": "A",
    "crime_statistics": {
      "rape": 4,
      "murder": 1,
      "total_crimes": 8
    }
  },
  {
    "count": 4,
    "name": "M G Road",
    "latitude": 22.7196,
    "longitude": 75.8577,
    "safety_grade": "B",
    "crime_statistics": {
      "rape": 6,
      "murder": 2,
      "total_crimes": 12
    }
  },
  {
    "count": 5,
    "name": "Bhawarkuan",
    "latitude": 22.6900,
    "longitude": 75.8651,
    "safety_grade": "C",
    "crime_statistics": {
      "rape": 10,
      "murder": 4,
      "total_crimes": 20
    }
  },
  {
    "count": 6,
    "name": "Sudama Nagar",
    "latitude": 22.6833,
    "longitude": 75.8500,
    "safety_grade": "B",
    "crime_statistics": {
      "rape": 7,
      "murder": 2,
      "total_crimes": 14
    }
  },
  {
    "count": 7,
    "name": "Tilak Nagar",
    "latitude": 22.7353,
    "longitude": 75.9035,
    "safety_grade": "A",
    "crime_statistics": {
      "rape": 3,
      "murder": 1,
      "total_crimes": 5
    }
  },
  {
    "count": 8,
    "name": "Sapna Sangeeta",
    "latitude": 22.7215,
    "longitude": 75.8507,
    "safety_grade": "B",
    "crime_statistics": {
      "rape": 6,
      "murder": 2,
      "total_crimes": 11
    }
  },
  {
    "count": 9,
    "name": "LIG Colony",
    "latitude": 22.7300,
    "longitude": 75.8800,
    "safety_grade": "A",
    "crime_statistics": {
      "rape": 2,
      "murder": 1,
      "total_crimes": 4
    }
  },
  {
    "count": 10,
    "name": "Scheme No. 54",
    "latitude": 22.7562,
    "longitude": 75.9005,
    "safety_grade": "A",
    "crime_statistics": {
      "rape": 3,
      "murder": 1,
      "total_crimes": 6
    }
  },
  {
    "count": 11,
    "name": "Nehru Park",
    "latitude": 22.7240,
    "longitude": 75.8550,
    "safety_grade": "B",
    "crime_statistics": {
      "rape": 5,
      "murder": 2,
      "total_crimes": 9
    }
  },
  {
    "count": 12,
    "name": "Chhota Bangarda",
    "latitude": 22.6880,
    "longitude": 75.8700,
    "safety_grade": "C",
    "crime_statistics": {
      "rape": 8,
      "murder": 3,
      "total_crimes": 15
    }
  },
  {
    "count": 13,
    "name": "Sukhliya",
    "latitude": 22.7060,
    "longitude": 75.8830,
    "safety_grade": "B",
    "crime_statistics": {
      "rape": 6,
      "murder": 2,
      "total_crimes": 10
    }
  },
  {
    "count": 14,
    "name": "Bhanwarkuan",
    "latitude": 22.6885,
    "longitude": 75.8655,
    "safety_grade": "C",
    "crime_statistics": {
      "rape": 9,
      "murder": 4,
      "total_crimes": 18
    }
  },
  {
    "count": 15,
    "name": "Rau",
    "latitude": 22.7065,
    "longitude": 75.8000,
    "safety_grade": "A",
    "crime_statistics": {
      "rape": 2,
      "murder": 1,
      "total_crimes": 3
    }
  },
  {
    "count": 16,
    "name": "Kanchan Bagh",
    "latitude": 22.7350,
    "longitude": 75.8700,
    "safety_grade": "B",
    "crime_statistics": {
      "rape": 4,
      "murder": 1,
      "total_crimes": 7
    }
  },
  {
    "count": 17,
    "name": "Saraswati Nagar",
    "latitude": 22.7400,
    "longitude": 75.8500,
    "safety_grade": "A",
    "crime_statistics": {
      "rape": 3,
      "murder": 1,
      "total_crimes": 5
    }
  },
  {
    "count": 18,
    "name": "Vijay Nagar Extension",
    "latitude": 22.7580,
    "longitude": 75.8950,
    "safety_grade": "A",
    "crime_statistics": {
      "rape": 2,
      "murder": 1,
      "total_crimes": 3
    }
  },
  {
    "count": 19,
    "name": "Bengali Square",
    "latitude": 22.7245,
    "longitude": 75.8555,
    "safety_grade": "B",
    "crime_statistics": {
      "rape": 5,
      "murder": 2,
      "total_crimes": 9
    }
  },
  {
    "count": 20,
    "name": "Sukhliya Extension",
    "latitude": 22.7100,
    "longitude": 75.8900,
    "safety_grade": "C",
    "crime_statistics": {
      "rape": 10,
      "murder": 4,
      "total_crimes": 20
    }
  },
  {
    "count": 21,
    "name": "Kesar Bagh",
    "latitude": 22.7405,
    "longitude": 75.8600,
    "safety_grade": "A",
    "crime_statistics": {
      "rape": 2,
      "murder": 1,
      "total_crimes": 3
    }
  },
  {
    "count": 22,
    "name": "Mahalaxmi Nagar",
    "latitude": 22.6950,
    "longitude": 75.8450,
    "safety_grade": "B",
    "crime_statistics": {
      "rape": 5,
      "murder": 2,
      "total_crimes": 9
    }
  },
  {
    "count": 23,
    "name": "Saraswati Vihar",
    "latitude": 22.7305,
    "longitude": 75.8955,
    "safety_grade": "A",
    "crime_statistics": {
      "rape": 3,
      "murder": 1,
      "total_crimes": 5
    }
  },
  {
    "count": 24,
    "name": "Vijay Nagar Main",
    "latitude": 22.7540,
    "longitude": 75.9000,
    "safety_grade": "B",
    "crime_statistics": {
      "rape": 4,
      "murder": 1,
      "total_crimes": 7
    }
  },
  {
    "count": 25,
    "name": "Shivaji Nagar",
    "latitude": 22.7105,
    "longitude": 75.8705,
    "safety_grade": "C",
    "crime_statistics": {
      "rape": 10,
      "murder": 4,
      "total_crimes": 20
    }
  },
  {
    "count": 26,
    "name": "Nanda Nagar",
    "latitude": 22.6880,
    "longitude": 75.8550,
    "safety_grade": "B",
    "crime_statistics": {
      "rape": 5,
      "murder": 2,
      "total_crimes": 9
    }
  },
  {
    "count": 27,
    "name": "Nehru Nagar",
    "latitude": 22.7255,
    "longitude": 75.8605,
    "safety_grade": "A",
    "crime_statistics": {
      "rape": 2,
      "murder": 1,
      "total_crimes": 3
    }
  },
  {
    "count": 28,
    "name": "Narmada Road",
    "latitude": 22.7400,
    "longitude": 75.8800,
    "safety_grade": "B",
    "crime_statistics": {
      "rape": 5,
      "murder": 2,
      "total_crimes": 9
    }
  },
  {
    "count": 29,
    "name": "Nehru Garden",
    "latitude": 22.7150,
    "longitude": 75.8450,
    "safety_grade": "A",
    "crime_statistics": {
      "rape": 3,
      "murder": 1,
      "total_crimes": 5
    }
  },
  {
    "count": 30,
    "name": "Saraswati Nagar Extension",
    "latitude": 22.7355,
    "longitude": 75.8555,
    "safety_grade": "C",
    "crime_statistics": {
      "rape": 10,
      "murder": 4,
      "total_crimes": 20
    }
  },
  {
    "count": 31,
    "name": "Vijay Nagar South",
    "latitude": 22.7500,
    "longitude": 75.8950,
    "safety_grade": "A",
    "crime_statistics": {
      "rape": 2,
      "murder": 1,
      "total_crimes": 3
    }
  },
  {
    "count": 32,
    "name": "Rani Sati Nagar",
    "latitude": 22.6800,
    "longitude": 75.8600,
    "safety_grade": "B",
    "crime_statistics": {
      "rape": 5,
      "murder": 2,
      "total_crimes": 9
    }
  },
  {
    "count": 33,
    "name": "Sukhliya Main",
    "latitude": 22.7100,
    "longitude": 75.8850,
    "safety_grade": "A",
    "crime_statistics": {
      "rape": 3,
      "murder": 1,
      "total_crimes": 5
    }
  },
  {
    "count": 34,
    "name": "Bhanwarkuan Extension",
    "latitude": 22.6905,
    "longitude": 75.8705,
    "safety_grade": "C",
    "crime_statistics": {
      "rape": 10,
      "murder": 4,
      "total_crimes": 20
    }
  },
  {
    "count": 35,
    "name": "Shivaji Park",
    "latitude": 22.7200,
    "longitude": 75.8555,
    "safety_grade": "B",
    "crime_statistics": {
      "rape": 4,
      "murder": 1,
      "total_crimes": 5
    }
  },
  {
    "count": 36,
    "name": "Mangal Nagar",
    "latitude": 22.7400,
    "longitude": 75.8450,
    "safety_grade": "A",
    "crime_statistics": {
      "rape": 2,
      "murder": 1,
      "total_crimes": 3
    }
  },
  {
    "count": 37,
    "name": "Saraswati Nagar South",
    "latitude": 22.7300,
    "longitude": 75.8650,
    "safety_grade": "B",
    "crime_statistics": {
      "rape": 5,
      "murder": 2,
      "total_crimes": 7
    }
  },
  {
    "count": 38,
    "name": "Kanchan Nagar",
    "latitude": 22.6950,
    "longitude": 75.8555,
    "safety_grade": "C",
    "crime_statistics": {
      "rape": 8,
      "murder": 3,
      "total_crimes": 11
    }
  },
  {
    "count": 39,
    "name": "Rau Extension",
    "latitude": 22.7105,
    "longitude": 75.8050,
    "safety_grade": "A",
    "crime_statistics": {
      "rape": 1,
      "murder": 0,
      "total_crimes": 1
    }
  },
  {
    "count": 40,
    "name": "Sukhliya Bypass",
    "latitude": 22.7150,
    "longitude": 75.8905,
    "safety_grade": "B",
    "crime_statistics": {
      "rape": 4,
      "murder": 1,
      "total_crimes": 5
    }
  },
  {
    "count": 41,
    "name": "Mahalaxmi Extension",
    "latitude": 22.6955,
    "longitude": 75.8400,
    "safety_grade": "C",
    "crime_statistics": {
      "rape": 7,
      "murder": 3,
      "total_crimes": 10
    }
  },
  {
    "count": 42,
    "name": "Narmada Nagar",
    "latitude": 22.7300,
    "longitude": 75.8700,
    "safety_grade": "A",
    "crime_statistics": {
      "rape": 2,
      "murder": 1,
      "total_crimes": 3
    }
  },
  {
    "count": 43,
    "name": "Vijay Nagar West",
    "latitude": 22.7550,
    "longitude": 75.8955,
    "safety_grade": "B",
    "crime_statistics": {
      "rape": 3,
      "murder": 1,
      "total_crimes": 4
    }
  },
  {
    "count": 44,
    "name": "Bhawarkuan Main",
    "latitude": 22.6880,
    "longitude": 75.8650,
    "safety_grade": "C",
    "crime_statistics": {
      "rape": 9,
      "murder": 4,
      "total_crimes": 13
    }
  },
  {
    "count": 45,
    "name": "Nehru Nagar Extension",
    "latitude": 22.7250,
    "longitude": 75.8655,
    "safety_grade": "A",
    "crime_statistics": {
      "rape": 1,
      "murder": 0,
      "total_crimes": 1
    }
  },
  {
    "count": 46,
    "name": "Saraswati Vihar Extension",
    "latitude": 22.7350,
    "longitude": 75.8950,
    "safety_grade": "B",
    "crime_statistics": {
      "rape": 4,
      "murder": 1,
      "total_crimes": 5
    }
  },
  {
    "count": 47,
    "name ": "Kesar Bagh Extension",
    "latitude": 22.7400,
    "longitude": 75.8550,
    "safety_grade": "A",
    "crime_statistics": {
      "rape": 2,
      "murder": 1,
      "total_crimes": 3
    }
  },
  {
    "count": 48,
    "name": "Shivaji Nagar Extension",
    "latitude": 22.7100,
    "longitude": 75.8750,
    "safety_grade": "C",
    "crime_statistics": {
      "rape": 6,
      "murder": 2,
      "total_crimes": 8
    }
  },
  {
      "count": 49,
      "name": "New Palasia",
      "latitude": 22.7255,
      "longitude": 75.8705,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 3,
          "murder": 1,
          "total_crimes": 4
      }
  },
  {
      "count": 50,
      "name": "Vijay Nagar North",
      "latitude": 22.7600,
      "longitude": 75.9000,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 4,
          "murder": 2,
          "total_crimes": 6
      }
  },

  {
      "count": 49,
      "name": "New Palasia",
      "latitude": 22.7255,
      "longitude": 75.8705,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 3,
          "murder": 1,
          "total_crimes": 4
      }
  },
  {
      "count": 50,
      "name": "Vijay Nagar North",
      "latitude": 22.7600,
      "longitude": 75.9000,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 4,
          "murder": 2,
          "total_crimes": 6
      }
  }
]


    app.get("/indore", (req, res) => {
        res.json(Indore_Areas);
      
    });