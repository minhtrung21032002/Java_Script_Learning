function validator(htmlDocument){
    var formElement = document.querySelector(htmlDocument.form)
    if (htmlDocument.form){
        //console.log(htmlDocument.rules) // return selectors , rules
        // Loop through each element and find the value input of selector (for instance getting email => input email)
        htmlDocument.rules.forEach(function(rule){
            rule.selector.forEach(function(inputName){
                var inputElement = formElement.querySelector('[name="' + inputName + '"]')
                var errorElement = inputElement.parentElement.querySelector('.form-message')
                if(inputElement){
                    inputElement.onblur = function(){
                        var errorMessage = rule.test(inputElement.value)

                        if(errorMessage){
                            errorElement.innerText = errorMessage
                        }else{
                            errorElement.innerText = ''
                        }
                    }
                }
                
            })
        });

    }
}


validator.isRequired = function(selector){
    return {
        selector: selector,
        test: function(value){
            return value.trim() ? undefined : 'NHAP VO'
        }
    }
}

validator.isEmail = function(selector){
    return {
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'NHAP EMAIL'
            
        }
    }
}