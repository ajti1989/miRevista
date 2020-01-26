am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdivVisit", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();
    
    // Add data
    chart.data = [{
      "mes": "Enero",
      "visits": 9025
    }, {
      "mes": "Febrero",
      "visits": 9882
    }, {
      "mes": "Marzo",
      "visits": 10809
    }, {
      "mes": "Abril",
      "visits": 9322
    }, {
      "mes": "Mayo",
      "visits": 8122
    }, {
      "mes": "Junio",
      "visits": 7114
    }, {
      "mes": "Julio",
      "visits": 5984
    }, {
      "mes": "Agosto",
      "visits": 4345
    }, {
      "mes": "Septiembre",
      "visits": 8454
    }, {
      "mes": "Octubre",
      "visits": 10454
    }, {
      "mes": "Noviembre",
      "visits": 7434
    }, {
      "mes": "Diciembre",
      "visits": 6983
    }];
    
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "mes";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;
    
    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "mes";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;
    
    series.tooltip.pointerOrientation = "vertical";
    
    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;
    
    // on hover, make corner radiuses bigger
    var hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;
    
    series.columns.template.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
    
    // Cursor
    chart.cursor = new am4charts.XYCursor();
    
    }); // end am4core.ready()