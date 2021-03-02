const waterLevel = document.querySelector('.water-level');
const percent = document.getElementById('percent');
const cups = document.querySelectorAll('.cup');
const resetBtn = document.getElementById('reset');

// updateWaterLevel();

cups.forEach((cup,idx) => {
    cup.addEventListener('click', () => fillCups(idx))

})

function fillCups(idx) {

     if(cups[idx].classList.contains("full") && !cups[idx].nextElementSibling.classList.contains("full")) {
            idx--
        }

    cups.forEach((cup,idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full')
        }
    })
    updateWaterLevel();
}

function updateWaterLevel() {
    const fullCups = document.querySelectorAll('.cup.full').length;
    const totalCups = cups.length;
    const per = fullCups/totalCups * 100;

    if(per === 0) {
        percent.innerText = `${per}%`
        waterLevel.style.height = `${per * 0}px`
    } else {
        percent.innerText = `${per}%`
        waterLevel.style.height = `${per * 2.8}px`
    }
    
}

resetBtn.addEventListener('click', reset);


function reset() {
    cups.forEach(cup => {
        cup.classList.remove('full');
        waterLevel.style.height = 0;
        percent.innerText = "0%";
    })
}