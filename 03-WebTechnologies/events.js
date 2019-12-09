document.addEventListener('DOMContentLoaded', function () {
    let button = document.getElementById('button');
    let times = 0;

    button.addEventListener('click', function () {
        times += 1;
        console.log('You clicked the button ' + times + ' times.')
    });
});
