function validatePassword(str1, str2) { 
    if(isValid(str1) && isValid(str2)){ // if valid password
        if(str1.length == str2.length){ // check size, check content 
            str1 === str2;
            return true;
        }else{
            return false;
        }
    }
    return false;
}

function isValid(str){
    if(str.length >= 8){
        // check for uppercase char
        for (i=0; i < str.length; i++){
            str.search(/[A-Z]/);
            uppercase = true;
        }
        // check for lowercase char
        for(i=0; i < str.length; i++){
            str.search(/[a-z]/);
            lowercase = true;
        }
        //check for num char
        for(i=0; i < str.length; i++){
            str.search(/[0-9]/);
            number = true;
        }
        return true;
    }else{
        return false;
    }
}

function reversePassword(str){
    if(isValid(str)){
        let newStr = "", i;
        for(i = str.length - 1; i >= 0; i--) { 
            newStr += str[i];
        }
        return newStr;
    }
    console.log("cannot be reverse, invalid password");
    return str;
}

function storePassword(name, str1, str2){
    let result = {
        name: name,
        newpassword: str1,
    }

    if(validatePassword(str1, str2)){
        result.newpassword = reversePassword(str1);
    }

    return result;
}

console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));

// for test cases only
//console.log(isValid("hEl0ssg2"));
//console.log(isValid("hEl0"));
// console.log(validatePassword("Heww1122", "Heww1122"));
// console.log(validatePassword("Heww1122a", "Heww1122"));
// console.log(reversePassword(("hEl0")));
// console.log(reversePassword("hEl0ssg2"));
// console.log(reversePassword("Hello1234")); 
