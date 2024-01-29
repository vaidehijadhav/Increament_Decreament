const countValue = document.querySelector('#counter'); //querySelector return value in form of string

const increment = ()=>{
    // get the value
    let value = parseInt(countValue.innerText); // parseInt convert string value to interger.
    // update the value
    value++;
    // set the value
    countValue.innerText = value;
};

const decrement = () =>{
    // get the value
    let value = parseInt(countValue.innerText); // parseInt convert string value to interger.
    // update the value
    value--;
    // set the value
    countValue.innerText = value;
};