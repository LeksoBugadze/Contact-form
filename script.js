const getIn1=document.getElementById('in1');
const getIn1Error=document.querySelector('.error-name');
const getIn2=document.getElementById('in2');
const getIn2Error=document.querySelector('.error-last');
const getIn3=document.getElementById('in3');
const getIn3Error=document.querySelector('.error-email');
const getIn4=document.getElementById('in4');
const getIn4Error=document.querySelector('.error-message');
const getIn5=document.getElementById('in5');
const getIn5Error=document.querySelector('.error-consent');
const getRadio=document.querySelectorAll('.input3');
const queryError=document.querySelector('.error-query');
const successBox=document.querySelector('.success-box');
const getRadio1=document.getElementById('radio1');
const getRadio2=document.getElementById('radio2');




const in1Error=()=>{
    if(getIn1.value.trim()===''){
       if(getIn1Error.textContent.trim()==='')
        getIn1Error.textContent='This field is required';
    }else {
        getIn1Error.textContent='';
        return true;
    }

}

const in2Error=()=>{
    if(getIn2.value.trim()===''){
       if(getIn2Error.textContent.trim()==='')
        getIn2Error.textContent='This field is required';
    }else{
         getIn2Error.textContent='';
         return true;
    }
}

const in3Error=()=>{
    if(getIn3.value.trim()===''){
       if(getIn3Error.textContent.trim()==='')
        getIn3Error.textContent='Please enter a valid email address';
    }else {
        getIn3Error.textContent='';
        return true;
    }
}

const in4Error=()=>{
    if(getIn4.value.trim()===''){
        if(getIn4Error.textContent.trim()===''){
            getIn4Error.textContent='This field is required'
        }
    }else{
         getIn4Error.textContent='';
         return true;
    }
}


const in5Error=()=>{
    if(getIn5.checked===false){
        if(getIn5Error.textContent.trim()===''){
            getIn5Error.textContent=' To submit this form, please consent to being contacted';
            
        }
    }else {
        
        getIn5Error.textContent='';
        return true;
    }
}

const switchToRadio1=()=>{
    getRadio1.checked=true; 
}


const switchToRadio2=()=>{
    getRadio2.checked=true; 
}

const inRadioError=()=>{
    let isChecked = false; 

    getRadio.forEach(radio => {
        if (radio.checked) {
            isChecked = true; 
        }
    });

    if (!isChecked) {
        queryError.textContent = 'Please select a query type';
         
    } else {
        queryError.textContent = '';
        return true;
    }
}

const showSuccess=()=>{
   if(in1Error()&&in2Error()&&in3Error()&&in4Error()&&in5Error()&&inRadioError())  
    successBox.style.display='flex';
    getIn1.value='';
    getIn2.value='';
    getIn3.value='';
    getIn4.value='';
    getIn5.isChecked=false;

}