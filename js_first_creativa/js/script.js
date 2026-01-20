function convertData(){
    var doller = document.getElementById("doller").value;
    var result = document.getElementById("result");
    var role = document.getElementById("role");
    role.setAttribute("class","alert alert-danger");

    if(doller==""){
        document.getElementById("role").innerHTML="Enter Value"
        return false;
    }
    else if(isNaN(doller)){
        result.innerHTML="Enter Number Not Text"
        return false;
    }
    else if(doller<0){
        result.innerHTML="Enter Positive Number"
        return false;
    }
    else if(doller==0){
        result.innerHTML="Enter Number Rather Than Zero"
        return false;
    }
    else{
        result.innerHTML=doller*50 +"  "+ "Egyption Pound"
        return false;
    }
}