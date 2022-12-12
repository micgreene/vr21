const client_id = "KDPhqj7zt-ySxB60P-SGK1Gppahsz8y2kKcEZfxG1ks"; // Create an account with unsplash api;

function search(searchVal) {
    fetch(
        `https://api.unsplash.com/search/photos?query=${searchVal}&per_page=21&client_id=${client_id}`
    )
        .then((response) => response.json())
        .then((data) => {
            const container = document.querySelector(".container");
            for (let i = 0; i < data.results.length - 1; i++) {
                const newDiv = document.createElement("div");
                newDiv.setAttribute("class", "image-card");

                const img = document.createElement("img");
                img.setAttribute("src", data.results[i].urls.thumb);

                let newTitle = data.results[i].alt_description.toUpperCase();
                const title = document.createElement("h3");
                title.setAttribute("class", "card-title");
                title.innerText = newTitle;


                const description = document.createElement("h5");
                description.setAttribute("class", "card-descr");
                if (data.results[i].description) {
                    let newDescr = data.results[i].description;
                    description.innerText = newDescr;
                } else {
                    description.innerText = "Default description. Thank you for using my App";
                }


                newDiv.append(img, title, description);
                container.append(newDiv);
            }
        });
}

document.querySelector(".search-button").addEventListener("click", (e) => {
    //clear the screen of cards first, if there are any
    if(document.querySelector(".container").lastElementChild){
        let child = document.querySelector(".container").lastElementChild;
        while (child) {
            
            document.querySelector(".container").removeChild(child);
            child = document.querySelector(".container").lastElementChild;
        }
    }   

    search(document.querySelector(".search-bar").value);
});
