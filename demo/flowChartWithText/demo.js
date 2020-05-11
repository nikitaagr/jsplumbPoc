var numberOfElements = 0;
var htmlBase = "drawingArea";
jsPlumb.ready(function () {
  //FIX DOM:
  $("#taskcontainer0")[0].innerHTML = $("#taskcontainer0")[0].innerHTML;
  $("#emailBoxContainer0")[0].innerHTML = $("#emailBoxContainer0")[0].innerHTML;
  $("#decisioncontainer0")[0].innerHTML = $("#decisioncontainer0")[0].innerHTML;
  $("#buttonBoxContainer0")[0].innerHTML = $(
    "#buttonBoxContainer0"
  )[0].innerHTML;
  $("#fileBoxContainer0")[0].innerHTML = $("#fileBoxContainer0")[0].innerHTML;
  jsPlumb.draggable($(".window"));

  jsPlumb.importDefaults({
    Endpoint: ["Dot", { radius: 8 }],
    EndpointStyle: { fillStyle: "#4A6" },
    HoverPaintStyle: { strokeStyle: "orange", lineWidth: 4 },
    PaintStyle: { strokeStyle: "#3ccfa0", lineWidth: 4 },
    Connector: ["Flowchart"],
    ConnectionOverlays: [
      [
        "Arrow",
        {
          location: 1,
          visible: true,
          width: 15,
          length: 15,
          id: "ARROW",
          events: {
            click: function () {
              alert("you clicked on the arrow overlay");
            },
          },
        },
      ],
    ],
  });

  var workflowConnectorStartpoint = {
    isSource: true,
    isTarget: false,
    maxConnections: 1,
    anchor: "BottomCenter",
  };

  var workflowConnectorEndpoint = {
    isSource: false,
    isTarget: true,
    maxConnections: -1,
    anchor: "TopCenter",
    paintStyle: { fillStyle: "red" },
    endpoint: ["Rectangle", { width: 12, height: 12 }],
  };

  jsPlumb.addEndpoint($(".startpoint"), workflowConnectorStartpoint);

  jsPlumb.addEndpoint($(".endpoint"), workflowConnectorEndpoint);

  $("#" + htmlBase).on("click", ".button_remove", function () {
    var parentnode = $(this)[0].parentNode.parentNode;
    jsPlumb.detachAllConnections(parentnode);
    jsPlumb.removeAllEndpoints(parentnode);
    $(parentnode).remove();
  });

  $(".cust_file").click(function () {
    addFile();
  });

  $(".button_add_task").click(function () {
    addTask();
  });

  $(".button_add_email").click(function () {
    addEmail();
  });

  $(".button_add_decision").click(function () {
    addDecision();
  });

  $(".cust_button").click(function () {
    addCustom();
  });

  $("#saveButton").click(function () {
    saveFlowchart();
  });

  $("#loadButton").click(function () {
    loadFlowchart();
  });
});

function addFile(id) {
  if (typeof id == "undefined") {
    numberOfElements++;
    id = "fileBoxContainer" + numberOfElements;
  }
  $(
    '<div class="window addfile node" id="' +
      id +
      '" data-nodetype = "addfile" style="left:30px; top:30px;">'
  )
    .appendTo("#" + htmlBase)
    .html($("#fileBoxContainer0")[0].innerHTML);
  var taskSourceConnectorEndpoint = {
    isSource: true,
    isTarget: false,
    maxConnections: 1,
    anchor: [0.5, 1, 0, 1, 0, 0, "task_end endpoint"],
  };

  var taskTargetConnectorEndpoint = {
    isSource: false,
    isTarget: true,
    maxConnections: 1,
    anchor: [0.5, 0, 0, -1, 0, 0, "task_end endpoint"],
    paintStyle: { fillStyle: "red" },
    endpoint: ["Rectangle", { width: 12, height: 12 }],
  };

  jsPlumb.addEndpoint($("#" + id), taskSourceConnectorEndpoint);

  jsPlumb.addEndpoint($("#" + id), taskTargetConnectorEndpoint);

  jsPlumb.draggable($("#" + id));
  return id;
}

