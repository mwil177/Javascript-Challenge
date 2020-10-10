//////Table Info

var tblinfo = data;
var len = tblinfo.length;
console.log(len);
var tbody = d3.select("tbody");

//////Console Info

function init() {
  data.forEach(function (UFO) {
    //////UFO
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(function ([key, value]) {
      //////Key
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}

var _filteredData;
var _date_ele = d3.select("#form-control-date");

//////Date Info

var _date_value = _date_ele.value;
console.log(_date_value);

function filt_dash() {
  tblinfo.forEach(function (UFO1) {
    ////// UFO

    var row = tbody.append("tr");
    Object.entries(UFO1).forEach(function ([key, value]) {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
}

function filtdata() {
  if (_date_value != "") {
    tblinfo = tblinfo.filter(function (date) {
      var mydd = date.datetime;
      return date.datetime === "_date_value";
      console.log(_date_value);
      console.log(date.datetime);
      filt_dash();
    });
  }
}

function handleSubmit() {
  d3.select("tbody").selectAll("tr").remove();

  filtdata();
}

var _filter_btn = d3.select("#filter-btn");

_filter_btn.on("click", function () {
  handleSubmit();
});

init();
