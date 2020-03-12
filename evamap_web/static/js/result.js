var result = new Vue({
    el: '#result',
    data: {
        total_result: total_score,
        detailed_results: detailed_result
    },
    methods: {
        get_color: function(score) {
            if (score <= 1) {
                score = score * 100;
            }
            if (score >= 80) {
                return '#00c7b1';
            } else if (score >= 40) {
                return '#efb71b';
            }
            return '#ce0037';
        },
        get_color_bar: function(score) {
            if (score <= 1) {
                score = score * 100;
            }
            if (score >= 80) {
                return {
                    borderColor: "rgba(0, 199, 177, 1)",
                    backgroundColor: "rgba(0, 199, 177, 0.2)",
                    hoverBackgroundColor: "rgba(0, 199, 177, 0.3)"
                };
            } else if (score >= 40) {
                return {
                    borderColor: "rgba(239, 183, 27, 1)",
                    backgroundColor: "rgba(239, 183, 27, 0.2)",
                    hoverBackgroundColor: "rgba(239, 183, 27, 0.3)"
                };
            }
            return {
                borderColor: "rgba(206, 0, 55, 1)",
                backgroundColor: "rgba(206, 0, 55, 0.2)",
                hoverBackgroundColor: "rgba(206, 0, 55, 0.3)"
            };
        },
        get_icon: function(dimension_name) {
            switch (dimension_name) {
                case 'Connectability':
                    return 'fab fa-connectdevelop';
                case 'Clarity':
                    return 'fas fa-glasses';
                case 'Consistency':
                    return 'fas fa-brain';
                case 'Availability':
                    return 'far fa-handshake';
                case 'Conciseness':
                    return 'fas fa-compress-arrows-alt';
                case 'Coverability':
                    return 'fas fa-table';
                default:
                    return 'fas fa-star';
            }
        },
        init: function() {
            var labels = [];
            var dataset = [];
            var border_colors = [];
            var background_colors = [];
            var hover_background_colors = [];
            for (var i = 0; i < this.detailed_results.length; i++) {
                labels.push(this.detailed_results[i].name);
                dataset.push(this.detailed_results[i].score * 100);
                var colors = this.get_color_bar(this.detailed_results[i].score);
                border_colors.push(colors.borderColor);
                background_colors.push(colors.backgroundColor);
                hover_background_colors.push(colors.hoverBackgroundColor);
            }
            var data = {
                labels: labels,
                datasets: [{
                    data: dataset,
                    borderColor: border_colors,
                    backgroundColor: background_colors,
                    hoverBackgroundColor: hover_background_colors,
                    borderWidth: 1
                }]
            };
            var options = {
                scales: {
                    xAxes: [{
                        gridLines: {
                            offsetGridLines: true
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            max: 100,
                            min: 0,
                            callback: function(tick) {
                                return tick.toString() + '%';
                            }
                        }
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var label = data.datasets[tooltipItem.datasetIndex].label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += Math.round(tooltipItem.yLabel * 100) / 100 + '%';
                            return label;
                        }
                    }
                }
            };
            var myBarChart = new Chart(ctx, {
                type: 'bar',
                data: data,
                options: options
            });
        }
    },
    mounted: function(){
        this.init();
    }
});