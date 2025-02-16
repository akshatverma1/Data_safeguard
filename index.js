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






































const Bhopal_Areas = [
  {
      "count": 1,
      "name": "Bhopal City Center",
      "latitude": 23.2599,
      "longitude": 77.4126,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 4,
          "murder": 1,
          "total_crimes": 8
      }
  },
  {
      "count": 2,
      "name": "Hoshangabad Road",
      "latitude": 23.2275,
      "longitude": 77.4370,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 6,
          "murder": 2,
          "total_crimes": 12
      }
  },
  {
      "count": 3,
      "name": "Bairagarh",
      "latitude": 23.2270,
      "longitude": 77.3440,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 8,
          "murder": 3,
          "total_crimes": 15
      }
  },
  {
      "count": 4,
      "name": "Kolar Road",
      "latitude": 23.2275,
      "longitude": 77.4010,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 5,
          "murder": 1,
          "total_crimes": 9
      }
  },
  {
      "count": 5,
      "name": "Shahpura",
      "latitude": 23.2390,
      "longitude": 77.4110,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 2,
          "murder": 0,
          "total_crimes": 2
      }
  },
  {
      "count": 6,
      "name": "Chhola Road",
      "latitude": 23.2330,
      "longitude": 77.4070,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 3,
          "murder": 1,
          "total_crimes": 5
      }
  },
  {
      "count": 7,
      "name": "Bhopal Lake",
      "latitude": 23.2275,
      "longitude": 77.4375,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 1,
          "murder": 0,
          "total_crimes": 1
      }
  },
  {
      "count": 8,
      "name": "Old Bhopal",
      "latitude": 23.2580,
      "longitude": 77.4015,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 7,
          "murder": 2,
          "total_crimes": 14
      }
  },
  {
      "count": 9,
      "name": "New Bhopal",
      "latitude": 23.2590,
      "longitude": 77.4100,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 4,
          "murder": 1,
          "total_crimes": 6
      }
  },
  {
      "count": 10,
      "name": "Bhopal Airport Area",
      "latitude": 23.2395,
      "longitude": 77.4420,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 2,
          "murder": 0,
          "total_crimes": 2
      }
  },
  {
      "count": 11,
      "name": "Bhopal Railway Station",
      "latitude": 23.2585,
      "longitude": 77.4330,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 5,
          "murder": 1,
          "total_crimes": 10
      }
  },
  {
      "count": 12,
      "name": "Saket Nagar",
      "latitude": 23.2270,
      "longitude": 77.4075,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 2,
          "murder": 0,
          "total_crimes": 2
      }
  },
  {
      "count": 13,
      "name": "Bhopal Smart City",
      "latitude": 23.2590,
      "longitude": 77.4120,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 1,
          "murder": 0,
          "total_crimes": 1
      }
  },
  {
      "count": 14,
      "name": "Piplani",
      "latitude": 23.2275,
      "longitude": 77.4015,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 3,
          "murder": 1,
          "total_crimes": 5
      }
  },
  {
      "count": 15,
      "name": "Kotra Sultanabad",
      "latitude": 23.2585,
      "longitude": 77.4115,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 6,
          "murder": 2,
          "total_crimes": 11
      }
  },
  {
      "count": 16,
      "name": "Bhopal Sector 1",
      "latitude": 23.2390,
      "longitude": 77.4200,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 1,
          "murder": 0,
          "total_crimes": 1
      }
  },
  {
      "count": 17,
      "name": "Bhopal Sector 2",
      "latitude": 23.2400,
      "longitude": 77.4300,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 4,
          "murder": 1,
          "total_crimes": 7
      }
  },
  {
      "count": 18,
      "name": "Bhopal Sector 3",
      "latitude": 23.2410,
      "longitude": 77.4400,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 5,
          "murder": 2,
          "total_crimes": 9
      }
  },
  {
      "count": 19,
      "name": "Bhopal Sector 4",
      "latitude": 23.2420,
      "longitude": 77.4500,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 3,
          "murder": 1,
          "total_crimes": 4
      }
  },
  {
      "count": 20,
      "name": "Bhopal Sector 5",
      "latitude": 23.2430,
      "longitude": 77.4600,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 2,
          "murder": 0,
          "total_crimes": 2
      }
  },
  {
      "count": 21,
      "name": "Bhopal Sector 6",
      "latitude": 23.2440,
      "longitude": 77.4700,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 4,
          "murder": 1,
          "total_crimes": 5
      }
  },
  {
      "count": 22,
      "name": "Bhopal Sector 7",
      "latitude": 23.2450,
      "longitude": 77.4800,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 6,
          "murder": 2,
          "total_crimes": 8
      }
  },
  {
      "count": 23,
      "name": "Bhopal Sector 8",
      "latitude": 23.2460,
      "longitude": 77.4900,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 1,
          "murder": 0,
          "total_crimes": 1
      }
  },
  {
      "count": 24,
      "name": "Bhopal Sector 9",
      "latitude": 23.2470,
      "longitude": 77.5000,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 3,
          "murder": 1,
          "total_crimes": 4
      }
  },
  {
      "count": 25,
      "name": "Bhopal Sector 10",
      "latitude": 23.2480,
      "longitude": 77.5100,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 5,
          "murder": 2,
          "total_crimes": 7
      }
  },
  {
      "count": 26,
      "name": "Bhopal Sector 11",
      "latitude": 23.2490,
      "longitude": 77.5200,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 2,
          "murder": 0,
          "total_crimes": 2
      }
  },
  {
      "count": 27,
      "name": "Bhopal Sector 12",
      "latitude": 23.2500,
      "longitude": 77.5300,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 4,
          "murder": 1,
          "total_crimes": 5
      }
  },
  {
      "count": 28,
      "name": "Bhopal Sector 13",
      "latitude": 23.2510,
      "longitude": 77.5400,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 6,
          "murder": 2,
          "total_crimes": 8
      }
  },
  {
      "count": 29,
      "name": "Bhopal Sector 14",
      "latitude": 23.2520,
      "longitude": 77.5500,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 1,
          "murder": 0,
          "total_crimes": 1
      }
  },
  {
      "count": 30,
      "name": "Bhopal Sector 15",
      "latitude": 23.2530,
      "longitude": 77.5600,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 3,
          "murder": 1,
          "total_crimes": 4
      }
  },
  {
      "count": 31,
      "name": "Bhopal Sector 16",
      "latitude": 23.2540,
      "longitude": 77.5700,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 5,
          "murder": 2,
          "total_crimes": 7
      }
  },
  {
      "count": 32,
      "name": "Bhopal Sector 17",
      "latitude": 23.2550,
      "longitude": 77.5800,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 2,
          "murder": 0,
          "total_crimes": 2
      }
  },
  {
      "count": 33,
      "name": "Bhopal Sector 18",
      "latitude": 23.2560,
      "longitude": 77.5900,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 4,
          "murder": 1,
          "total_crimes": 5
      }
  },
  {
      "count": 34,
      "name": "Bhopal Sector 19",
      "latitude": 23.257 ,
      "longitude": 77.6000,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 6,
          "murder": 2,
          "total_crimes": 8
      }
  },
  {
      "count": 35,
      "name": "Bhopal Sector 20",
      "latitude": 23.2580,
      "longitude": 77.6100,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 1,
          "murder": 0,
          "total_crimes": 1
      }
  },
  {
      "count": 36,
      "name": "Bhopal Sector 21",
      "latitude": 23.2590,
      "longitude": 77.6200,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 3,
          "murder": 1,
          "total_crimes": 4
      }
  },
  {
      "count": 37,
      "name": "Bhopal Sector 22",
      "latitude": 23.2600,
      "longitude": 77.6300,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 5,
          "murder": 2,
          "total_crimes": 7
      }
  },
  {
      "count": 38,
      "name": "Bhopal Sector 23",
      "latitude": 23.2610,
      "longitude": 77.6400,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 2,
          "murder": 0,
          "total_crimes": 2
      }
  },
  {
      "count": 39,
      "name": "Bhopal Sector 24",
      "latitude": 23.2620,
      "longitude": 77.6500,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 4,
          "murder": 1,
          "total_crimes": 5
      }
  },
  {
      "count": 40,
      "name": "Bhopal Sector 25",
      "latitude": 23.2630,
      "longitude": 77.6600,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 6,
          "murder": 2,
          "total_crimes": 8
      }
  },
  {
      "count": 41,
      "name": "Bhopal Sector 26",
      "latitude": 23.2640,
      "longitude": 77.6700,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 1,
          "murder": 0,
          "total_crimes": 1
      }
  },
  {
      "count": 42,
      "name": "Bhopal Sector 27",
      "latitude": 23.2650,
      "longitude": 77.6800,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 3,
          "murder": 1,
          "total_crimes": 4
      }
  },
  {
      "count": 43,
      "name": "Bhopal Sector 28",
      "latitude": 23.2660,
      "longitude": 77.6900,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 5,
          "murder": 2,
          "total_crimes": 7
      }
  },
  {
      "count": 44,
      "name": "Bhopal Sector 29",
      "latitude": 23.2670,
      "longitude": 77.7000,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 2,
          "murder": 0,
          "total_crimes": 2
      }
  },
  {
      "count": 45,
      "name": "Bhopal Sector 30",
      "latitude": 23.2680,
      "longitude": 77.7100,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 4,
          "murder": 1,
          "total_crimes": 5
      }
  },
  {
      "count": 46,
      "name": "Bhopal Sector 31",
      "latitude": 23.2690,
      "longitude": 77.7200,
      "safety _grade": "C",
      "crime_statistics": {
          "rape": 6,
          "murder": 2,
          "total_crimes": 8
      }
  },
  {
      "count": 47,
      "name": "Bhopal Sector 32",
      "latitude": 23.2700,
      "longitude": 77.7300,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 1,
          "murder": 0,
          "total_crimes": 1
      }
  },
  {
      "count": 48,
      "name": "Bhopal Sector 33",
      "latitude": 23.2710,
      "longitude": 77.7400,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 3,
          "murder": 1,
          "total_crimes": 4
      }
  },
  {
      "count": 49,
      "name": "Bhopal Sector 34",
      "latitude": 23.2720,
      "longitude": 77.7500,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 5,
          "murder": 2,
          "total_crimes": 7
      }
  },
  {
      "count": 50,
      "name": "Bhopal Sector 35",
      "latitude": 23.2730,
      "longitude": 77.7600,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 2,
          "murder": 0,
          "total_crimes": 2
      }
  }
