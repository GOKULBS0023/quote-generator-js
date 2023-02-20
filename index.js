$(".quote-box").hide();
$("#btn").click(async function(){
    $(this).text("Getting the new Quote for you..")
    try {
        var url= "https://api.quotable.io/random";
        var response= await fetch(url);
        var data = await response.json();
        var quote = data.content;
        var author = data.author;
        $(".quote-box").show();
        $(".quote").text(quote);
        $(".author").text("~"+author);
        $(this).text("Click to get a new one");
    } catch (error) {
        $(".quote-box").show();
        $(".quote").hide();
        $(".author").text("Error happened kindly try again.");
    }    
})