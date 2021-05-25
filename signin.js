



 
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyADe2VM3lDFWknntm1QfYe30rtA-k9dRxo",
    authDomain: "loginpage-9c886.firebaseapp.com",
    projectId: "loginpage-9c886",
    storageBucket: "loginpage-9c886.appspot.com",
    messagingSenderId: "916869480391",
    appId: "1:916869480391:web:16ec96fca71346b9dc23e2",
    measurementId: "G-M72LBY58SN"
};



 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
      
    const auth = firebase.auth();
 
 
    function signUp(){
        
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        
        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        
        alert("Signed Up");
    }
 
 
 
    function signIn(){
     
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        
        
        
        
    }
 
 
    function signOut(){
        
        auth.signOut();
        alert("Signed Out");
        
    }
    
 
 
    auth.onAuthStateChanged(function(user){
        
        if(user){
            
            var email = user.email;
            alert("Active User " + email);
            
            //Take user to a different or home page

            //is signed in
            
        }else{
            
            alert("No Active User");
            //no user is signed in
        }
     
     
     
 });
 

