import * as d3 from 'd3';

export default class LineDisplay {
    constructor(lnHeight, lnWidth, myData) {
        this.h = lnHeight;
        this.w = lnWidth;
        this.temp = myData;
        this.lineFun = d3.line()
            .x(d => ((d.year)*22 )- 43325)
            .y(d => this.h/2 - d.temp*200)
            .curve(d3.curveLinear); //can also be b-spline by using the term basis

        this.buildLineChart();
    }
    buildLineChart() {
        let svg = d3.select("#lineSpace")
            .attr("width", this.w)
            .attr("height", this.h);
            console.log(this.temp);
        let viz = svg.append("path")
            .attr("d", this.lineFun(this.temp))
            .attr("stroke", "purple")
            .attr("stroke-width",2)
            .attr("fill", "none")
        let labels = svg.selectAll("text")
            .data(this.temp)
            .enter()
            .append("text")
            .text(d => d.temp)
            .attr("x",d => ((d.year)*22 )- 43325)
            .attr("y",d =>this.h/2 - d.temp*200)
            .attr("font-size", "12px")
            .attr("font-family", "sans-serif")
            .attr("fill", "purple")
            .attr("text-anchor", "start")
            .attr("dy", "0.35em")
    }
}