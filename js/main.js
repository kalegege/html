/**
 * Created by kale on 2017/3/9.
 */
function start() {
    d3.select("body")
        .append("p")
        .text("load text with d3.js! today");
}
function echarts() {
    var myChart=echarts.init(document.getElementById('main'));
    var option={
        title:{
            text:'Echarts '
        },
        tooltip:{},
        legend:{
            data:['销量','GDP'],
            selected:{
                '销量':true,
                'GDP':false
            }
        },
        xAxis:{
            data:['shirt','blouse','t-shirt','jean']
        },
        yAxis:{},
        dataZoom:[{
            type:'slider',
            start:10,
            end:60
        },{
            type:'inside',
            start:10,
            end:60
        }],
        series:[{
            name:'销量',
            type:'bar',
            data:[12,85.199,1]
        },{
            name:'GDP',
            type:'bar',
            data:[12,6.2,1]
        }]
    };
    myChart.setOption(option);
    myChart.on('click',function (params) {
        console.log(params.name);
    })
}
function svgExample() {
    var canvas=d3.select("body")
        .append("svg")
        .attr("width",700)
        .attr("height",700);
    
    var circle=canvas.append("circle")
        .attr("cx",10)
        .attr("cy",10)
        .attr("r",50)
        .attr("fill","blue");

    var rectangle=canvas.append("rect")
        .attr("width",500)
        .attr("height",200);

    var line =canvas.append("line")
        .attr("x1",0)
        .attr("x2",200)
        .attr("y1",200)
        .attr("y2",600)
        .attr("stroke","grey")
        .attr("stroke-width",5);
}
