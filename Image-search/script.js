const accessKey = "Uir3Df_UJ4Ma2hJ2xzhhOtoIjd_-Y9XxWFXbli-OhmI";

const fromEle = document.querySelector("form");
const inputEle = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");
let inputData = "dog";
let page = 1;

async function searchImages() {
  inputData = inputEle.value;
  const url = `https://api.unsplash.com/search/photos/?page=${page}&query=${inputData}&client_id=${accessKey}`;

  const response=await fetch(url);
  const data=await response.json();
console.log(data)
  const results=data.results;

  if(page===1){
    searchResults.innerHTML="";
  }

  results.map((result)=>{
    let imageWrapper=document.createElement('div');
    imageWrapper.classList.add('search-result');
    imageWrapper.innerHTML=" ";
    const image=document.createElement('img');
    image.src=result.urls.small;
    image.alt=result.alt_description;
    // console.log(image.src)
    const imageLink=document.createElement('a');
    imageLink.href=result.links.html;
    imageLink.target="_blank";
    imageLink.textContent=result.alt_description;
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResults.appendChild(imageWrapper);
  });

  page++;

  if(page>1){
    showMore.style.display="block";
  }

}



fromEle.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImages();

})
// fromEle.addEventListener("click",()=>{
    
//     searchImages();

// })

showMore.addEventListener("click",()=>{
  setTimeout(() => {
    searchImages();
  }, 0);
})