function addCustom(id) {
  if (typeof id == "undefined") {
    numberOfElements++;
    id = "buttonBoxContainer" + numberOfElements;
  }
  $(
    '<div class="window btnCust node" id="' +
      id +
      '" data-nodetype = "btnCust" style="left:30px; top:30px;">'
  )
    .appendTo("#" + htmlBase)
    .html($("#buttonBoxContainer0")[0].innerHTML);
  var taskSourceConnectorEndpoint = {
    isSource: true,
    isTarget: false,
    maxConnections: 1,
    anchor: [0.5, 1, 0, 1, 0, 0, "task_end endpoint"],
  };

  var taskTargetConnectorEndpoint = {
    isSource: false,
    isTarget: true,
    maxConnections: 1,
    anchor: [0.5, 0, 0, -1, 0, 0, "task_end endpoint"],
    paintStyle: { fillStyle: "red" },
    endpoint: ["Rectangle", { width: 12, height: 12 }],
  };

  jsPlumb.addEndpoint($("#" + id), taskSourceConnectorEndpoint);

  jsPlumb.addEndpoint($("#" + id), taskTargetConnectorEndpoint);

  jsPlumb.draggable($("#" + id));
  return id;
}

function addEmail(id) {
  if (typeof id == "undefined") {
    numberOfElements++;
    id = "emailBoxContainer" + numberOfElements;
  }
  $(
    '<div class="window emailBox node" id="' +
      id +
      '" data-nodetype = "emailBox" style="left:30px; top:30px;">'
  )
    .appendTo("#" + htmlBase)
    .html($("#emailBoxContainer0")[0].innerHTML);
  var taskSourceConnectorEndpoint = {
    isSource: true,
    isTarget: false,
    maxConnections: 1,
    anchor: [0.5, 1, 0, 1, 0, 0, "task_end endpoint"],
  };

  var taskTargetConnectorEndpoint = {
    isSource: false,
    isTarget: true,
    maxConnections: 1,
    anchor: [0.5, 0, 0, -1, 0, 0, "task_end endpoint"],
    paintStyle: { fillStyle: "red" },
    endpoint: ["Rectangle", { width: 12, height: 12 }],
  };

  jsPlumb.addEndpoint($("#" + id), taskSourceConnectorEndpoint);

  jsPlumb.addEndpoint($("#" + id), taskTargetConnectorEndpoint);

  jsPlumb.draggable($("#" + id));
  return id;
}
function addTask(id) {
  if (typeof id === "undefined") {
    numberOfElements++;
    id = "taskcontainer" + numberOfElements;
  }

  $(
    '<div class="window task node" id="' +
      id +
      '" data-nodetype="task" style="left:30px; top:30px;">'
  )
    .appendTo("#" + htmlBase)
    .html($("#taskcontainer0")[0].innerHTML);

  var taskSourceConnectorEndpoint = {
    isSource: true,
    isTarget: false,
    maxConnections: 1,
    anchor: [0.5, 1, 0, 1, 0, 0, "task_end endpoint"],
  };

  var taskTargetConnectorEndpoint = {
    isSource: false,
    isTarget: true,
    maxConnections: 1,
    anchor: [0.5, 0, 0, -1, 0, 0, "task_end endpoint"],
    paintStyle: { fillStyle: "red" },
    endpoint: ["Rectangle", { width: 12, height: 12 }],
  };

  jsPlumb.addEndpoint($("#" + id), taskSourceConnectorEndpoint);

  jsPlumb.addEndpoint($("#" + id), taskTargetConnectorEndpoint);

  jsPlumb.draggable($("#" + id));
  return id;
}
function addDecision(id) {
  if (typeof id === "undefined") {
    numberOfElements++;
    id = "decisioncontainer" + numberOfElements;
  }
  $(
    '<div class="window decision node" id="' +
      id +
      '" data-nodetype="decision" style="left:30px; top:30px;">'
  )
    .appendTo("#" + htmlBase)
    .html($("#decisioncontainer0")[0].innerHTML);

  var upperDecisionConnectorEndpoint = {
    isSource: false,
    isTarget: true,
    maxConnections: 1,
    anchor: [0.5, 0, 0, -1, 24, 0, "upper_dec_end endpoint"],
    paintStyle: { fillStyle: "red" },
    endpoint: ["Rectangle", { width: 12, height: 12 }],
  };

  var leftDecisionConnectorEndpoint = {
    isSource: true,
    isTarget: false,
    maxConnections: 1,
    anchor: [0, 0.5, 0, 1, 0, 24, "left_dec_start startpoint"],
  };

  var rightDecisionConnectorEndpoint = {
    isSource: true,
    isTarget: false,
    maxConnections: 1,
    anchor: [1.0, 0.5, 0, 3, 42, 23, "right_dec_start startpoint"],
  };

  jsPlumb.addEndpoint($("#" + id), leftDecisionConnectorEndpoint);

  jsPlumb.addEndpoint($("#" + id), rightDecisionConnectorEndpoint);

  jsPlumb.addEndpoint($("#" + id), upperDecisionConnectorEndpoint);

  jsPlumb.draggable($("#" + id));
  return id;
}
function saveFlowchart() {
  var nodes = [];
  $(".node").each(function (idx, elem) {
    var $elem = $(elem);
    var endpoints = jsPlumb.getEndpoints($elem.attr("id"));
    console.log("endpoints of " + $elem.attr("id"));
    console.log(endpoints);
    nodes.push({
      blockId: $elem.attr("id"),
      nodetype: $elem.attr("data-nodetype"),
      positionX: parseInt($elem.css("left"), 10),
      positionY: parseInt($elem.css("top"), 10),
    });
  });
  var connections = [];
  $.each(jsPlumb.getConnections(), function (idx, connection) {
    connections.push({
      connectionId: connection.id,
      pageSourceId: connection.sourceId,
      pageTargetId: connection.targetId,
    });
  });

  var flowChart = {};
  flowChart.nodes = nodes;
  flowChart.connections = connections;
  flowChart.numberOfElements = numberOfElements;

  var flowChartJson = JSON.stringify(flowChart);
  console.log(flowChartJson);

  $("#jsonOutput").val(flowChartJson);
}
function loadFlowchart() {
  var flowChartJson = $("#jsonOutput").val();
  var flowChart = JSON.parse(flowChartJson);
  var nodes = flowChart.nodes;
  $.each(nodes, function (index, elem) {
    if (elem.nodetype === "startpoint") {
      repositionElement("startpoint", elem.positionX, elem.positionY);
    } else if (elem.nodetype === "endpoint") {
      repositionElement("endpoint", elem.positionX, elem.positionY);
    } else if (elem.nodetype === "task") {
      var id = addTask(elem.blockId);
      repositionElement(id, elem.positionX, elem.positionY);
    } else if (elem.nodetype === "decision") {
      var id = addDecision(elem.blockId);
      repositionElement(id, elem.positionX, elem.positionY);
    } else {
    }
  });

  var connections = flowChart.connections;
  $.each(connections, function (index, elem) {
    var connection1 = jsPlumb.connect({
      source: elem.pageSourceId,
      target: elem.pageTargetId,
      anchors: ["BottomCenter", [0.75, 0, 0, -1]],
    });
  });

  numberOfElements = flowChart.numberOfElements;
}

function repositionElement(id, posX, posY) {
  $("#" + id).css("left", posX);
  $("#" + id).css("top", posY);
  jsPlumb.repaint(id);
}
