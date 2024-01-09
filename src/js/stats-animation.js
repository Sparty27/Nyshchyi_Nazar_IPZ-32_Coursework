// Function to be executed when the element is in the viewport
function handleIntersection2(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            $("#stats-percent").counter({
                autoStart: true,           // true/false, default: true
                duration: 5000,             // milliseconds, default: 1500
                countFrom: 0,              // start counting at this number, default: 0
                countTo: 90,                // count to this number, default: 0
                runOnce: true,              // only run the counter once, default: false
                placeholder: "x",           // replace the number with this before counting,
                // most useful with autoStart: false. default: undefined
                easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing
                // for all available effects, see visual examples:
                // http://easings.net
                // default: "easeOutQuad"
                onStart: function () { },     // callback on start of the counting
                onComplete: function () { },  // callback on completion of the counting
                numberFormatter:            // function used to format the displayed numbers.
                    function (number) {
                        return Math.round(number) + "%";
                    }
            });
            $("#stats-number").counter({
                autoStart: true,           // true/false, default: true
                duration: 4500,             // milliseconds, default: 1500
                countFrom: 0,              // start counting at this number, default: 0
                countTo: 25000,                // count to this number, default: 0
                runOnce: true,              // only run the counter once, default: false
                placeholder: "x",           // replace the number with this before counting,
                // most useful with autoStart: false. default: undefined
                easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing
                // for all available effects, see visual examples:
                // http://easings.net
                // default: "easeOutQuad"
                onStart: function () { },     // callback on start of the counting
                onComplete: function () { },  // callback on completion of the counting
                numberFormatter: function (number) {
                    var formattedNumber = Math.round(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            
                    return ">" + formattedNumber;
                }
            });
            $("#stats-works").counter({
                autoStart: true,           // true/false, default: true
                duration: 12000,             // milliseconds, default: 1500
                countFrom: 0,              // start counting at this number, default: 0
                countTo: 2,                // count to this number, default: 0
                runOnce: true,              // only run the counter once, default: false
                placeholder: "x",           // replace the number with this before counting,
                // most useful with autoStart: false. default: undefined
                easing: "easeOutCubic",     // see http://gsgd.co.uk/sandbox/jquery/easing
                // for all available effects, see visual examples:
                // http://easings.net
                // default: "easeOutQuad"
                onStart: function () { },     // callback on start of the counting
                onComplete: function () { },  // callback on completion of the counting
                numberFormatter: function (number) {
                    ;
                    return ">" + Math.round(number) + "K";
                }
            });

            // Stop observing the element after it is in the viewport
            observer.unobserve(entry.target);
        }
    });
}

// Create an Intersection Observer
observer = new IntersectionObserver(handleIntersection2, { threshold: 0.5 });

// Observe each element with a specific ID
elementsToObserve = document.querySelectorAll('[id^="stats-section"]');
elementsToObserve.forEach(element => {
    observer.observe(element);
});