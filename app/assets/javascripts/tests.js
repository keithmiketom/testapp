 $(function () {

    $(document).ready(function () {

        // Build the chart
        $('#chartcontainer').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'What would best describe the length of your professional teaching career to date?'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Career Length',
                data: [
                    ['20+ Years',   17.31],
                    {
                        name: '0-5 Years NQT',
                        y: 29.81,
                        sliced: true,
                        selected: true
                    },
                    ['5-10 Years',    28.85],
                    ['10-15 Years',     7.69],
                    ['15-20 Years',   16.35]
                ]
            }]
        });
        // Build the chart
        $('#chart2container').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'What would best describe the length of your professional teaching career to date?'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Career Length',
                data: [
                    ['20+ Years',   17.31],
                    {
                        name: '0-5 Years NQT',
                        y: 29.81,
                        sliced: true,
                        selected: true
                    },
                    ['5-10 Years',    28.85],
                    ['10-15 Years',     7.69],
                    ['15-20 Years',   16.35]
                ]
            }]
        });

    });

});