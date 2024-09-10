const form=document.querySelector('#form_id')

//if the variable is taken outsinde the form it will return the empty value as input becomes empty after submited
// const height=document.querySelector('#height').value
//const weight=document.querySelector('#weight').value

form.addEventListener('submit',(submit_event)=>{
    submit_event.preventDefault();
    const height=document.querySelector('#height').value
    const  weight=document.querySelector('#weight').value
    const result=document.querySelector('#result')

    if((height==="" || height<0 || isNaN(height))||(weight==="" || weight<0 || isNaN(weight))){
        result.textContent=`Enter Valid Input your Inputes are: "${height}" , "${weight}"`
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=`<span>${bmi}</Span>`
        const message=document.querySelector('#result2')
        if (bmi<=30) {
            message.innerHTML=`<p> Your BMI is below Low  </p>`
        }else if(bmi>30 && bmi<=50){
            message.innerHTML=`<p> Your BMI is Good  </p>`
        }else{
            message.innerHTML=`<p> Your BMI is High  </p>`
        }
    }
})