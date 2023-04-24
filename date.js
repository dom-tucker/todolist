//jshint esversion:6
module.exports.getDate = getDate;
module.exports.getTime = getTime;

function getDate(){ 
    var today = new Date();
    
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    
   return today.toLocaleDateString("en-US", options);
}


function getTime(){ 
    var today = new Date();
    
    var options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
        
    };
    
    return today.toLocaleDateString("en-US", options);

}

console.log(module.exports);