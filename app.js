const gifArea = $("#gifContainer")

$("#searchForm").on("submit", async function(event) {
    event.preventDefault();
    let searchTerm = $("#searchTerm").val();
    const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
    const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`;

    $("#searchTerm").val("");

    const res = await axios.get(url);
    addGif(res);
})

function addGif(res) {
    let data = res.data.data;
    if (data) {
        let index = Math.floor(Math.random() * data.length);
        let src = data[index].images.original.url;
        const img = $("<img>", { src: src });
        gifArea.append(img);
    }
}

$("#removeGifs").on("click", function() {
    gifArea.empty();
})