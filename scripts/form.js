 new LifesycleForm({
        formId: "uqZJLy5L06", // Indicates the identity of this form. is a required field.

        showLoading: true, // if true shows a full page loading screen when submit button clicked,

        showPopup: true,

        beforeSend: () => {
          // triggered just before form data is submitted
        },
        
        afterSend: (event, response) => {
          // triggered shortly after form data is submitted
          document.getElementById("form_lifesycle").reset();     // the form is cleared      
            document.getElementById("modal").style.display = "none";   // modal closes
                                            
        },

        onSuccess: (event, response) => {
          // overrides lifesycles default operations like showing success messages and redirecting after successfull request, you can use lifesycle_response as callback data to manage your operations.
        },

        onError: (event, response) => {
          // overrides lifesycles default operations like showing error messages after unsuccessfull request, you can use lifesycle_response as callback data to manage your operations.
        },

        validate: (form) => {
          // You can control the required fields in the form in this optional function.
            let mail = document.forms["myForm"]["spD0cSD5KM"].value;
            let name = document.forms["myForm"]["pZ8o7keWgU"].value;
            let surName = document.forms["myForm"]["8Tjk0jYSRD"].value;
            let phone = document.forms["myForm"]["qqpGSHVBQr"].value;
            let check = document.forms["myForm"]["bLrNyBfEkX[]"].checked;

        if (mail == "") {
                alert("Mail must be filled out");
                return false;
             }
              if (name == "") {
                alert("Name must be filled out");
                return false;
             }
                 if (surName == "") {
                alert("Surname must be filled out");
                return false;
             }
                 if (phone == "") {
                alert("phoe must be filled out");
                return false;
             }
             if(check == false){
               alert("Please confirm that it is okay for us to contact you about this information as well as products and services.")
               return false;
             }
                 return true;
        },
      });