(() => {
  const count = (el) => {
    let num = 0;
    const targetNum = el.dataset.count;

    const timer = setInterval(() => {
      if (num >= targetNum) {
        clearInterval(timer);
      }
      el.innerText = num;
      num++;
    }, 50);
  };

  const setCounters = () => {
    const counterEls = document.querySelectorAll(".counter");
    console.log(counterEls);
    for (let counterEl of counterEls) {
      count(counterEl);
    }
  };

  let isCounterStarted = false;
  document.addEventListener("scroll", () => {
    if (isCounterStarted) return;
    const statisticsEl = document.getElementById("statistics");
    const currentScrollPosition = window.scrollY;

    const elScrollPosition = statisticsEl.offsetTop;
    const currentWindowHeight = window.innerHeight;
    const elCurrentHeight = statisticsEl.offsetHeight;

    const targetScrollPosition =
      elScrollPosition - currentWindowHeight + elCurrentHeight;

    //console.log(currentScrollPosition.toFixed(0), elScrollPosition, currentWindowHeight, elCurrentHeight, targetScrollPosition.toFixed(0))

    //console.log(targetScrollPosition, elCurrentHeight);

    if (currentScrollPosition >= targetScrollPosition) {
      isCounterStarted = true;
      setCounters();
    }
  });

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const form = document.getElementById("contactForm");

  // Loop over them and prevent submission

  form.addEventListener("submit", (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
})();