,
  {
      "count": 51,
      "name": "Bhopal Sector 36",
      "latitude": 23.2740,
      "longitude": 77.7700,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 4,
          "murder": 1,
          "total_crimes": 5
      }
  },
  {
      "count": 52,
      "name": "Bhopal Sector 37",
      "latitude": 23.2750,
      "longitude": 77.7800,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 6,
          "murder": 2,
          "total_crimes": 8
      }
  },
  {
      "count": 53,
      "name": "Bhopal Sector 38",
      "latitude": 23.2760,
      "longitude": 77.7900,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 1,
          "murder": 0,
          "total_crimes": 1
      }
  },
  {
      "count": 54,
      "name": "Bhopal Sector 39",
      "latitude": 23.2770,
      "longitude": 77.8000,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 3,
          "murder": 1,
          "total_crimes": 4
      }
  },
  {
      "count": 55,
      "name": "Bhopal Sector 40",
      "latitude": 23.2780,
      "longitude": 77.8100,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 5,
          "murder": 2,
          "total_crimes": 7
      }
  },
  {
      "count": 56,
      "name": "Bhopal Sector 41",
      "latitude": 23.2790,
      "longitude": 77.8200,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 2,
          "murder": 0,
          "total_crimes": 2
      }
  },
  {
      "count": 57,
      "name": "Bhopal Sector 42",
      "latitude": 23.2800,
      "longitude": 77.8300,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 4,
          "murder": 1,
          "total_crimes": 5
      }
  },
  {
      "count": 58,
      "name": "Bhopal Sector 43",
      "latitude": 23.2810,
      "longitude": 77.8400,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 6,
          "murder": 2,
          "total_crimes": 8
      }
  },
  {
      "count": 59,
      "name": "Bhopal Sector 44",
      "latitude": 23.2820,
      "longitude": 77.8500,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 1,
          "murder": 0,
          "total_crimes": 1
      }
  },
  {
      "count": 60,
      "name": "Bhopal Sector 45",
      "latitude": 23.2830,
      "longitude": 77.8600,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 3,
          "murder": 1,
          "total_crimes": 4
      }
  },
  {
      "count": 61,
      "name": "Bhopal Sector 46",
      "latitude": 23.2840,
      "longitude": 77.8700,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 5,
          "murder": 2,
          "total_crimes": 7
      }
  },
  {
      "count": 62,
      "name": "Bhopal Sector 47",
      "latitude": 23.2850,
      "longitude": 77.8800,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 2,
          "murder": 0,
          "total_crimes": 2
      }
  },
  {
      
      "count": 63,
      "name": "Bhopal Sector 48",
      "latitude": 23.2860,
      "longitude": 77.8900,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 4,
          "murder": 1,
          "total_crimes": 5
      }
  },
  {
      "count": 64,
      "name": "Bhopal Sector 49",
      "latitude": 23.2870,
      "longitude": 77.9000,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 6,
          "murder": 2,
          "total_crimes": 8
      }
  },
  {
      "count": 65,
      "name": "Bhopal Sector 50",
      "latitude": 23.2880,
      "longitude": 77.9100,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 1,
          "murder": 0,
          "total_crimes": 1
      }
  }
