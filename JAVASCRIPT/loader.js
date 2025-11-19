 document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById("progressBar");
  const progressPercent = document.getElementById("progressPercent");
  const loader = document.getElementById("loader");

  const steps = [
    document.getElementById("step1"),
    document.getElementById("step2"),
    document.getElementById("step3")
  ];

  let progress = 0;
  let currentStep = 0;

  // Simulate loading progress
  const loadingInterval = setInterval(() => {
    progress += Math.floor(Math.random() * 5) + 2; // increase randomly between 2–6%

    if (progress >= 100) {
      progress = 100;
      clearInterval(loadingInterval);
      completeLoading();
    }

    // Update progress bar and text
    progressBar.style.width = `${progress}%`;
    progressPercent.textContent = `${progress}%`;

    // Update step logic
    if (progress >= 30 && currentStep === 0) {
      updateStep(1); // Move to step 2 (Processing)
    }
    if (progress >= 70 && currentStep === 1) {
      updateStep(2); // Move to step 3 (Ready)
    }
  }, 200); // every 0.2s

  // Function to change step state
  function updateStep(stepIndex) {
    steps[currentStep].classList.remove("active");
    steps[stepIndex].classList.add("active");
    currentStep = stepIndex;
  }

  // Function to handle completion
  function completeLoading() {
    updateStep(2); // Ensure last step is active
    setTimeout(() => {
      loader.classList.add("fade-out");
      setTimeout(() => {
        loader.style.display = "none";
        document.body.classList.remove("loading");
      }, 1000); // fade duration
    }, 800);
  }
});
