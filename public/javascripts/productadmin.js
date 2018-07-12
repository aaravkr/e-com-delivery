

window.onload = () => {
   
     /*========================
     variables 
     ======================== */
    
     // get elements for uploading file
     var uploader = document.getElementById('uploader');
     var fileButton = document.getElementById('fileButton');
     var imagehttp = [];
     var data = { };
     var db = firebase.firestore();

     /*========================
     Buttons
     ======================== */

     // button to send details to database

     var AddprodButton = document.getElementById('ProdSubmitButton');  


     /* ========================
        Event Listeners
     ======================== */
      if(AddprodButton !== null){
        AddprodButton.addEventListener('click',addprod);
      }
    
        
        /*========================
         Function to upload file
          ======================== */

         // listen for file selection
         if(fileButton !== null){
         fileButton.addEventListener('change', function(e){

         //get file
         var file = e.target.files[0];
         imagehttp[0] = file;
         });
        };

      function saveToFireStorage(file) {
       
         // create a storageRef
         var storageRef = firebase.storage().ref('images/' + file.name);
    
            //upload file
            var task = storageRef.put(file);

        //update progress bar
        task.on('state_changed', 

                         function progress(snapshot){
                             var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                             uploader.value = percentage;
                            },
                         function error(err){
                            console.log('uploading erroe');
                             },
                         function complete(){
                             task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                              console.log('File available at', downloadURL);
                              data.url = downloadURL;
                              uploader.value = 0;
                               // Add a new document in collection "cities"
                              var collection = db.collection('items_collection');
                              return collection.add(data)
                              .then(function() {
                                console.log("Document successfully written!");
                                document.getElementById('heading').value=' ';
                                document.getElementById('description').value=' ';
                                document.getElementById('price').value= 0;
                               
                              })
                              .catch(function(error) {
                                 console.error("Error writing document: ", error);
                              });
                             });

        });
    }



    $('#heading').keyup(function(){
        data.heading = $('#heading').val();
    });
    $('#description').keyup(function(){
        data.description = $('#description').val();
    });
    $('#price').keyup(function(){
        data.price = $('#price').val();
    });
   
    
    

    
 

  /* ========================
  Function 
 ======================== */
 function addprod(e){
         e.preventDefault();
        
        saveToFireStorage(imagehttp[0]);
        console.log("the data value is ", data, imagehttp);
        

 

 }

};

    