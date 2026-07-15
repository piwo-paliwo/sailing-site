(function () {
    var STYLE_ID = "piwo-carousel-keyframes";

    function getStyleTag() {
        var tag = document.getElementById(STYLE_ID);
        if (!tag) {
            tag = document.createElement("style");
            tag.id = STYLE_ID;
            document.head.appendChild(tag);
        }
        return tag;
    }

    function measureWidth(track) {
        // The track contains the entry set twice; only measure the first half,
        // so the loop point lines up exactly (same trick as the original component).
        var children = track.children;
        var half = Math.floor(children.length / 2);
        var width = 0;
        for (var i = 0; i < half; i++) {
            width += children[i].offsetWidth;
        }
        return width;
    }

    function init() {
        var styleTag = getStyleTag();
        var rules = [];

        document
            .querySelectorAll(".carousel-piwo")
            .forEach(function (carousel, index) {
                var track = carousel.querySelector(".carousel-piwo-track");
                if (!track) return;

                var width = measureWidth(track);
                if (width <= 0) return; // not laid out yet / no content, skip rather than animate to nowhere

                var duration = width / 60; // px per second, matches original component
                var keyframeName = "piwo-scroll-" + index;

                rules.push(
                    "@keyframes " +
                        keyframeName +
                        " {" +
                        "from { transform: translateX(0); }" +
                        "to { transform: translateX(-" +
                        width +
                        "px); }" +
                        "}",
                );

                track.style.animation =
                    keyframeName + " " + duration + "s linear infinite";
            });

        styleTag.textContent = rules.join("\n");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    // Re-measure on resize (debounced) so the loop stays seamless responsively.
    var resizeTimer;
    window.addEventListener("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(init, 200);
    });
})();
