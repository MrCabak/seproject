
function myDeleteFunction() {
	document.getElementById("tab").deleteRow(1);
}


var stop = false;

function stoprefreshing()
{
	stop = !stop;
}


function updatetable()
{
	if(stop===false)
	{
		setTimeout("updatetable()",2000);
		for (var i=0; i<2; i++)
		{
			var table = document.getElementById("tab");
			var rand = Math.random()*10;
			var row = table.insertRow(table.rows.length);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);
			cell1.innerHTML = "process_id";
			cell2.innerHTML = "process_name";
			cell3.innerHTML = rand + "%";
			cell4.innerHTML = rand + "%";
			cell5.innerHTML = "<button type=\"button\" class=\"btn btn-danger\" onclick=\"myDeleteFunction()\">Kill</button>";

		}
	}
	else{
		setTimeout("updatetable()",100);
	}
	
}

function topscreen(){
	$('html, body').animate({ scrollTop: 0 }, 'slow');
}
function bottomscreen(){
	$('html, body').animate({ scrollBottom: 0 }, 'fast');
}