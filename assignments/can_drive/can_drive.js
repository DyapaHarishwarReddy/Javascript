function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if(hasDrivingLiscence==false && isTired==true && isSober==true){
        return "You cannot drive"
    }
    if(hasDrivingLiscence==true && isTired==false && isSober==true){
        return "You can drive"
    }
        return "You shouldn't drive"
}


module.exports = CanDrive;
