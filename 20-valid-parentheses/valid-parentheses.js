/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let stack = [];

    if(s.length % 2 === 1){
        return false;
    }  

    for(let i = 0; i < s.length; i++){
        if((s[i] == "(") | (s[i] == "[") | (s[i] == "{")){
            stack.push(s[i]);
        }

        if(s[i] == ")"){
            if(stack.pop() == "("){
                continue;
            } else{
                return false;
            }
        }

        if(s[i] == "]"){
            if(stack.pop() == "["){
                continue;
            } else{
                return false;
            }
        }

        if(s[i] == "}"){
            if(stack.pop() == "{"){
                continue;
            } else{
                return false;
            }
        }
    }

    if(stack.length != 0){
        return false;
    }
    
    return true;
};