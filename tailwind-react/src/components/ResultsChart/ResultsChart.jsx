import React from 'react';
import { LineChart,Line, XAxis, YAxis } from 'recharts';


const resultData =  [
    {
      "student_id": "ST001",
      "name": "Anika Sharma",
      "physics": 85,
      "chemistry": 89,
      "math": 92
    },
    {
      "student_id": "ST002",
      "name": "Rahul Das",
      "physics": 78,
      "chemistry": 74,
      "math": 81
    },
    {
      "student_id": "ST003",
      "name": "Sneha Roy",
      "physics": 92,
      "chemistry": 95,
      "math": 96
    },
    {
      "student_id": "ST004",
      "name": "Arjun Mehta",
      "physics": 66,
      "chemistry": 70,
      "math": 68
    },
    {
      "student_id": "ST005",
      "name": "Priya Nair",
      "physics": 88,
      "chemistry": 84,
      "math": 90
    },
    {
      "student_id": "ST006",
      "name": "Rohan Verma",
      "physics": 74,
      "chemistry": 79,
      "math": 75
    },
    {
      "student_id": "ST007",
      "name": "Neha Chatterjee",
      "physics": 91,
      "chemistry": 93,
      "math": 97
    },
    {
      "student_id": "ST008",
      "name": "Vikram Singh",
      "physics": 80,
      "chemistry": 82,
      "math": 85
    },
    {
      "student_id": "ST009",
      "name": "Isha Khanna",
      "physics": 69,
      "chemistry": 72,
      "math": 70
    },
    {
      "student_id": "ST010",
      "name": "Kunal Patel",
      "physics": 83,
      "chemistry": 86,
      "math": 88
    }
  ]
  
const ResultsChart = () => {
    return (
        <div>
        <LineChart width={800} height={500} data={resultData}>
          <XAxis dataKey={'name'}></XAxis>
          <YAxis ></YAxis>
               <Line dataKey={'math'}></Line>
               <Line dataKey={'chemistry'} stroke='red' ></Line>
        </LineChart>
        </div>
    );
};

export default ResultsChart;