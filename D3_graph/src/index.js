import BarDisplay from './BarDisplay';
import LineDisplay from './LineDisplay';
import ScatterDisplay from './ScatterDisplay';

let barWidth = 900;
let barHeight = 700;
let barPadding = 2;
let myData;
let barHolder = "#barSpace";

//let myBars = new BarDisplay(barData, barHolder, barWidth, barHeight, barPadding);

let lineHeight = 700;
let lineWidth = 900;

let myChartBar;
let myChartLine;

function buildChart(){
    
    myChartBar = new BarDisplay(myData, barHolder, barWidth, barHeight, barPadding);
    myChartLine = new LineDisplay(lineHeight, lineWidth, myData);

}

//let myLines = new LineDisplay(lineHeight, lineWidth, monthlySales);
//let myScatter = new ScatterDisplay(lineHeight, lineWidth, monthlySales);

function fetchData()
    {
        fetch('primData.json')
            .then(data => data.json())
            .then(data => {
                // console.log(data.data);
                myData= data.data;

                // console.log(myData);
                buildChart();
            })

    }

    fetchData();



