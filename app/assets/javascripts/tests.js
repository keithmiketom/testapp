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
            
            // add COding words nad phrases qs
             //build
              $('#chart55container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Do you have significant knowledge on any of the following computer languages, tools or terminology?'
        },
        subtitle: {
            text: 'Part 1'
        },
        xAxis: {
            categories: [
                '(X)HTML',
                'CSS',
                'Sass/LESS',
                'JavaScript',
                'jQuery',
                'Angular.js',
                'Node.js',
                'CoffeeScript',
                'Scratch',
                'Perl',
                'PHP/Wordpress',
                'Drupal',
                'Cloud',
                'Jade',
                'Haml'
                
                
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
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
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
            name: 'Very Insignificant',
            data: [13, 26, 31, 19, 32, 34, 33, 34, 26, 34, 17, 35, 14, 35, 36 ]

        }, {
            name: 'Insignificant',
            data: [11, 13, 17, 6, 15, 17, 18, 17, 14, 17, 9, 16, 4, 17, 16]

        }, {
            name: 'Neutral',
            data: [15, 11, 11, 19, 10, 7, 7, 6, 13, 7, 15, 7, 14, 6, 7 ]

        },{
            name: 'Significant',
            data: [17, 7, 0, 13, 2, 1, 1, 4, 1, 14, 0, 16, 1, 0 ]

        }, {
            name: 'Very Significant',
            data: [3, 2, 0, 2, 0, 0, 0, 0, 2, 0, 4, 1, 11, 0, 0 ]

        }]
    });
  //build
              $('#chart56container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Do you have significant knowledge on any of the following computer languages, tools or terminology?'
        },
        subtitle: {
            text: 'Part 2'
        },
        xAxis: {
            categories: [
                'C#',
                'Objective-C',
                'C++',
                'Python',
                'Ruby/Rails',
                'MySQL',
                'Java',
                'Visual Basic',
                'ASP.NET',
                'Azure',
                'Git',
                'Subversion',
                'Scala'
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
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
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
            name: 'Very Insignificant',
            data: [36, 34, 34, 34, 34, 32, 19, 19, 34, 33, 31, 34, 33 ]

        }, {
            name: 'Insignificant',
            data: [13, 14, 13, 16, 18, 16, 8, 14, 14, 16, 15, 17, 18]

        }, {
            name: 'Neutral',
            data: [9, 11, 10, 8, 7, 10, 18, 12, 8, 8, 11, 7, 7]

        },{
            name: 'Significant',
            data: [1, 0, 0, 1, 0, 1, 11, 2, 2, 1, 1, 0, 0 ]

        }, {
            name: 'Very Significant',
            data: [0, 0, 2, 0, 0, 0, 3, 2, 1, 1, 1, 1, 1]

        }]
    });

            //here
            //build
              $('#chart35container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'What do you associate the following words and phrases with:'
        },
        subtitle: {
            text: 'Part 1'
        },
        xAxis: {
            categories: [
                'Problem Solving',
                'Literacy Development',
                'Numeracy Development',
                'Logical Analysis',
                'Mathematical Skills',
                'Scientific Analysis',
                'Brief Design',
                'Providing Solutions',
                'Creativity',
                'Confidence Building',
                'Team Work',
                'Project Management'
                
                
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
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
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
            name: 'Just Science/Computing',
            data: [1, 3, 12, 19, 15, 45, 0, 1, 0, 0, 2, 5]

        }, {
            name: 'Both',
            data: [60, 65, 51, 52, 59, 30, 50, 72, 53, 58, 61, 59 ]

        }, {
            name: 'Just Art/Design',
            data: [15, 2, 2, 5, 2, 0, 25, 3, 23, 17, 11, 9]

        }, {
            name: 'None',
            data: [0, 6, 1, 0, 0, 1, 1, 0, 0, 1, 2 ,3 ]

        }]
    });
  //build
              $('#chart36container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'What do you associate the following words and phrases with'
        },
        subtitle: {
            text: 'Part 2'
        },
        xAxis: {
            categories: [
                'Tools for Communication',
                'Self Expression',
                'Valued by Society',
                'Worthwhile',
                'Hard to Learn',
                'Must be born with skills',
                'Useful to Society',
                'Important to Learn',
                'Neccessary for wholistic development',
                'Increases Vocabulary',
                'Improves writing skills',
                'Caters to a variety of learners'
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
            name: 'Just Science/Computing',
            data: [1, 0, 39, 1, 20, 2, 2, 2, 0, 1, 7, 1 ]

        }, {
            name: 'Both',
            data: [62, 28, 34, 70, 30, 8, 73, 71, 50, 68, 49, 60 ]

        }, {
            name: 'Just Art/Design',
            data: [12, 48, 2, 4, 1, 10, 0, 2, 21, 4, 8, 13 ]

        }, {
            name: 'None',
            data: [1, 0 , 1, 1, 29, 56, 1, 1, 5, 3, 12, 2 ]

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
              //
              $('#chart9container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'What primary subject(s), do your colleagues teaching computers teach in your school?'
        },
        subtitle: {
            text: 'Detailed Column Chart overall'
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
            name: 'Total',
            data: [22, 31, 28, 3, 5, 4, 3, 5, 4, 18, 4, 30, 22, 14 ]

          }]
    });
              //
              $('#chart91container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'What primary subject(s), do your colleagues teaching computers teach in your school?'
        },
        subtitle: {
            text: 'Detailed Column Chart by career length'
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
        series: [ {
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
    
    // pie chart above chart
    // Build the chart
            $('#chart11container').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'What primary subject(s), do your colleagues teaching computers teach in your school?'
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
                    name: 'What primary subject(s), do your colleagues teaching computers teach in your school?',
                    data: [
                        
                        ['Science',    11.4],
                        ['Maths',    16.06],
                        ['Business',   14.51],
                        ['Irish',     1.55],
                        ['English', 2.59],
                        ['MFL',     2.07],
                        ['History',   1.55],
                        ['Geography',     2.59],
                        ['Religion',     2.07],
                        ['Technology',     9.33],
                        ['Music',     2.07],
                        ['DGC',   15.54],
                        ['Art/Craft/Design',   11.4],
                        ['Other',   7.25]
                        
                    ]
                }]
            });
    
     // Build the chart
        $('#chart16container').highcharts({
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
        
             // Build the chart
              $('#chart10container').highcharts({
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
              
           
        //next
         $('#chart12container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'How effective do you feel the following tools would be to learning Programming and Coding (ICT) - mark out of 5?'
        },
        subtitle: {
            text: 'Source: ATAI Survey'
        },
        xAxis: {
            categories: [
                'Self-taught Material',
                'Video Tutorials',
                'Online work thread',
                'Downloadable Content',
                'Group Forum',
                'Profile with badges/rewards',
                'Links to advanced content',
                'Progress Tracking',
                'Commenting'
                
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
            name: '1 Star',
            data: [6, 3, 4, 2, 5, 11, 3, 4, 6 ]

        },{
            name: '2 Stars',
            data: [4, 3, 8, 6, 6, 7, 4, 7, 6 ]

        },{
            name: '3 Stars',
            data: [14, 7, 12, 8, 8, 13, 11, 9, 13 ]

        },{
            name: '4 Stars',
            data: [16, 8, 16, 19, 12, 8, 15, 14, 13 ]

        },{
            name: '5 Stars',
            data: [9, 28, 9, 14, 18, 7, 16, 12, 10 ]

        }]
       
    });
           //
           $('#chart12container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'How effective do you feel the following tools would be to learning Programming and Coding (ICT) - mark out of 5?'
        },
        subtitle: {
            text: 'Source: ATAI Survey'
        },
        xAxis: {
            categories: [
                'Self-taught Material',
                'Video Tutorials',
                'Online work thread',
                'Downloadable Content',
                'Group Forum',
                'Profile with badges/rewards',
                'Links to advanced content',
                'Progress Tracking',
                'Commenting'
                
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
            name: '1 Star',
            data: [6, 3, 4, 2, 5, 11, 3, 4, 6 ]

        },{
            name: '2 Stars',
            data: [4, 3, 8, 6, 6, 7, 4, 7, 6 ]

        },{
            name: '3 Stars',
            data: [14, 7, 12, 8, 8, 13, 11, 9, 13 ]

        },{
            name: '4 Stars',
            data: [16, 8, 16, 19, 12, 8, 15, 14, 13 ]

        },{
            name: '5 Stars',
            data: [9, 28, 9, 14, 18, 7, 16, 12, 10 ]

        }]
       
    });
           //
           $('#chart13container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'How do you feel you engage with the following types of learning methods?'
        },
        subtitle: {
            text: '-'
        },
        xAxis: {
            categories: [
                'Self-Taught',
                'Instructed Class',
                'Video Content',
                'Online Workbook',
                'Online Tutorial',
                'Peer Led Initiatives',
                'One-on-one Tuition',
                'Group Forums',
                'CPD/Inservice',
                'Books/Guides',
                'Physical Workshop',
                'Online Workshop'
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
            data: [2, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 2 ] 

        }, {
            name: 'Disagree',
            data: [2, 0, 1, 7, 6, 1, 0, 3, 3, 8, 1, 7 ]

        }, {
            name: 'Neutral',
            data: [11, 4, 6, 15, 10, 8, 1, 13, 11, 14, 2, 11]

        }, 
        {
            name: 'Agree',
            data: [21, 20, 19, 22, 28, 26, 22, 18, 21, 22, 23]

        }, {
            name: 'Strongly Agree',
            data: [12, 23, 7, 5, 10, 10, 20, 8, 14, 4, 24, 5 ]

        }]
    });
    //next
    });

});

//Cesi Data//      