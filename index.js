
let key  = "AIzaSyBBwvuGSuNxd6HSS6KHVfw2yOmIHr_ZITk";

// let key = "AIzaSyCSz7yjTdcx9x67YnLSLMouiQWh3oNsquc";

let searchResultsDiv = document.getElementById("searchResults");


    const searchVideo = async() => {
        try{

            let userInput = document.getElementById("searchTerm").value;
            let res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&q=${userInput}&type=video&part=snippet&maxResults=20`);
            let data = await res.json();
            
            console.log(data);
            let thumbnails = data.items;
            displayData(thumbnails);
        }

        catch(err){
            console.log(err);
        }

    }
    
    let searchResult = document.getElementById("searchResult");

    function displayData(thumbnails){
        searchResult.innerHTML="";
        thumbnails.forEach(function(element){
            // console.log(element.snippet.thumbnails.high.url);

            let div = document.createElement("div");
            div.addEventListener("click",function(thumbnails){
                console.log(element);
                let arr = [];
                arr.push(element.id.videoId);
                console.log(arr);
                localStorage.setItem("video",JSON.stringify(arr));
                window.location.href="showVideo.html";
            });
            
            let img = document.createElement("img");
            img.setAttribute("src",element.snippet.thumbnails.medium.url);
            let descript = document.createElement("h3");
            descript.innerHTML=element.snippet.title;
            let channel = document.createElement("p");
            channel.innerHTML=element.snippet.channelTitle;
            
            div.append(img,descript,channel);
            searchResult.append(div);
        });
    }

    // const playVideo = (videosArray) =>{
        // searchResult.innerHTML="";
        // [{},{},{}]
        // console.log(videosArray);
        // create an iframe
        // localStorage.setItem("video",JSON.stringify(videosArray));
        // window.location.href="showVideo.html";
        // videosArray.forEach((video) => {
        //     // let videoId = video.id.videoId;            
        //     // console.log(videoId);
        //     const {
        //         id: {videoId},
        //     } = video;
            
        //     console.log(videoId);

        //     let videoCard = document.createElement("div");

        //     let iframe = document.createElement("iframe");
        //     iframe.src=`https://www.youtube.com/embed/${videoId}`;
        //     iframe.setAttribute("allowfullscreen",true);
        //     iframe.width="100%";
        //     videoCard.append(iframe);
        //     searchResult.append(videoCard);
        // });

    // };


    async function SearchVideo(){
        try{
            
            let userInput = document.getElementById("searchTerm").value;

            let res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&q=${userInput}&type=video&part=snippet&maxResults=20`);
            let data = await res.json();
            let Sitem = data.items;
            showList(Sitem);
            // console.log(data);
        }
        catch(err){
            console.log(err);
        }
        
    }

    let x;
    let SearchResult = document.getElementById("SearchResult");

    function showList(Sitem){

        clearInterval(x);

        x = setTimeout(() => {
            // console.log(Sitem);
            Sitem.forEach(function(elem){
                let div = document.createElement("div");
                
                let name = document.createElement("p");
                name.innerHTML=elem.snippet.title;

                div.append(name);

                SearchResult.append(div);
            });
        }, 1000);
    }

