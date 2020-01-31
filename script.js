var values = "";
      var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
      var lowerCase = "abcdefghijklmnopqrstuvwxyz";
      var numeric = "1234567890";
      var specialChar = "!@#$%^&*()_";

      var uperCaseBtn = document.getElementById("uppercase");
      var lowerCaseBtn = document.getElementById("lowercase");
      var numericBtn = document.getElementById("numeric");
      var specialBtn = document.getElementById("specialChar");
      var reset = document.getElementById("resetBtn");
      uperCaseBtn.addEventListener ( "change", function(){
          if(this.checked) {
              return values = values + upperCase;
          } else {
              return values = values;
          }
      });
      lowerCaseBtn.addEventListener ( "change", function(){
          if(this.checked) {
            return values = values + lowerCase;
              
          } else {
            return values = values;
          }
      });
      numericBtn.addEventListener ( "change", function(){
          if(this.checked) {
            return  values = values + numeric;
          } else {
            return  values = values;
          }
      });
      specialBtn.addEventListener ( "change", function(){
          if(this.checked) {
            return  values = values + specialChar;
          } else {
            return  values = values;
          }
      });

      //generate random password
      function generate(){
          //set password length/complexity
        var complexity = document.getElementById("slider").value;
          //possible password values
        var password = "";
        //create for loop to choose password characters
        var valuesNew = values;
            for(var i = 0; i < complexity; i++){
            password = password + valuesNew.charAt(Math.floor(Math.random() * Math.floor(valuesNew.length - 1)));
            }
        //add password to textbox/display area
        document.getElementById("display").value = password;
      }

      //set default length display of 25
      document.getElementById("length").innerHTML = "Length: 68";

      //function to set length based on slider position
      document.getElementById("slider").oninput = function(){

          if(document.getElementById("slider").value > 0){
              document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
          }
          else{
              document.getElementById("length").innerHTML = "Length: 1";
          }
      }

      //function to copy password to clipboard
      function copyPassword(){
      document.getElementById("display").select();
      document.execCommand("Copy");
      alert("Password copied to clipboard!");
      }
      function myFunction() { 
        values = "";
        password = "";
        document.getElementById("myForm").reset();
        document.getElementById("display").value = password;

        
}
