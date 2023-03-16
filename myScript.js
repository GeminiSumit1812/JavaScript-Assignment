function CreateTable() {
    
    var mydata = new Array();
    mydata.push(["NAME ", "AGE", "DOB","EMAIL","COMPANY"]);
    mydata.push(["Sumit Pandey", "22","12/12/2001","pandey1812@gmail.com","Geminisolutions"]);
    mydata.push(["Uddhav Shankdhar", "22","01/11/2001","shankh123@gmail.com","Geminisolutions"]);
    mydata.push(["Abhinav bhardwaj", "22","05/7/2001","abhi123@gmail.com","Geminisolutions"]);
    mydata.push(["Harshit Shrivastava", "23","05/03/2000","harsh0503@gmail.com","Geminisolutions"]);
    mydata.push(["Md Wasim", "23","05/03/2000","wasim1513@gmail.com","Geminisolutions"]);

    
    var table = document.createElement("TABLE");
    table.border = "1";

    
    var columnCount = mydata[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = mydata[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < mydata.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = mydata[i][j];
        }
    }

    var vk18 = document.getElementById("vk18");
    vk18.innerHTML = "";
    vk18.appendChild(table);
};
   
   


 
   
  