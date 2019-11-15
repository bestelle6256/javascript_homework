// from data.js
var tableData = data;

// populate the table
var tbody = d3.select("tbody");

tableData.forEach(function handle_ufo(each_ufo) {
    var row = tbody.append("tr");
    Object.entries(each_ufo).forEach(function attributes([key,value]){
        var cell = row.append("td");
        cell.text(value);
    });
});



// button and filter

// 1) get the date from the input box;
var input_date = d3.select(".form-control");

function handleChange() {
    d3.event.preventDefault();
    // user_date is a GLOBAL value
    user_date = d3.event.target.value;
    console.log("user date is: ", user_date);
    return user_date;
};

input_date.on("change",handleChange);


// 2) filter the table based on the user_date;

var flt_button = d3.select("#filter-btn");

function handleClick() {

    d3.event.preventDefault();

    if (user_date != "") {

        filtered_ufo = tableData.filter(function filter_by_date (each_ufo) {
            return each_ufo.datetime === user_date;
        });
    
        // clear out existing table in <tbody>
        tbody.html("");
    
        filtered_ufo.forEach(function a (each_filtered_ufo) {
            var row = tbody.append("tr");
            Object.entries(each_filtered_ufo).forEach(function b ([key,value]){
                var cell = row.append("td");
                cell.text(value);
            });
        });

    }

    else  {

        tableData.forEach(function handle_ufo(each_ufo) {
            var row = tbody.append("tr");
            Object.entries(each_ufo).forEach(function attributes([key,value]){
                var cell = row.append("td");
                cell.text(value);
            });
        });
    };
};


flt_button.on("click",handleClick);