,
  {
      "count": 63,
      "name": "Bhopal Sector 48",
      "latitude": 23.2860,
      "longitude": 77.8900,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 4,
          "murder": 1,
          "total_crimes": 5
      }
  },
  {
      "count": 64,
      "name": "Bhopal Sector 49",
      "latitude": 23.2870,
      "longitude": 77.9000,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 6,
          "murder": 2,
          "total_crimes": 8
      }
  },
  {
      "count": 65,
      "name": "Bhopal Sector 50",
      "latitude": 23.2880,
      "longitude": 77.9100,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 1,
          "murder": 0,
          "total_crimes": 1
      }
  },
  {
      "count": 66,
      "name": "Bhopal Sector 51",
      "latitude": 23.2890,
      "longitude": 77.9200,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 3,
          "murder": 1,
          "total_crimes": 4
      }
  },
  {
      "count": 67,
      "name": "Bhopal Sector 52",
      "latitude": 23.2900,
      "longitude": 77.9300,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 5,
          "murder": 2,
          "total_crimes": 7
      }
  },
  {
      "count": 68,
      "name": "Bhopal Sector 53",
      "latitude": 23.2910,
      "longitude": 77.9400,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 2,
          "murder": 0,
          "total_crimes": 2
      }
  },
  {
      "count": 69,
      "name": "Bhopal Sector 54",
      "latitude": 23.2920,
      "longitude": 77.9500,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 4,
          "murder": 1,
          "total_crimes": 5
      }
  },
  {
      "count": 70,
      "name": "Bhopal Sector 55",
      "latitude": 23.2930,
      "longitude": 77.9600,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 6,
          "murder": 2,
          "total_crimes": 8
      }
  },
  {
      "count": 71,
      "name": "Bhopal Sector 56",
      "latitude": 23.2940,
      "longitude": 77.9700,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 1,
          "murder": 0,
          "total_crimes": 1
      }
  },
  {
      "count": 72,
      "name": "Bhopal Sector 57",
      "latitude": 23.2950,
      "longitude": 77.9800,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 3,
          "murder": 1,
          "total_crimes": 4
      }
  },
  {
      "count": 73,
      "name": "Bhopal Sector 58",
      "latitude": 23.2960,
      "longitude": 77.9900,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 5,
          "murder": 2,
          "total_crimes": 7
      }
  },
  {
      "count": 74,
      "name": "Bhopal Sector 59",
      "latitude": 23.2970,
      "longitude": 78.0000,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 2,
          "murder": 0,
          "total_crimes": 2
      }
  },
  {
      
      "count": 75,
      "name": "Bhopal Sector 60",
      "latitude": 23.2980,
      "longitude": 78.0100,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 4,
          "murder": 1,
          "total_crimes": 5
      }
  },
  {
      "count": 76,
      "name": "Bhopal Sector 61",
      "latitude": 23.2990,
      "longitude": 78.0200,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 6,
          "murder": 2,
          "total_crimes": 8
      }
  },
  {
      "count": 77,
      "name": "Bhopal Sector 62",
      "latitude": 23.3000,
      "longitude": 78.0300,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 1,
          "murder": 0,
          "total_crimes": 1
      }
  },
  {
      "count": 78,
      "name": "Bhopal Sector 63",
      "latitude": 23.3010,
      "longitude": 78.0400,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 3,
          "murder": 1,
          "total_crimes": 4
      }
  },
  {
      "count": 79,
      "name": "Bhopal Sector 64",
      "latitude": 23.3020,
      "longitude": 78.0500,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 5,
          "murder": 2,
          "total_crimes": 7
      }
  },
  {
      "count": 80,
      "name": "Bhopal Sector 65",
      "latitude": 23.3030,
      "longitude": 78.0600,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 2,
          "murder": 0,
          "total_crimes": 2
      }
  },
  {
      "count": 81,
      "name": "Bhopal Sector 66",
      "latitude": 23.3040,
      "longitude": 78.0700,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 4,
          "murder": 1,
          "total_crimes": 5
      }
  },
  {
      "count": 82,
      "name": "Bhopal Sector 67",
      "latitude": 23.3050,
      "longitude": 78.0800,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 6,
          "murder": 2,
          "total_crimes": 8
      }
  },
  {
      "count": 83,
      "name": "Bhopal Sector 68",
      "latitude": 23.3060,
      "longitude": 78.0900,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 1,
          "murder": 0,
          "total_crimes": 1
      }
  },
  {
      "count": 84,
      "name": "Bhopal Sector 69",
      "latitude": 23.3070,
      "longitude": 78.1000,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 3,
          "murder": 1,
          "total_crimes": 4
      }
  },
  {
      "count": 85,
      "name": "Bhopal Sector 70",
      "latitude": 23.3080,
      "longitude": 78.1100,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 5,
          "murder": 2,
          "total_crimes": 7
      }
  },
  {
      "count": 86,
      "name": "Bhopal Sector 71",
      "latitude": 23.3090,
      "longitude": 78.1200,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 2,
          "murder": 0,
          "total_crimes": 2
      }
  },
  {
      "count": 87,
      "name": "B",
      "count": 87,
      "name": "Bhopal Sector 72",
      "latitude": 23.3100,
      "longitude": 78.1300,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 4,
          "murder": 1,
          "total_crimes": 5
      }
  },
  {
      "count": 88,
      "name": "Bhopal Sector 73",
      "latitude": 23.3110,
      "longitude": 78.1400,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 6,
          "murder": 2,
          "total_crimes": 8
      }
  },
  {
      "count": 89,
      "name": "Bhopal Sector 74",
      "latitude": 23.3120,
      "longitude": 78.1500,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 1,
          "murder": 0,
          "total_crimes": 1
      }
  },
  {
      "count": 90,
      "name": "Bhopal Sector 75",
      "latitude": 23.3130,
      "longitude": 78.1600,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 3,
          "murder": 1,
          "total_crimes": 4
      }
  },
  {
      "count": 91,
      "name": "Bhopal Sector 76",
      "latitude": 23.3140,
      "longitude": 78.1700,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 5,
          "murder": 2,
          "total_crimes": 7
      }
  },
  {
      "count": 92,
      "name": "Bhopal Sector 77",
      "latitude": 23.3150,
      "longitude": 78.1800,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 2,
          "murder": 0,
          "total_crimes": 2
      }
  },
  {
      "count": 93,
      "name": "Bhopal Sector 78",
      "latitude": 23.3160,
      "longitude": 78.1900,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 4,
          "murder": 1,
          "total_crimes": 5
      }
  },
  {
      "count": 94,
      "name": "Bhopal Sector 79",
      "latitude": 23.3170,
      "longitude": 78.2000,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 6,
          "murder": 2,
          "total_crimes": 8
      }
  },
  {
      "count": 95,
      "name": "Bhopal Sector 80",
      "latitude": 23.3180,
      "longitude": 78.2100,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 1,
          "murder": 0,
          "total_crimes": 1
      }
  },
  {
      "count": 96,
      "name": "Bhopal Sector 81",
      "latitude": 23.3190,
      "longitude": 78.2200,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 3,
          "murder": 1,
          "total_crimes": 4
      }
  },
  {
      "count": 97,
      "name": "Bhopal Sector 82",
      "latitude": 23.3200,
      "longitude": 78.2300,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 5,
          "murder": 2,
          "total_crimes": 7
      }
  },
  {
      "count": 98,
      "name": "Bhopal Sector 83",
      "latitude": 23.3210,
      "longitude": 78.2400,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 2,
          "murder": 0,
          "total_crimes": 2
      }
  },
  {
      "count": 99,
      "name": "B ",
      "count": 99,
      "name": "Bhopal Sector 84",
      "latitude": 23.3220,
      "longitude": 78.2500,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 4,
          "murder": 1,
          "total_crimes": 5
      }
  },
  {
      "count": 100,
      "name": "Bhopal Sector 85",
      "latitude": 23.3230,
      "longitude": 78.2600,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 6,
          "murder": 2,
          "total_crimes": 8
      }
  },
  {
      "count": 101,
      "name": "Bhopal Sector 86",
      "latitude": 23.3240,
      "longitude": 78.2700,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 1,
          "murder": 0,
          "total_crimes": 1
      }
  },
  {
      "count": 102,
      "name": "Bhopal Sector 87",
      "latitude": 23.3250,
      "longitude": 78.2800,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 3,
          "murder": 1,
          "total_crimes": 4
      }
  },
  {
      "count": 103,
      "name": "Bhopal Sector 88",
      "latitude": 23.3260,
      "longitude": 78.2900,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 5,
          "murder": 2,
          "total_crimes": 7
      }
  },
  {
      "count": 104,
      "name": "Bhopal Sector 89",
      "latitude": 23.3270,
      "longitude": 78.3000,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 2,
          "murder": 0,
          "total_crimes": 2
      }
  },
  {
      "count": 105,
      "name": "Bhopal Sector 90",
      "latitude": 23.3280,
      "longitude": 78.3100,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 4,
          "murder": 1,
          "total_crimes": 5
      }
  },
  {
      "count": 106,
      "name": "Bhopal Sector 91",
      "latitude": 23.3290,
      "longitude": 78.3200,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 6,
          "murder": 2,
          "total_crimes": 8
      }
  },
  {
      "count": 107,
      "name": "Bhopal Sector 92",
      "latitude": 23.3300,
      "longitude": 78.3300,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 1,
          "murder": 0,
          "total_crimes": 1
      }
  },
  {
      "count": 108,
      "name": "Bhopal Sector 93",
      "latitude": 23.3310,
      "longitude": 78.3400,
      "safety_grade": "B",
      "crime_statistics": {
          "rape": 3,
          "murder": 1,
          "total_crimes": 4
      }
  },
  {
      "count": 109,
      "name": "Bhopal Sector 94",
      "latitude": 23.3320,
      "longitude": 78.3500,
      "safety_grade": "C",
      "crime_statistics": {
          "rape": 5,
          "murder": 2,
          "total_crimes": 7
      }
  },
  {
      "count": 110,
      "name": "Bhopal Sector 95",
      "latitude": 23.3330,
      "longitude": 78.3600,
      "safety_grade": "A",
      "crime_statistics": {
          "rape": 2,
          "murder": 0,
          "total_crimes": 2
      }
  }
];

