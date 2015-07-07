$('#scatter-form').on('submit', function(event){
    event.preventDefault();
    min = $("#min").val();
    max = $("#max").val();
   	//nos = $("#number_of_series").val();
    graphTitle = $("#graph_title").val();
    scatter(min, max, csrftoken, graphTitle);
});

function csrfSafeMethod(method) {
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    
});

function scatter(min, max, csrftoken, graphTitle) {
    $.ajax({
        url : "/graph/generate/data/", // url
        type : "POST", // method
        data : { min : min, max:max, nos:1}, // min, max, number of series
        beforeSend: function(xhr, settings) {
        	if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            	xhr.setRequestHeader("X-CSRFToken", csrftoken);
        	}
    	},	

        success : function(json) {
        	chart = new Array();
        	part = new Array();
        	arr = JSON.parse(json)
            for (i=0; i<arr[0]['data'].length; i++){
            	for(j=0; j<arr[0]['data'][i].length;j++){
            		part.push(arr[0]['data'][i][j]);
            	}
            }
            for (i=0; i<part.length; i++){
            	chart[i] = new Array();
            	chart[i].push(Date.parse(part[i][0]));
            	chart[i].push(part[i][1]);
            }

            $('#scatter').highcharts({
        		chart: {
        		    type: 'scatter',
        		    zoomType: 'xy'
        		},
        		title: {
        		    text: graphTitle
        		},
        		xAxis: {
        		    type: 'datetime',
        		    dateTimeLabelFormats: {
                		day: '%e. %b',
						month: '%b \'%y',
						year: '%Y'
            		}	
        		},
        		yAxis: {
        		    title: {
        		        text: 'Date'
        		    }
        		},
        		legend: {
        		    layout: 'vertical',
        		    align: 'left',
        		    verticalAlign: 'top',
        		    x: 100,
        		    y: 70,
        		    floating: true,
        		    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
        		    borderWidth: 1
        		},
        		plotOptions: {
        		    scatter: {
        		        marker: {
        		            radius: 5,
        		            states: {
        		                hover: {
        		                    enabled: true,
        		                    lineColor: 'rgb(100,100,100)'
        		                }
        		            }
        		        },
        		        states: {
        		            hover: {
        		                marker: {
        		                    enabled: false
        		                }
        		            }
        		        },
        		        tooltip: {
        		            headerFormat: '<b>{series.name}</b><br>',
        		            xDateFormat: '%Y-%m-%d',
        		            shared: true,
        		            pointFormat: 'date: {point.x:%Y-%m-%d}, value: {point.y}'
        		        }
        		    }
        		},
        		series: [{
        		    color: 'rgba(223, 83, 83, .5)',
        		    data: chart
        		}]
    		});
    		
        },

        error : function(xhr,errmsg,err) {
            
            console.log(xhr.status + ": " + xhr.responseText); 
        }
    });
};

$('#line-form').on('submit', function(event){
    event.preventDefault();
    min = $("#min").val();
    max = $("#max").val();
   	//nos = $("#number_of_series").val();
    graphTitle = $("#graph_title").val();
    line(min, max, csrftoken, graphTitle);
});

function csrfSafeMethod(method) {
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    
});

function line(min, max, csrftoken, graphTitle) {
    $.ajax({
        url : "/graph/generate/data/", // url
        type : "POST", // method
        data : { min : min, max:max, nos:1}, // min, max, number of series
        beforeSend: function(xhr, settings) {
        	if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            	xhr.setRequestHeader("X-CSRFToken", csrftoken);
        	}
    	},	

        success : function(json) {
        	chart = new Array();
        	part = new Array();
        	arr = JSON.parse(json)
            for (i=0; i<arr[0]['data'].length; i++){
            	for(j=0; j<arr[0]['data'][i].length;j++){
            		part.push(arr[0]['data'][i][j]);
            	}
            }
            for (i=0; i<part.length; i++){
            	chart[i] = new Array();
            	chart[i].push(Date.parse(part[i][0]));
            	chart[i].push(part[i][1]);
            }

            $('#line').highcharts({
        		chart: {
        		    type: 'line',
        		    zoomType: 'xy'
        		},
        		title: {
        		    text: graphTitle
        		},
        		xAxis: {
        		    type: 'datetime',
        		    dateTimeLabelFormats: {
                		day: '%e. %b',
						month: '%b \'%y',
						year: '%Y'
            		}	
        		},
        		yAxis: {
        		    title: {
        		        text: 'Date'
        		    }
        		},
        		legend: {
        		    layout: 'vertical',
        		    align: 'left',
        		    verticalAlign: 'top',
        		    x: 100,
        		    y: 70,
        		    floating: true,
        		    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
        		    borderWidth: 1
        		},
        		plotOptions: {
        		    scatter: {
        		        marker: {
        		            radius: 5,
        		            states: {
        		                hover: {
        		                    enabled: true,
        		                    lineColor: 'rgb(100,100,100)'
        		                }
        		            }
        		        },
        		        states: {
        		            hover: {
        		                marker: {
        		                    enabled: false
        		                }
        		            }
        		        },
        		        tooltip: {
        		            headerFormat: '<b>{series.name}</b><br>',
        		            xDateFormat: '%Y-%m-%d',
        		            shared: true,
        		            pointFormat: 'date: {point.x:%Y-%m-%d}, value: {point.y}'
        		        }
        		    }
        		},
        		series: [{
        		    data: chart
        		}]
    		});
    		
        },

        error : function(xhr,errmsg,err) {
            
            console.log(xhr.status + ": " + xhr.responseText); 
        }
    });
};