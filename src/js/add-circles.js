// Flag to check if animations have started
let animationsStarted = false;

// Function to be executed when the element is in the viewport
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animationsStarted) {
            // Set flag to true to prevent repeated animations
            animationsStarted = true;

            // Your existing code for circleProgress initialization
            // Replace this with your actual code
            $('[id^="circle"]').circleProgress({
                value: 0.92,
                startAngle: 2,
                thickness: 32,
                size: 220,
                reverse: true,
                lineCap: "round",
                emptyFill: "rgba(11,11,11,0)",
                fill: {
                    gradient: ["#FA709A", "#FEE140"]
                }
            });

            // Add percentage text inside each circle progress bar
            $('[id^="circle"]').append('<div class="progress-text">0%</div>');

            // Function to update the percentage text
            function updatePercentageText(percentage) {
                $('[id^="circle"] .progress-text').text(percentage + "%");
            }

            // Animate the progress from 0% to 97%
            let currentPercentage = 0;
            const targetPercentage = 97;
            const animationInterval = setInterval(() => {
                currentPercentage += 1;
                updatePercentageText(currentPercentage);

                if (currentPercentage >= targetPercentage) {
                    clearInterval(animationInterval);
                }
            }, 11);

            // Stop observing all elements after the first one is in the viewport
            observer.disconnect();
        }
    });
}

// Create an Intersection Observer
observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Observe each element with a specific ID
elementsToObserve = document.querySelectorAll('[id^="circle"]');
elementsToObserve.forEach(element => {
    observer.observe(element);
});


/* Працює не синхронно
    <script>
    // Function to be executed when the element is in the viewport
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Your existing code for circleProgress initialization
                // Replace this with your actual code
                $(entry.target).circleProgress({
                    value: 0.92,
                    startAngle: 2,
                    thickness: 32,
                    size: 220,
                    reverse: true,
                    lineCap: "round",
                    emptyFill: "rgba(11,11,11,0)",
                    fill: {
                        gradient: ["#FA709A", "#FEE140"]
                    }
                });

                // Stop observing the element after it is in the viewport
                observer.unobserve(entry.target);
            }
        });
    }

    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    // Observe each element with a specific ID
    const elementsToObserve = document.querySelectorAll('[id^="circle"]');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
</script> */