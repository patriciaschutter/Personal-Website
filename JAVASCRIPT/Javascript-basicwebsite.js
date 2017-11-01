// CONTACT PAGE 


document.getElementById("submitelement").onclick = submit

console.log('hey')

    function submit() {
        var x = document.getElementsByTagName("input")[0].value // Name
		var y = document.getElementsByTagName("input")[1].value // Email
		var z = document.getElementsByTagName("textarea") // Text
		
		if (x && y){
			document.getElementById("thankyou").innerHTML = "Thank you!"
        } else {
        	return alert("ERROR: Please make sure you filled out all required fields")
        };
	}
