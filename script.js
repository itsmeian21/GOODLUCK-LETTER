document.addEventListener('DOMContentLoaded', () => {

    const backgroundMusic = document.getElementById('backgroundMusic');
    const startButton = document.getElementById('startButton');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const unfoldButton = document.getElementById('unfoldButton');

    const steps = {
        step1: document.getElementById('step1'),
        step2: document.getElementById('step2'),
        step3: document.getElementById('step3'),
        step4: document.getElementById('step4')
    };

    // Change between steps
    function transitionToStep(targetStepId) {

        const currentActive = document.querySelector('.step.active');

        if (currentActive) {
            currentActive.classList.remove('active');
        }

        steps[targetStepId].classList.add('active');

        // Always start the new section from the top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // =========================
    // STEP 1
    // =========================

    startButton.addEventListener('click', () => {

        transitionToStep('step2');

        backgroundMusic.play().catch(error => {
            console.log('Music autoplay prevented:', error);
        });

    });

    // =========================
    // STEP 2
    // =========================

    envelopeContainer.addEventListener('click', () => {

        envelopeContainer.classList.add('open');

        const instruction =
            envelopeContainer.querySelector('.click-instruction');

        instruction.style.opacity = '0';

        setTimeout(() => {

            transitionToStep('step3');

            setTimeout(() => {

                document
                    .getElementById('letterContainer')
                    .classList.add('show');

            }, 100);

        }, 700);

    });

    // =========================
    // STEP 3
    // =========================

    unfoldButton.addEventListener('click', () => {

        transitionToStep('step4');

    });

});