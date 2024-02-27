// Initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btnElements = document.querySelectorAll('.btn');

btnElements.forEach(function (btn){
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        // chnage the count
        if (styles.contains('decrease')) {
            count -= 1;

        } else if (styles.contains('reset')) {
            count = 0;
        } else if (styles.contains('increase')) {
            count += 1;
        }
        // change the color
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = '#222222';
        }


        value.textContent = count;
    });
});