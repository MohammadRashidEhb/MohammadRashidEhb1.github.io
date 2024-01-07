window.onload = () => {
    console.log("loaded")
    

    function loadScript(src, callback) {
        let script = document.createElement("script");
        script.src = src;

        script.onload = () => callback(script);

        document.head.append(script);
    }

    loadScript("math.js", (script)  => {
        document.getElementById("clickme").addEventListener("click", () => {
            console.log(`Script is loaded: ${script}`);
        })
        // console.log(`Script is loaded: ${script}`);
        // console.log(sum(11,22));
    });

        document.getElementById("clickme").addEventListener("click", () => {
        console.log(sum(11,22))
    })
}

