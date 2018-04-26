/**
 * Created by dongjie on 10/4/18.
 */

import React from 'react';
import * as d3 from 'd3';

export default class ShopGraph extends React.Component{

    constructor(props){
        super(props);
        this.graphHeight = 500;
        this.graphWidth = 1000;
        this.margin = {top:40, left:40};
        this.sizeParams = {width:20, text:9};
        this.data = [
            {name: 'zara', num: 100},
            {name: 'topshop', num: 100},
            {name: 'vim', num: 100},
            {name: 'cos', num: 100},
            {name: 'wefx', num: 100},
        ];

        this.maxMoney = d3.max(this.data.map((data)=>data.num));


    }

    componentDidMount(){
        // window.addEventListener("resize",this.reDrawGraph);

        this.setGraphSize();
        this.drawGraph();

        this.drawAxis(this.graph,this.maxMoney)
    }

    // shouldComponentUpdate(nextProps,nextState){
    //     if(nextProps.data.length!==this.props.data.length){
    //         return true
    //     }else{
    //         return false
    //     }
    // }

    componentDidUpdate(){
        this.drawGraph()
    }

    render(){
        return <div id="svgGraph"></div>
    }


    setGraphSize = () => {
        this.graphWidth = Math.min(2200, window.innerWidth) - 405 ;
        // document.getElementById("graph-header").style.width = this.graphWidth + 80 + "px";
    }



    drawGraph = () => {

        this.sizeParams.width = Math.floor(this.graphWidth / 2.2 / this.data.length);
        this.sizeParams.text = Math.min(Math.floor(this.sizeParams.width / 2 + 1), 22);

        d3.select("svg").remove();
        var svg = d3.select("#svgGraph").append("svg")
            .attr("width", this.graphWidth)
            .attr("height", this.graphHeight)

        this.graph = svg;

        svg.append("g")
            .selectAll("g")
            .data(this.data)
            .enter().append("g")
            .attr("fill", "green")
            .selectAll("rect")
            .data([100, 200, 300, 250, 400, 250, 80])
            // .data(function(d) { console.log(d.num);return d.num; })
            .enter().append("rect")
            .attr("x", function (d, index) {
                return 100 * index + 80;
            })
            .attr("y", function (d) {
                return (500-d);
            })
            .attr("height", function (d) {
                return d;
            })
            .attr("width", 20);
    }



    drawAxis = (graph, maxMoney, maxCount, makeScaleTime) => {
        var yLeft = d3.scaleLinear().domain([maxMoney, 0]).range([0,this.graphHeight]);
        var yAxisLeft = d3.axisLeft(yLeft).ticks(5).tickPadding(2).tickSizeInner(9);

        // graph.append("g")
        //     .attr("transform", `translate(${this.sizeParams.width},${this.graphHeight})`)
        //     .call(d3.axisBottom(makeScaleTime)
        //         .ticks(shopData.length)
        //         .tickFormat(d3.timeFormat("%a %b %d")))
        //     .selectAll("text")
        //     .style("text-anchor", "end")
        //     .attr("dx", "-.8em")
        //     .attr("dy", ".15em")
        //     .attr("transform", "rotate(-60)");

        graph.append("g")
            .attr('class', "axisRed")
            .call(yAxisLeft);

        graph.append("text")
            .text("num")
            .attr("x",15)
            .attr("y",15)
    }
        // var makeScaleTime = d3.scaleTime()
        //     .domain(d3.extent(this.props.data.map((oneDate)=>{
        //         let date = oneDate['date'].split('-');
        //         return new Date(date[0],date[1]-1,date[2])
        //     })))
        //     .range([0, this.graphWidth]);
        // let [minMoney,maxMoney] = d3.extent(this.props.data.map((oneDayData)=>{return oneDayData.order_amount}));
        // let makeMoneyScale = d3.scaleLinear().domain([0,maxMoney]).range([0,this.graphHeight]);
        // let [minCount,maxCount] = d3.extent(this.props.data.map((oneDayData)=>{return oneDayData.item_count}));
        // let makeCountScale = d3.scaleLinear().domain([0,maxCount]).range([0,this.graphHeight]);
        // this.scaleFun = {
        //     'money':makeMoneyScale,
        //     'count':makeCountScale
        // }

