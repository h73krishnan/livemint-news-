let getData = async (url) =>{
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data;
    }
    catch(error){
        console.log("error", error);
    }
}
let appendData = (data) =>{
    document.getElementById("newsDisplay").innerHTML = null;
    // {} will catch the data from the array of objects
    let dataArr = data.articles;
    dataArr.forEach(({urlToImage, title}) => {
        let image = document.createElement("img");
        image.src = urlToImage;
        image.setAttribute("id", "imgNews")
        let box1 = document.createElement("div");
        box1.setAttribute("id", "imgDiv")
        box1.append(image);

        let titleAppend = document.createElement("h4");
        titleAppend = title;
        let box2 = document.createElement("div");
        box2.setAttribute("id","titleDiv");
        box2.append(titleAppend);

        let box = document.createElement("div");
        box.setAttribute("id", "boxNews");

        box.append(box2, box1);

        let btn = document.createElement("button");
        btn.append(box);
        btn.setAttribute("id", "btnNews");

        document.getElementById("newsDisplay").append(btn);
    });
}
export {getData, appendData};