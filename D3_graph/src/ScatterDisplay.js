import * as d3 from 'd3';
export default class ScatterDisplay {
    constructor(scHeight, scWidth, scData) {
        this.h = scHeight;
        this.w = scWidth;
        this.monthlySales = scData;
        this.createScatter();
    }
    //creating the KPI
    salesKPI(d) {
        if (d > 250) {
            return "#33CC66"
        } else if (d < 250) {
            return "#666666"
        }
    }

    //creating a min max
    showMinMax(ds, col, val, type) {
        let max = d3.max(ds, function (d) {
            return d[col];
        });
        let min = d3.min(ds, function (d) {
            return d[col];
        });

        if (type == 'minmax' && (val == max || val == min)) {
            return val;
        } else {
            if (type == 'all') {
                return val;
            }
        }
    }

    createScatter(){
    //creating the svg
    let svg = d3.select("#scatterSpace")
    .attr("width", this.w)
    .attr("height", this.h);
    //adding dots
    let dots = svg.selectAll("circle")
        .data(this.monthlySales)
        .enter()
        .append("circle")
            .attr("cx", d => d.month*3)
            .attr("cy",d => this.h - d.sales)
            .attr("r", 5)
            .attr("fill",d => this.salesKPI(d.sales))

    //adding labels
    let labels = svg.selectAll("text")
        .data(this.monthlySales)
        .enter()
        .append("text")
        .text( d=> this.showMinMax(this.monthlySales, 'sales', d.sales, 'minmax'))
            .attr("x",d => (d.month * 3) - 28)
            .attr("y",d => this.h - d.sales)
            .attr("font-size","12px")
            .attr("font-family","sans-serif")
            .attr("fill","#666666")
            .attr("text-anchor","start")
    }
}