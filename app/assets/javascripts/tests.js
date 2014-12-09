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
                text: 'Do you teach a second Subject?'
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
                name: 'Do you teach a second subject?',
                data: [
                    ['No',   44.74],
                    {
                        name: 'Yes',
                        y: 55.26,
                        sliced: true,
                        selected: true
                    }
                ]
            }]
        });
        // Build the chart
        $('#chart3container').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'If you teach a second subject, what do you teach?'
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
                name: 'Second Subject',
                data: [
                    ['History',   2.78],
                    {
                        name: 'SPHE',
                        y: 21.30,
                        sliced: true,
                        selected: true
                    },
                    ['Technical Graphics',    0.93],
                    ['ICT CoderDojo',    0],
                    ['ICT Coding',   1.85],
                    ['ICT ECDL',     5.56],
                    ['Religion',   2.78],
                    ['ICT Digital Art',     12.96],
                     {
                        name: 'CSPE',
                        y: 19.44,
                        sliced: true,
                        selected: true
                    },
                    ['ICT Digital Cre8or',   0.93],
                    ['Resource/LS',     15.74],
                    ['DGC',   2.78],
                    ['Other',   7.41]
                    
                ]
            }]
        });

    });

});