        // let wholeGraph = svg.append("g")
        //     .attr("transform", "translate("+ this.margin.left + "," + this.margin.top + ")")
        //     .attr("width",this.graphWidth)
        //     .attr("height", this.graphHeight);
        // let graph = wholeGraph.append("g").attr("id","graph");
        // let text = wholeGraph.append("g").attr("id","text");
        //
        // this.drawAxis(wholeGraph, maxMoney, maxCount,makeScaleTime);



    // drawGraphBar = (graph, data_name) => {
    //     let shopData = this.props.data;
    //     let dataAttr = this.props.stateData.graphData[data_name];
    //     let gBar = graph.append('g').attr("id","g-"+data_name).attr("display",dataAttr.display).attr("class",dataAttr.class);
    //     gBar.selectAll('rect')
    //         .data(shopData.map((oneDayData)=>{return this.scaleFun[dataAttr.barCategory](oneDayData[data_name])}))
    //         .enter().append("rect")
    //         .attr("width", this.sizeParams.width)
    //         .attr("class"," shop_data-" + data_name + "-bar")
    //         .attr("height", 0)
    //         .attr("x",(d,index)=>this.graphWidth/(shopData.length-1)*index+(dataAttr.xMoreShift?this.sizeParams.width:0))
    //         .attr("y",this.graphHeight)
    //         .attr("fill",dataAttr.graphColor)
    //         .transition()
    //         .duration(dataAttr.duration)
    //         .delay((d,i)=>10*i)
    //         .attr("height",(d)=>d)
    //         .attr("y",(d)=>{return this.graphHeight-d})
    // }

    // drawGraphLine = (graph, data_name) => {
    //     let shopData = this.props.data;
    //     let dataAttr = this.props.stateData.graphData[data_name];
    //     let line = d3.line().curve(d3.curveCatmullRom)
    //         .x((d,index) =>this.graphWidth/(shopData.length-1)*index+this.sizeParams.width)
    //         .y((d)=>this.graphHeight-d);
    //     let gLine = graph.append('g').attr("id","g-"+data_name).attr("display",dataAttr.display).attr("class",dataAttr.class);
    //     gLine.append("path")
    //         .datum(shopData.map((oneDayData)=>{return this.scaleFun[dataAttr.barCategory](oneDayData.price_per_order)}))
    //         .attr("class"," shop_data-" + data_name + "-line")
    //         .attr("fill", "none")
    //         .attr("stroke", dataAttr.graphColor)
    //         .attr("stroke-linejoin", "round")
    //         .attr("stroke-linecap", "round")
    //         .attr("stroke-graphWidth", 1.5)
    //         .attr("d", line);
    // }
    //
    // drawGraphText = (text, data_name) => {
    //     let shopData = this.props.data;
    //     let dataAttr = this.props.stateData.graphData[data_name];
    //     let gText = text.append('g').attr("id","g-"+data_name+"-text").attr("display",dataAttr.showText).attr("class",dataAttr.class + " text");
    //     gText.selectAll("text")
    //         .data(shopData.map((oneDayData)=>{return this.scaleFun[dataAttr.barCategory](oneDayData[data_name])}))
    //         .enter().append("text")
    //         .attr("class","shop_data-" + data_name + "-text")
    //         .attr("x",(d,index)=>this.graphWidth/(shopData.length-1)*index+(dataAttr.xMoreShift?this.sizeParams.width:0))
    //         .attr("y",(d)=>dataAttr.yMoreShift=="bottom"?this.graphHeight:this.graphHeight-d+dataAttr.yMoreShift)
    //         .transition()
    //         .delay((d,i)=>750+30*i)
    //         .text((d,index)=>{return parseFloat(shopData[index][data_name]).toFixed(dataAttr.precision)})
    //         .attr("font-size",this.sizeParams.text);
    // }



}

