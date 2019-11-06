import * as d3 from "d3";
import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants";

export default class BarDisplay {
    constructor(myData, barHolder, barWidth, barHeight,padding) {
        this.w = barWidth;
        this.h = barHeight;
        this.padding = padding;
        this.barHolder = barHolder;
        this.dataset = myData;
        this.buildChart();
        this.buildCanvas();
        console.log(this.dataset);
        
    }
    buildChart() {
        let svg = d3.select(this.barHolder)
            .attr("width", this.w)
            .attr("height", this.h);
        console.log(this.dataset);

        svg=svg.append("g");
        svg.selectAll("rect")
            .data(this.dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * (this.w / this.dataset.length))
            //.attr("x", function(d){
            //return x (dataset.w / dataset.length);})
            .attr("y", d =>
            {
            if(d.precip < 0) 
                return this.h
            else
                return this.h - (d.precip*4)
            })
            // .attr("width", d => this.w / d.length - this.padding)
            .attr("width", this.w / this.dataset.length - this.padding)
            .attr("height", d =>  Math.abs(d.precip*4))
            .attr("fill", `grey`);

            let labels = svg.selectAll("text")
            .data(this.dataset)
            .enter()
            .append("text")
            .text(d => d.precip)
            .attr("x",(d, i) => i * (this.w / this.dataset.length))
            .attr("y",d =>{
                if(d.precip < 0) 
                    return this.h - (d.precip*4) +  10
                else
                    return this.h - (d.precip*4) - 10
                })
            .attr("font-size", "12px")
            .attr("font-family", "sans-serif")
            .attr("fill", "#222")
            .attr("text-anchor", "start")
            .attr("dy", "0.35em")

            

    }
    buildCanvas() {
        let svg = d3.select("#canvas")
            .attr("width", this.w)
            .attr("height", this.h);

            let labels = svg.selectAll("text")
            .data(this.dataset)
            .enter()
            .append("text")
            .text(d => d.year)
            .attr("x",(d, i) => i * (this.w / this.dataset.length))
            .attr("y",10)
            .attr("font-size", "7px")
            .attr("font-family", "sans-serif")
            .attr("text-anchor", "start")
            .attr("dy", "0.35em")

            

    }
}
