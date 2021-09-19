module.exports = (req, res, next) => {
    const errors = {};
    if(req?.fields?.firstNumber){
        if(parseFloat(req?.fields?.firstNumber)){

        }else{
            errors.firstNumber = 'Only numbers allowed!'
        }
    }else{
        errors.firstNumber = 'Fields is required!'
    }


    if(req?.fields?.secondNumber){
        if(parseFloat(req?.fields?.secondNumber)){

        }else{
            errors.secondr = 'Only numbers allowed!'
        }
    }else{
        errors.secondNumber = 'Fields is required!'
    }

    if(Object.keys(errors).length == 0){
        return next()
    }else{
        return res.status(411).send({errors})
    }
}