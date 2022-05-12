import ZoomCharts from '@dvsl/zoomcharts';

document.addEventListener('DOMContentLoaded', async () => {
  const exportData = document.getElementById('export');

  const data = {
        "nodes": [
            {
                          "id": "n1",
                          "loaded": true,
                          "style": {
                                            "label": "Node1"
                                        },
                          "resetCoordinates": false,
                          "resetLocked": false,
                          "x": 5.677291180632975,
                          "y": 157.89821055364224
                      },
            {
                          "id": "n2",
                          "loaded": true,
                          "style": {
                                            "label": "Node2"
                                        },
                          "resetCoordinates": false,
                          "resetLocked": false,
                          "x": 62.88490720742704,
                          "y": -36.148386429172454
                      },
            {
                          "id": "n3",
                          "loaded": true,
                          "style": {
                                            "label": "Node3"
                                        },
                          "resetCoordinates": false,
                          "resetLocked": false,
                          "x": -49.18120248475649,
                          "y": -39.10136945835826
                      }
        ],
        "links": [
            {
                          "id": "l1",
                          "from": "n1",
                          "to": "n2"
                      },
            {
                          "id": "l2",
                          "from": "n2",
                          "to": "n3"
                      },
                  {
                                "id": "l3",
                                "from": "n3",
                                "to": "n1"
                            }
              ]
  };

  const netChart = new ZoomCharts.NetChart({
    container: 'netchart',
    data: {
      preloaded: data
    },
    layout: {
    mode: 'static',
    }
  });

  exportData.addEventListener('click', () => {
    const dataset = netChart.exportData({
      exportCoordinates: true,
    })

    console.log(dataset);
  });
});
