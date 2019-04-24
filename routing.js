var graph = new DirectedGraph(); //Required by connector
var INFINITY = 1 / 0;
var x_path = [];

var cities = ["Milwaukee", "Madison", "Chicago", "South Bend", "Detroit",
              "Toledo", "Columbus", "Pittsburgh", "Niagara Falls", "Boston",
              "New York", "Atlantic City", "Baltimore", "Charleston",
              "Jacksonville", "Orlando", "Miami", "Tampa", "Atlanta",
              "Nashville", "Louisville", "Cincinnati", "Indianapolis",
              "St. Louis", "Memphis", "New Orleans", "Houston", "Austin",
              "El Paso", "Tucson", "San Diego", "Los Angeles", "San Jose",
              "San Francisco", "Sacramento", "Portland", "Seattle",
              "Anchorage", "Las Vegas", "Salt Lake City", "Phoenix",
              "Denver", "Albuquerque", "Kansas City", "Omaha", "Des Moines",
              "Iowa City", "Minneapolis", "Mount Rushmore", "Yellowstone",
              "Oklahoma City", "Grand Canyon"];


function route_setup(){

    var start_point_name = document.getElementById("start_point").value;
    var end_point_name = document.getElementById("end_point").value;

    var trip_cost = parseInt(document.getElementById("trip_cost").value);
    var trip_duration = parseInt(document.getElementById("trip_duration").value);

    var start_point = null;
    var end_point = null;
    for (var i = 0; i < cities.length; i++) {
      if (start_point_name == cities[i]){
        start_point = i;
      }
    }
    for (var i = 0; i < cities.length; i++) {
      if (end_point_name == cities[i]){
        end_point = i;
      }
    }

    var city_names = [];

    connector();
    console.log("crossed conn");
    var out = djikstra(graph, start_point);
    console.log("crossed djikstra");
    for (i = 0; i < data.features.length; i++) {
        for (j = 0; j < out.shortestPaths[end_point].length; j++) {
            if (String(i) == out.shortestPaths[end_point][j]) {
                var x_i = i;
                x_path.push({
                    lat: data.features[x_i].geometry.coordinates[1],
                    lng: data.features[x_i].geometry.coordinates[0]
                });
                city_names.push(cities[x_i]);
            }
        }
    }
    x_path.push({
        lat: data.features[end_point].geometry.coordinates[1],
        lng: data.features[end_point].geometry.coordinates[0]
    });
    city_names.push(cities[end_point]);

    var constraints = [trip_cost, trip_duration];

    return [x_path, constraints, city_names];
}

function DirectedGraph() {
    this.vertices = {};
    this.addVertex = function(name, edges) {
        edges = edges || null;
        this.vertices[name] = edges;
    };
}

function djikstra(graph, startVertex) {
    var dist = {};
    var prev = {};
    var q = {};
    var shortestPaths = {};

    for (var vertex in graph.vertices) {
        dist[vertex] = INFINITY;
        prev[vertex] = null;
        q[vertex] = graph.vertices[vertex];
        shortestPaths[vertex] = [];
    }

    dist[startVertex] = 0;

    while (Object.keys(q).length !== 0) {
        var smallest = findSmallest(dist, q);
        var smallestNode = graph.vertices[smallest];
        //searches for the vertex u in the vertex set Q that has the least dist[smallest] value.

        for (var neighbor in smallestNode) {
            var alt = dist[smallest] + smallestNode[neighbor];
            //smallestNode[neighbor] is the distance between smallest and neighbor
            if (alt < dist[neighbor]) {
                dist[neighbor] = alt;
                prev[neighbor] = smallest;
            }
        }
    }

    getShortestPaths(prev, shortestPaths, startVertex, dist);
    return {
        shortestPaths: shortestPaths,
        shortestDistances: dist
    };
}

function findSmallest(dist, q) {
    var min = Infinity;
    var minNode;

    for (var node in q) {
        if (dist[node] <= min) {
            min = dist[node];
            minNode = node;
        }
    }

    delete q[minNode];
    return minNode;
}

function getShortestPaths(previous, shortestPaths, startVertex, dist) {
    for (var node in shortestPaths) {
        var path = shortestPaths[node];

        while (previous[node]) {
            path.push(node);
            node = previous[node];
        }

        //gets the starting node in there as well if there was a path from it
        if (dist[node] === 0) {
            path.push(node);
        }
        path.reverse();
    }
}

function weight(a, b) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(b[1] - a[1]); // deg2rad below
    var dLon = deg2rad(b[0] - a[0]);
    var temp =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(a[1])) * Math.cos(deg2rad(b[1])) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(temp), Math.sqrt(1 - temp));
    var d = R * c; // Distance in km
    return Math.abs(d);
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}
