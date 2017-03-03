console.log('yo, mothefuckers!');


// 1 Validate form
function validateForm() {
    console.log('validating form');

    var name = document.getElementById('nameInput').value;
    var species = document.getElementById('speciesInput').value;
    var age = document.getElementById('ageInput').value;

    if (!name.length || !species.length  || !age.length) {
	alert('Fill all fields pls');
    }

    if (isNaN(parseInt(age))) {
	alert('Enter a number for age');
    }
    
    return false;
}


// 2. Change text color
document.getElementById('changeColor').addEventListener('click', function() {
    var color = document.getElementById('textColor').value;
    var body = document.getElementById('body');
    body.style.color = color;
    console.log(body);
});


// 3. Hide everything
document.getElementById('hide').addEventListener('click', function() {
    var everything = document.getElementById('main');
    everything.style.display = 'none';
});
