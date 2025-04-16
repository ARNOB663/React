import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {

    const markDataRes = use(marksPromise)
    const marksData = markDataRes.data;
    
    //data processing for the chart
    const marksChartData =  marksData.map(studentData => {

        const student = {
            id:studentData.student_id,
            name:studentData.name,
            phy: studentData.physics,
            chem: studentData.chemistry,
            math: studentData.math
        }
        const avg = (student.phy + student.chem + student.math)/3
        student.avg = avg;
        return student
    })
    console.log(marksChartData)
     
    return (
        <div>
            <BarChart width={500} height={300} data={marksChartData}>
             <XAxis dataKey="name"></XAxis>
             <YAxis ></YAxis>
            <Bar dataKey="avg" fill='#1E90FF' ></Bar>
                
            </BarChart>

        </div>
    );
};

export default MarksChart;