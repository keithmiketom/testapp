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
            // Build
            $('#chart4container').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'What ICT Skills do you have/tools can you use? '
            },
            subtitle: {
                text: 'Source: ATAI Survey'
            },
            xAxis: {
                categories: [
                    'Photo Manupulation',
                    'Vector based ',
                    'Animation Tools',
                    'WYSIWYG editors',
                    'Coding tools',
                    'Office tools',
                    'Edmodo/Moodle',
                    'IDE'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Response'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Strongly Disagree',
                data: [0, 9, 4, 14, 23, 1, 2, 20]
    
            }, {
                name: 'Disagree',
                data: [2, 14, 8, 18, 19, 0, 7, 24]
    
            }, {
                name: 'Aware of but not used',
                data: [12, 25, 26, 15, 14, 0, 10, 11]
    
            },{
                name: 'Agree',
                data: [32, 6, 15, 9, 2, 17, 19, 3]
    
            }, {
                name: 'Strongly Agree',
                data: [13, 5, 6, 3, 1, 41, 21, 1]
    
            }]
        });
        // Build the chart
        $('#chart5container').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Are you registerd to teach this second subject with teaching council?'
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
                name: 'Are you registerd to teach this second subject with teaching council?',
                data: [
                    ['No',   43.18],
                    ['Don\'t know', 15.91 ],
                    ['Yes', 40.91]
                    
                ]
            }]
        });
        // Build the chart
        $('#chart6container').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Are you aware of the NCCA Draft Syllabus in Programming and coding?'
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
                name: 'Are you aware of the NCCA Draft Syllabus in Programming and coding?',
                data: [
                    ['No',   77.59],
                    ['Yes', 22.41]
                ]
            }]
        });
        // Build the chart
            $('#chart7container').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'What areas of ICT are currently taught in your school?'
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
                    name: 'What areas of ICT are currently taught in your school?',
                    data: [
                        ['Digital Media Literacy',   21.62],
                        ['Programming and Coding',    5.41],
                        ['Scratch/CoderDojo',    6.76],
                        ['AUTOCAD',   13.51],
                        ['Digital Graphics',     12.84],
                         {
                            name: 'ECDL',
                            y: 33.78,
                            sliced: true,
                            selected: true
                        },
                        ['Don\'t know',   6.08]
                        
                    ]
                }]
            });


        // Build the chart
              $('#chart8container').highcharts({
                  chart: {
                      plotBackgroundColor: null,
                      plotBorderWidth: null,
                      plotShadow: false
                  },
                  title: {
                      text: 'Do you feel you could teach Programming and Coding at second Level, based on the draft NCCA Syllabus?'
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
                      name: 'Do you feel you could teach Programming and Coding at second Level, based on the draft NCCA Syllabus?',
                      data: [
                          ['No',   22.81],
                          ['Yes - with help and training', 68.42 ],
                          ['Yes', 8.77]
                          
                      ]
                  }]
              });
              
              $('#chart9container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'What primary subject(s), do your colleagues teaching computers teach in your school?'
        },
        subtitle: {
            text: 'Source: ATAI Survey'
        },
        xAxis: {
            categories: [
                'Science',
                'Maths',
                'Business',
                'Irish',
                'English',
                'MFL',
                'History',
                'Geography',
                'Religion',
                'Technology',
                'Music',
                'DCG',
                'Art/Design',
                'Other'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Respondents'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Total',
            data: [22, 31, 28, 3, 5, 4, 3, 5, 4, 18, 4, 30, 22, 14 ]

        }, {
            name: '0-5',
            data: [3, 6, 7, 1, 1, 0, 0, 0, 0, 4, 1, 7, 7, 1]

        }, {
            name: '5-10',
            data: [7, 10, 8, 0, 2, 3, 2, 2, 2, 6, 2, 8, 7, 5]

        },{
            name: '10-15',
            data: [2, 2, 3, 0, 0, 1, 1, 1, 1, 2, 0, 4, 1, 3]

        },        {
            name: '15+',
            data: [10, 13, 10, 2, 2, 0, 0, 2, 1, 6, 11, 7, 5]

        }]
    });
     // Build the chart
        $('#chart10container').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Do you feel being able to teach programming and coding (ICT) would make an art teacher more employable?'
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
                name: 'Do you feel being able to teach programming and coding (ICT) would make an art teacher more employable?',
                data: [
                    ['No',   16.33],
                    ['No Opinion',   12.24],
                    {
                        name: 'Yes',
                        y: 71.43,
                        sliced: true,
                        selected: true
                    }
                ]
            }]
        });
        //next
          
    });

});