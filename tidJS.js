var setManVar = 0; //Denna varibel används för anpassa värden på månan.
var setTimVar = 0; //Denna varibel används för anpassa värden på timmar.
var setMinVar = 0; //Denna varibel används för anpassa värden på minuter.

function startaTid() {
    var tid = new Date();
    var sec = tid.getSeconds();
    
    var min = tid.setMinutes(tid.getMinutes() + setMinVar);
    min = tid.getMinutes();
    
    var tim = tid.setHours(tid.getHours() + setTimVar);
    tim = tid.getHours();
    
    var manad = tid.setMonth(tid.getMonth() + setManVar);
    manad = tid.getMonth();
    
    var artal = tid.getFullYear();
	
    manad = getManad(manad);
    sec = checkTid(sec);
    min = checkTid(min);


    document.getElementById("datumTider").innerHTML = artal + ", " + manad + "<br>" + tim + ":" + min + ":" + sec;
    
    setTimeout(startaTid, 500);
    setTimeout(bildChange(manad, tim), 500);
}
	
	

function checkTid(v) {
	if (v < 10)
		{
			v = "0" + v;
		}
	return v;
}

function getManad(num) {
	
	var m = "";
	
	switch(num) {
		case 0:
			m = "Januari";
			break;
		case 1: 
			m = "Februari";
			break;
		case 2:
			m = "Mars";
			break;
		case 3:
			m = "April";
			break;
		case 4:
			m = "Maj";
			break;
		case 5:
			m = "Juni";
			break;
		case 6:
			m = "Juli";
			break;
		case 7:
			m = "Augusti";
			break;
		case 8:
			m = "September";
			break;
		case 9:
			m = "Oktober";
			break;
		case 10: 
			m = "November";
			break;
		default:
			m = "December";
			break;
	}
	
	return m;
}

function bildChange (ma, ti) {
    
    if (ti >= 6 && ti <= 18) {
        
        if (ma == "December" || ma == "Januari" || ma == "Februari") {
           document.getElementById("Ground").setAttribute("style", "fill:#F9FEFF");
           document.getElementById("Sky").setAttribute("style", "fill:#67BDE8");
           document.getElementById("SunMoon").setAttribute("style", "fill:#F7F725");
           document.getElementById("Cloud").setAttribute("style", "fill:#FFFFFF");
        }
        else if (ma == "Mars" || ma == "April" || ma == "Maj") {
           document.getElementById("Ground").setAttribute("style", "fill:#1DC703");
           document.getElementById("Sky").setAttribute("style", "fill:#67BDE8");
           document.getElementById("SunMoon").setAttribute("style", "fill:#F7F725");
           document.getElementById("Cloud").setAttribute("style", "fill:#FFFFFF");
                 }
        else if (ma == "Juni" || ma == "Juli" || ma == "Augusti") {
           document.getElementById("Ground").setAttribute("style", "fill:#39E11F");
           document.getElementById("Sky").setAttribute("style", "fill:#67BDE8");
           document.getElementById("SunMoon").setAttribute("style", "fill:#FFFF51");
           document.getElementById("Cloud").setAttribute("style", "fill:#67BDE8");
        }
        else {
           document.getElementById("Ground").setAttribute("style", "fill:#D5720E");
           document.getElementById("Sky").setAttribute("style", "fill:#5C6CC0");
           document.getElementById("SunMoon").setAttribute("style", "fill:#F7F725");
           document.getElementById("Cloud").setAttribute("style", "fill:#FFFFFF");
        }
       }
    

    else {
        
        if (ma == "December" || ma == "Januari" || ma == "Februari") {
           document.getElementById("Ground").setAttribute("style", "fill:#E0E2E6");
           document.getElementById("Sky").setAttribute("style", "fill:#060606");
           document.getElementById("SunMoon").setAttribute("style", "fill:#FCFFC3");
           document.getElementById("Cloud").setAttribute("style", "fill:#FFFFFF");
       }
        else if (ma == "Mars" || ma == "April" || ma == "Maj") {
           document.getElementById("Ground").setAttribute("style", "fill:#158903");
           document.getElementById("Sky").setAttribute("style", "fill:#504E51");
           document.getElementById("SunMoon").setAttribute("style", "fill:#FCFFC3");
           document.getElementById("Cloud").setAttribute("style", "fill:#FFFFFF");
                 }
        else if (ma == "Juni" || ma == "Juli" || ma == "Augusti") {
           document.getElementById("Ground").setAttribute("style", "fill:#34B021");
           document.getElementById("Sky").setAttribute("style", "fill:#504E51");
           document.getElementById("SunMoon").setAttribute("style", "fill:#FCFFC3");
           document.getElementById("Cloud").setAttribute("style", "fill:#504E51");
        }
        else {
           document.getElementById("Ground").setAttribute("style", "fill:#A25609");
           document.getElementById("Sky").setAttribute("style", "fill:#060606");
           document.getElementById("SunMoon").setAttribute("style", "fill:#FCFFC3");
           document.getElementById("Cloud").setAttribute("style", "fill:#FFFFFF");
        }
    }
}

function setMan(num) {
   setManVar = setManVar + num; 
}

function setTim(num) {
   setTimVar = setTimVar + num; 
}

function setMin(num) {
   setMinVar = setMinVar + num; 
}

startaTid();

