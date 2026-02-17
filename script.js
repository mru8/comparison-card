// const aiPane = document.querySelector('.ai-pane');
// const humanPane = document.querySelector('.human-pane');

// function toggleView(version){
//     if(version === 'human'){
//         humanPane.style.flex = "2";
//         aiPane.style.flex = "0.5";
//         humanPane.style.opacity = "1";
//         aiPane.style.opcaity = "0.5";
//     } else {
//         aiPane.style.flex = "2";
//         humanPane.style.flex = "0.5";
//         aiPane.style.opacity = "1";
//         humanPane.style.opacity = "0.5";
//     }
// }

// aiPane.addEventListener('click', () => toggleView('ai'));
// humanPane.addEventListener('click', () => toggleView('human'));

// const sideBySideBtn = document.getElementById('sideBySideBtn');
// const stackBtn = document.getElementById('stackBtn');
// const mainContainer = document.getElementById('mainContainer');

// // Desktop View
// sideBySideBtn.addEventListener('click', () => {
//     mainContainer.classList.add('side-by-side');
//     mainContainer.classList.remove('stacked')

//     sideBySideBtn.classList.add('active');
//     stackBtn.classList.remove('active');
// });

// // Mobile View
// stackBtn.addEventListener('click', () => {
//     mainContainer.classList.remove('side-by-side');
//     mainContainer.classList.add('stacked');

//     stackBtn.classList.add('active');
//     sideBySideBtn.classList.remove('active');
// });

// Auto-detecting screen size
window.addEventListener('resize', () => {
    if (window.innerWidth < 768){
        if (mainContainer.classList.contains('side-by-side')){
            stackBtn.click();
        }
    } else {
        if (!mainContainer.classList.contains('side-by-side')) {
            sideBySideBtn.click();
        }
    }
});

if (window.innerWidth < 768) {
    stackBtn.click();
}

function smoothToggle(mode) {
    mainContainer.classList.add('switching');

    setTimeout(() => {
        if (mode === 'side') {
            mainContainer.classList.add('side-by-side');
            mainContainer.classList.remove('stacked');
        } else {
            mainContainer.classList.remove('side-by-side');
            mainContainer.classList.add('stacked');
        }

        mainContainer.classList.remove('switching');
    }, 200);
}

sideBySideBtn.addEventListener('click', () => smoothToggle('side'));
stackBtn.addEventListener('click', () => smoothToggle('stack'));