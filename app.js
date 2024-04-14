const btn = document.querySelector('.btn');
const day  = document.querySelector('.day');
const month  = document.querySelector('.month');
const year = document.querySelector('.year');

//error-messages
const day_err = document.querySelector('.day-err');
const month_err = document.querySelector('.month-err');
const year_err = document.querySelector('.year-err');

//date methods
const date = new Date();
const current_year = date.getFullYear();
const current_month = date.getMonth()+1;
const current_day = date.getDay()+1;

//result 
const year_result =  document.querySelector('.year-result');
const month_result  = document.querySelector('.month-result');
const day_result = document.querySelector('.day-result');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    if(day.value ==  '' || month.value == '' || year.value == ''){
        day_err.textContent = 'This field is required';
        month_err.textContent = 'This field is required';
        year_err.textContent  = 'This field is required';
        day.style.border = '1px solid red';
        month.style.border = '1px solid red';
        year.style.border   = '1px solid red';
    }else if(isNaN(day.value)){
        day_err.textContent = 'Day requires a  number';
    }else if(isNaN(month.value)){
        month_err.textContent = 'Month requires a number';
    }else if(isNaN(year.value)){
        year_err.textContent  = 'Year requires a number';
    }else if(day.value > 31){
        day_err.textContent = 'Must be a valid day';
    }else if(month.value > 12){
        month_err.textContent = 'Must be a valid month';
    }else if(year.value > current_year){
        year_err.textContent = 'Must be in the past';
    }else{
        day.style.border = '1px solid grey';
        month.style.border = '1px solid grey';
        year.style.border = '1px solid grey';
        day_err.textContent  = '';
        month_err.textContent  = '';
        year_err.textContent = '';

        const user_year  = current_year - year.value;
        const user_month  = current_month - month.value;
        const user_day  =  current_day - day.value;
        year_result.textContent = user_year;
        month_result.textContent = user_month;
        day_result.textContent = user_day;

    }
});