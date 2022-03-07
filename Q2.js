
// let key  = "AIzaSyBBwvuGSuNxd6HSS6KHVfw2yOmIHr_ZITk";

// let searchResultsDiv = document.getElementById("searchResults");


//     const searchVideo = async() => {
//         try{

//             let userInput = document.getElementById("searchTerm").value;
//             let res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${key}&q=${userInput}&type=video&part=snippet&chart=mostPopular&maxResults=20`);
//             let data = await res.json();
            
//             console.log(data);
//             let thumbnails = data.items;
//             displayData(thumbnails);
//         }

//         catch(err){
//             console.log(err);
//         }

//     }
    
//     searchVideo();
    
//     let searchResult = document.getElementById("randomVideos");

//     function displayData(thumbnails){
//         searchResult.innerHTML="";
//         thumbnails.forEach(function(element){

//             let div = document.createElement("div");
//             div.addEventListener("click",function(thumbnails){
//                 // playVideo(thumbnails);
//                 // console.log(element);
//                 let arr = [];
//                 arr.push(element.id.videoId);
//                 console.log(arr);
//                 localStorage.setItem("video",JSON.stringify(arr));
//                 window.location.href="showVideo.html";
//             });
            
//             let img = document.createElement("img");
//             img.setAttribute("src",element.snippet.thumbnails.high.url);
//             let title = document.createElement("h3");
//             title.innerHTML=element.snippet.title;
//             let channel = document.createElement("p");
//             channel.innerHTML=element.snippet.channelTitle;
            
//             div.append(img,title,channel);
//             searchResult.append(div);
//         });
//     }