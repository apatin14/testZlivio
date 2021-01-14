window.onload= ()=>{


    // Clean select fetch
    let dropdown = document.getElementById('userNames');
    dropdown.length = 0;

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Select Name';

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;
    dropdown.addEventListener("change", setId);

    const url = 'https://project-ytapi-default-rtdb.firebaseio.com/users.json';

    fetch(url)  
    .then(  
        function(response) {  
        if (response.status !== 200) {  
            console.warn('Looks like there was a problem. Status Code: ' + 
            response.status);  
            return;  
        }

        // Examine the text in the response  
        response.json().then(function(data) {  
            let option;
        
            for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
            option.text = data[i].name;
            option.value = data[i].cc;
            dropdown.add(option);
            }    
        });  
        }  
    )  
    .catch(function(err) {  
        console.error('Fetch Error -', err);  
    });


    //show Overlay
    $( "#formData" ).submit(function( event ) {

        let fullUserName = $( "#userNames option:selected" ).text();
        let UserName = fullUserName.split(" ");
        let overlay = document.getElementById("overlayText");

        overlay.innerHTML += "La información de "+ UserName[0] +" ha sido enviada a marketing@zlivio.com";
        document.getElementById("overlay").style.display = "block";


        event.preventDefault();
      });
}


//Funcion para completar el espacio de los id's
function setId() {
    let userNames = document.getElementById("userNames");
    let value = userNames.value;

    $("#userId").attr("value", value);
  }