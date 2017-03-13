/**
 * Created by kale on 2017/3/9.
 */
function start() {
    d3.select("body")
        .append("p")
        .text("load text with d3.js! today");
}
function echarts1() {
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        title: {
            text: 'Echarts '
        },
        tooltip: {},
        legend: {
            data: ['销量', 'GDP'],
            selected: {
                '销量': true,
                'GDP': false
            }
        },
        xAxis: {
            data: ['shirt', 'blouse', 't-shirt', 'jean']
        },
        yAxis: {},
        dataZoom: [{
            type: 'slider',
            start: 10,
            end: 60
        }, {
            type: 'inside',
            start: 10,
            end: 60
        }],
        series: [{
            name: '销量',
            type: 'bar',
            data: [12, 85.199, 1]
        }, {
            name: 'GDP',
            type: 'bar',
            data: [12, 6.2, 1]
        }]
    };
    myChart.setOption(option);
    myChart.on('click', function (params) {
        console.log(params.name);
    })
}
function svgExample() {
    var canvas = d3.select("body")
        .append("svg")
        .attr("width", 700)
        .attr("height", 700);

    var circle = canvas.append("circle")
        .attr("cx", 10)
        .attr("cy", 10)
        .attr("r", 50)
        .attr("fill", "blue");

    var rectangle = canvas.append("rect")
        .attr("width", 500)
        .attr("height", 200);

    var line = canvas.append("line")
        .attr("x1", 0)
        .attr("x2", 200)
        .attr("y1", 200)
        .attr("y2", 600)
        .attr("stroke", "grey")
        .attr("stroke-width", 5);
}

function visualizeOranges() {
    var orangeData = [10, 30, 50, 100];

    var canvas = d3.select(".orangeContainer")
        .append("svg")
        .attr("width", 768)
        .attr("height", 1024)

    var oranges = canvas.selectAll("circle")
        .data(orangeData)
        .enter()
        .append("circle")
        .attr("fill", "orange")
        .attr("cx", function (d, i) {
            return d + (i * 100);
        })
        .attr("cy", function (d) {
            return d;
        })
        .attr("r", function (d) {
            return d;
        });
}

function scaling() {
    var graphData = [10, 1200],
        w = 200,
        h = 800;

    var scaling = d3.scaleLinear()
        .domain([0, 1200])
        .range([0, w]);

    var canvas = d3.select(".graphContainer")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    var graphBars = canvas.selectAll("rect")
        .data(graphData)
        .enter()
        .append("rect")
        .attr("fill", "pink")
        .attr("width", function (d) {
            return scaling(d);
        })
        .attr("height", 20)
        .attr("y", function (d, i) {
            return i * 50;
        })
}

function axisGroups() {
    var graphData = [10, 1200],
        w = 500,
        h = 800;


    var scaling = d3.scaleLinear()
        .domain([0, 1200])
        .range([0, w]);

    var axis = d3.axisBottom()
        .ticks(5)
        .scale(scaling);

    var canvas = d3.select(".graphContainer")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .append("g")
        .attr("transform", "translate(20,50)");

    var graphBars = canvas.selectAll("rect")
        .data(graphData)
        .enter()
        .append("rect")
        .attr("fill", "pink")
        .attr("width", function (d) {
            return scaling(d);
        })
        .attr("height", 20)
        .attr("y", function (d, i) {
            return i * 50;
        });

    canvas.append("g")
        .attr("transform", "translate(0,200)")
        .call(axis);
}

function enterExamlpes() {
    var Data = [200, 100],
        w = 800,
        h = 600;
    var canvas = d3.select(".graphContainer")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    var box = canvas.append("rect")
        .attr("width", 300)
        .attr("height", 300)
        .attr("fill", "red");

    var boxes = canvas.selectAll("rect")
        .attr("fill", "purple")
        .exit()
        .data(Data)
    /*.enter()
     .append("rect")
     .attr("width",function (d) {
     return d;
     })
     .attr("height",function (d) {
     return d;
     })
     .attr("fill","grey")
     .attr("stroke","black");*/
}

function transitions() {
    var w = 800,
        h = 600;

    var canvas = d3.select(".transitionsContainer")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    var rect = canvas.append("rect")
        .attr("width", 100)
        .attr("height", 100)
        .attr("fill", "red");

    var circle = canvas.append("circle")
        .attr("cx", 50)
        .attr("cy", 200)
        .attr("r", 50)
        .attr("fill", "blue");

    circle.transition()
        .duration(2000)
        .delay(4000)
        .attr("cx", 200)
        .on("end", function () {
            d3.select(this)
                .attr("fill", "orange");
        });

    rect.transition()
        .duration(3000)
        .delay(2000)
        .attr("width", 200)
        .attr("transform", "translate(200,0)")
        .transition()
        .attr("transform", "translate(200,200)")

}