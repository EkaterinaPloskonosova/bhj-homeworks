const caseActive = function() {
    const rotatorCaseActive = document.querySelector('.rotator__case_active');
    rotatorCaseActive.classList.remove('rotator__case_active');
    if (rotatorCaseActive.nextElementSibling !== null) {
        rotatorCaseActive.nextElementSibling.classList.add('rotator__case_active');
    } else {
        document.querySelector('.rotator__case').classList.add('rotator__case_active');
    }
}

setInterval(caseActive, 1000);