const delhidata=
[
  {
      "count": 1,
      "name": "Connaught Place",
      "latitude": 28.6278,
      "longitude": 77.2197,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 15,
          "murder": 1,
          "rape": 2,
          "total_crimes": 18
      }
  },
  {
      "count": 2,
      "name": "Chandni Chowk",
      "latitude": 28.6550,
      "longitude": 77.2300,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 20,
          "murder": 2,
          "rape": 3,
          "total_crimes": 25
      }
  },
  {
      "count": 3,
      "name": "Karol Bagh",
      "latitude": 28.6460,
      "longitude": 77.2100,
      "safety_grade": "C",
      "crime_statistics": {
          "theft": 25,
          "murder": 3,
          "rape": 4,
          "total_crimes": 32
      }
  },
  {
      "count": 4,
      "name": "South Extension",
      "latitude": 28.5770,
      "longitude": 77.2150,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 10,
          "murder": 0,
          "rape": 1,
          "total_crimes": 11
      }
  },
  {
      "count": 5,
      "name": "Lajpat Nagar",
      "latitude": 28.5800,
      "longitude": 77.2390,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 18,
          "murder": 1,
          "rape": 2,
          "total_crimes": 21
      }
  },
  {
      "count": 6,
      "name": "Dwarka",
      "latitude": 28.5700,
      "longitude": 77.0200,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 5,
          "murder": 0,
          "rape": 0,
          "total_crimes": 5
      }
  },
  {
      "count": 7,
      "name": "Vasant Kunj",
      "latitude": 28.5500,
      "longitude": 77.1300,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 8,
          "murder": 0,
          "rape": 1,
          "total_crimes": 9
      }
  },
  {
      "count": 8,
      "name": "Greater Kailash",
      "latitude": 28.5530,
      "longitude": 77.2230,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 12,
          "murder": 1,
          "rape": 2,
          "total_crimes": 15
      }
  },
  {
      "count": 9,
      "name": "Saket",
      "latitude": 28.5530,
      "longitude": 77.2500,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 6,
          "murder": 0,
          "rape": 1,
          "total_crimes": 7
      }
  },
  {
      "count": 10,
      "name": "Pitampura",
      "latitude": 28.6500,
      "longitude": 77.1500,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 14,
          "murder": 1,
          "rape": 2,
          "total_crimes": 17
      }
  },
  {
      "count": 11,
      "name": "Rohini",
      "latitude": 28.7000,
      "longitude": 77.1500,
      "safety_grade": "C",
      "crime_statistics": {
          "theft": 22,
          "murder": 2,
          "rape": 3,
          "total_crimes": 27
      }
  },
  {
      "count": 12,
      "name": "Janakpuri",
      "latitude": 28.6000,
      "longitude": 77.1000,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 10,
          "murder": 0,
          "rape": 1,
          "total_crimes": 11
      }
  },
  {
      "count": 13,
      "name": "Nehru Place",
      "latitude": 28.5800,
      "longitude": 77.2400,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 7,
          "murder": 0,
          "rape": 1,
          "total_crimes": 8
      }
  },
  {
      "count": 14,
      "name": "Khan Market",
      "latitude": 28.6000,
      "longitude": 77.2200,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 3,
          "murder": 0,
          "rape": 0,
          "total_crimes": 3
      }
  },
  {
      "count": 15,
      "name": "Malviya Nagar",
      "latitude": 28.5500,
      "longitude": 77.2000,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 15,
          "murder": 1,
          "rape": 2,
          "total_crimes": 18
      }
  },
  {
      "count": 16,
      "name": "Green Park",
      "latitude": 28.5800,
      "longitude": 77.2000,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 5,
          "murder": 0,
          "rape": 1,
          "total_crimes": 6
      }
  },
  {
      "count": 17,
      "name": "Paharganj",
      "latitude": 28.6400,
      "longitude": 77.2100,
      "safety_grade": "C",
      "crime_statistics": {
          "theft": 30,
          "murder": 4,
          "rape": 5,
          "total_crimes": 39
      }
  },
  {
      "count": 18,
      "name": "Kashmere Gate",
      "latitude": 28.6550,
      "longitude": 77.2300,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 20,
          "murder": 2,
          "rape": 3,
          "total_crimes": 25
      }
  },
  {
      "count": 19,
      "name": "Civil Lines",
      "latitude": 28.6500,
      "longitude": 77.2000,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 4,
          "murder": 0,
          "rape": 1,
          "total_crimes": 5
      }
  },
  {
      "count": 20,
      "name": "Lodhi Colony",
      "latitude": 28.5900,
      "longitude": 77.2200,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 2,
          "murder": 0,
          "rape": 0,
          "total_crimes": 2
      }
  },
  {
      "count": 21,
      "name": "Shahdara",
      "latitude": 28.6700,
      "longitude": 77.3000,
      "safety_grade": "C",
      "crime_statistics": {
          "theft": 28,
          "murder": 3,
          "rape": 4,
          "total_crimes": 35
      }
  },
  {
      "count": 22,
      "name": "Sarai Rohilla",
      "latitude": 28.6500,
      "longitude": 77.2000,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 15,
          "murder": 1,
          "rape": 2,
          "total_crimes": 18
      }
  },
  {
      "count": 23,
      "name": "Sultanpur",
      "latitude": 28.5500,
      "longitude": 77.2000,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 6,
          "murder": 0,
          "rape": 1,
          "total_crimes": 7
      }
  },
  {
      "count": 24,
      "name": "Okhla",
      "latitude": 28.5500,
      "longitude": 77.3000,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 12,
          "murder": 1,
          "rape": 2,
          "total_crimes": 15
      }
  },
  {
      "count": 25,
      "name": "Faridabad",
      "latitude": 28.4000,
      "longitude": 77.3000,
      "safety_grade": "C",
      "crime_statistics": {
          "theft": 35,
          "murder": 5,
          "rape": 6,
          "total_crimes": 46
      }
  },
  {
      "count": 26,
      "name": "Dwarka Sector 21",
      "latitude": 28.5700,
      "longitude": 77.0200,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 4,
          "murder": 0,
          "rape": 0,
          "total_crimes": 4
      }
  },
  {
      "count": 27,
      "name": "Mundka",
      "latitude": 28.6500,
      "longitude": 77.0500,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 10,
          "murder": 1,
          "rape": 1,
          "total_crimes": 12
      }
  },
  {
      "count": 28,
      "name": "Narela",
      "latitude": 28.7500,
      "longitude": 77.1000,
      "safety_grade": "C",
      "crime_statistics": {
          "theft": 20,
          "murder": 2,
          "rape": 3,
          "total_crimes": 25
      }
  },
  {
      "count": 29,
      "name": "Kapashera",
      "latitude": 28.5500,
      "longitude": 77.1000,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 8,
          "murder": 0,
          "rape": 1,
          "total_crimes": 9
      }
  },
  {
      "count": 30,
      "name": "Sangam Vihar",
      "latitude": 28.5000,
      "longitude": 77.2000,
      "safety_grade": "C",
      "crime_statistics": {
          "theft": 30,
          "murder": 4,
          "rape": 5,
          "total_crimes": 39
      }
  },
  {
      "count": 31,
      "name": "Khanpur",
      "latitude": 28.5500,
      "longitude": 77.2000,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 10,
          "murder": 1,
          "rape": 1,
          "total_crimes": 12
      }
  },
  {
      "count": 32,
      "name": "Moti Nagar",
      "latitude": 28.6500,
      "longitude": 77.1500,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 15,
          "murder": 1,
          "rape": 2,
          "total_crimes": 18
      }
  },
  {
      "count": 33,
      "name": "Rajouri Garden",
      "latitude": 28.6400,
      "longitude": 77.1500,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 5,
          "murder": 0,
          "rape": 1,
          "total_crimes": 6
      }
  },
  {
      "count": 34,
      "name": "Vikaspuri",
      "latitude": 28.6000,
      "longitude": 77.2000,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 12,
          "murder": 1,
          "rape": 2,
          "total_crimes": 15
      }
  },
  {
      "count": 35,
      "name": "Shalimar Bagh",
      "latitude": 28.7000,
      "longitude": 77.2000,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 3,
          "murder": 0,
          "rape": 0,
          "total_crimes": 3
      }
  },
  {
      "count": 36,
      "name": "Keshav Puram",
      "latitude": 28.7000,
      "longitude": 77.2000,
      "safety_grade": "C",
      "crime_statistics": {
          "theft": 25,
          "murder": 3,
          "rape": 4,
          "total_crimes": 32
      }
  },
  {
      "count": 37,
      "name": "Bawana",
      "latitude": 28.7500,
      "longitude": 77.1000,
      "safety_grade": "C",
      "crime_statistics": {
          "theft": 18,
          "murder": 2,
          "rape": 3,
          "total_crimes": 23
      }
  },
  {
      "count": 38,
      "name": "Nangloi",
      "latitude": 28.6500,
      "longitude": 77.1000,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 10,
          "murder": 1,
          "rape": 1,
          "total_crimes": 12
      }
  },
  {
      "count": 39,
      "name": "Sadar Bazar",
      "latitude": 28.6500,
      "longitude": 77.2000,
      "safety_grade": "C",
      "crime_statistics": {
          "theft": 20,
          "murder": 2,
          "rape": 3,
          "total_crimes": 25
      }
  },
  {
      "count": 40,
      "name": "Kalkaji",
      "latitude": 28.5500,
      "longitude": 77.2500,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 5,
          "murder": 0,
          "rape": 1,
          "total_crimes": 6
      }
  },
  {
      "count": 41,
      "name": "Chattarpur",
      "latitude": 28.5000,
      "longitude": 77.2000,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 8,
          "murder": 0,
          "rape": 1,
          "total_crimes": 9
      }
  },
  {
      "count": 42,
      "name": "Sultanpur",
      "latitude": 28.5500,
      "longitude": 77.2000,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 6,
          "murder": 0,
          "rape": 1,
          "total_crimes": 7
      }
  },
  {
      "count": 43,
      "name": "Mandi House",
      "latitude": 28.6200,
      "longitude": 77.2300,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 10,
          "murder": 1,
          "rape": 2,
          "total_crimes": 13
      }
  },
  {
      "count": 44,
      "name": "Rajendra Place",
      "latitude": 28.6400,
      "longitude": 77.2000,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 4,
          "murder": 0,
          "rape": 0,
          "total_crimes": 4
      }
  },
  {
      "count": 45,
      "name": "Dwarka Sector 12",
      "latitude": 28.5700,
      "longitude": 77.0200,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 3,
          "murder": 0,
          "rape": 0,
          "total_crimes": 3
      }
  },
  {
      "count": 46,
      "name": "Kapashera",
      "latitude": 28.5500,
      "longitude": 77.1000,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 8,
          "murder": 0,
          "rape": 1,
          "total_crimes": 9
      }
  },
  {
      "count": 47,
      "name": "Sadar Bazar",
      "latitude": 28.6500,
      "longitude": 77.2000,
      "safety_grade": "C",
      "crime_statistics": {
          "theft": 20,
          "murder": 2,
          "rape": 3,
          "total_crimes": 25
      }
  },
  {
      "count": 48,
      "name": "Sector 18",
      "latitude": 28.5700,
      "longitude": 77.3200,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 12,
          "murder": 1,
          "rape": 2,
          "total_crimes": 15
      }
  },
  {
      "count": 49,
      "name": "Sector 62",
      "latitude": 28.5850,
      "longitude": 77.3700,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 8,
          "murder": 0,
          "rape": 1,
          "total_crimes": 9
      }
  },
  {
      "count": 50,
      "name": "Sector 50",
      "latitude": 28.5700,
      "longitude": 77.3300,
      "safety_grade": "C",
      "crime_statistics": {
          "theft": 20,
          "murder": 2,
          "rape": 3,
          "total_crimes": 25
      }
  },
  {
      "count": 51,
      "name": "Sector 15",
      "latitude": 28.5800,
      "longitude": 77.3200,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 15,
          "murder": 1,
          "rape": 0,
          "total_crimes": 16
      }
  },
  {
      "count": 52,
      "name": "Sector 12",
      "latitude": 28.5900,
      "longitude": 77.3200,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 5,
          "murder": 0,
          "rape": 1,
          "total_crimes": 6
      }
  },
  {
      "count": 53,
      "name": "Sector 63",
      "latitude": 28.5900,
      "longitude": 77.3700,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 7,
          "murder": 0,
          "rape": 0,
          "total_crimes": 7
      }
  },
  {
      "count": 54,
      "name": "Sector 71",
      "latitude": 28.5900,
      "longitude": 77.4000,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 10,
          "murder": 1,
          "rape": 1,
          "total_crimes": 12
      }
  },
  {
      "count": 55,
      "name": "Sector 34",
      "latitude": 28.5800,
      "longitude": 77.3500,
      "safety_grade": "C",
      "crime_statistics": {
          "theft": 18,
          "murder": 2,
          "rape": 4,
          "total_crimes": 24
      }
  },
  {
      "count": 56,
      "name": "Sector 14",
      "latitude": 28.5900,
      "longitude": 77.3100,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 3,
          "murder": 0,
          "rape": 0,
          "total_crimes": 3
      }
  },
  {
      "count": 57,
      "name": "Sector 27",
      "latitude": 28.5800,
      "longitude": 77.3200,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 9,
          "murder": 1,
          "rape": 1,
          "total_crimes": 11
      }
  },
  {
      "count": 58,
      "name": "Sector 21",
      "latitude": 28.5900,
      "longitude": 77.3200,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 4,
          "murder": 0,
          "rape": 0,
          "total_crimes": 4
      }
  },
  {
      "count": 59,
      "name": "Sector 19",
      "latitude": 28.5800,
      "longitude": 77.3100,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 11,
          "murder": 1,
          "rape": 2,
          "total_crimes": 14
      }
  },
  {
      "count": 60,
      "name": "Sector 22",
      "latitude": 28.5900,
      "longitude": 77.3300,
      "safety_grade": "C",
      "crime_statistics": {
          "theft": 16,
          "murder": 2,
          "rape": 3,
          "total_crimes": 21
      }
  },
  {
      "count": 61,
      "name": "Sector 30",
      "latitude": 28.5800,
      "longitude": 77.3400,
      "safety_grade": "A",
      "crime_statistics": {
          "theft": 6,
          "murder": 0,
          "rape": 1,
          "total_crimes": 7
      }
  },
  {
      "count": 62,
      "name": "Sector 35",
      "latitude": 28.5700,
      "longitude": 77.3500,
      "safety_grade": "B",
      "crime_statistics": {
          "theft": 14,
          "murder": 1,
          "rape": 2,
          "total_crimes": 17
      }
  }
]
    app.get("/indore", (req, res) => {
        res.json(Indore_Areas);
      
    });
    app.get("/bhopal",(req,res)=>{
      res.json(Bhopal_Areas);
    })

    app.get("/delhi",(req,res)=>{
      res.json(delhidata);
    })