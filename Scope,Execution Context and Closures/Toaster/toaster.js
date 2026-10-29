
// toaster

function createToaster(config) {
    return function(notification) {
        // kuch karega
        let div = document.createElement("div");
        div.textContent = notification;
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`;

        document.querySelector(".parent").appendChild(div);
        
        if(config.positionX !== "left" || config.positionY !== "top") {
            document.querySelector(".parent").className += 
            `${config.positionX === "right" ? " right-5" : " left-5"} ${config.positionY === "bottom" ? " bottom-5" : " top-5"}`;
        }

        // apko notification htana pdega 3 sec mein to
        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        }, config.duration*1000);
    };
}

let toaster = createToaster({
    positionX: "right",
    positionY: "bottom",
    theme: "dark",
    duration: 3,
});

toaster("Download Done!");

setTimeout(() => {
    toaster("Vishant accepted your request");
}, 2000);



