const loadCategorys=()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(response=>response.json())
    .then(data=>displayShowCategorys(data.categories))
    .catch(error=>console.log(error)
    )
}

const loadVideos=()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(response=>response.json())
    .then(data=>VideosViewport(data.videos))
    .catch(error=>console.log(error))
    
}

const loadCategoriesvideo =(id)=>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(response=>response.json())
    .then(data=>{
        VideosViewport(data.category)
       const activeBtn=document.getElementById(`btn-${id}`)
        activeBtn.classList.add("active")
        console.log(activeBtn) 
    })
    .catch(error=>console.log(error))
    
   
}


/**
 * 
 * categories 
 */

const displayShowCategorys=(datas)=>{
    const categoriesContainar=document.getElementById('categoryes-btn')
   for(const data of datas){
    const categoryesBtn=document.createElement('div') 
    // console.log(data)
    categoryesBtn.innerHTML=`
    <button id="btn-${data.category_id}"
     onclick="loadCategoriesvideo(${data.category_id})" 
      class="btn categories-btn ">${data.category}</button>`;
    
    categoriesContainar.appendChild(categoryesBtn)
        
   }

}

/**video show 
 * 
 * 
 * {
    "category_id": "1003",
    "video_id": "aaaf",
    "thumbnail": "https://i.ibb.co/5LRQkKF/stick-and-stones.jpg",
    "title": "Sticks & Stones",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/rdTZrCM/dev.jpg",
            "profile_name": "Dave Chappelle",
            "verified": true
        }
    ],
    "others": {
        "views": "113K",
        "posted_date": ""
    },
    "description": "Dave Chappelle's 'Sticks & Stones' has garnered 113K views and remains a controversial yet highly engaging piece of stand-up comedy. Known for his fearless approach, Dave dives into a wide range of topics, delivering his unique perspective with wit and sharp humor. As a verified artist, Dave's comedy is raw, honest, and unapologetically funny."
}
*/
const VideosViewport=(videos)=>{
    const VideosContainer=document.getElementById('videoContainer')
    VideosContainer.innerHTML=" "
    if(videos.length==0){
        VideosContainer.classList.remove('grid')
        VideosContainer.innerHTML=`
       <div class="flax flex-col justify-center items-center  ">
       <img class="mx-auto"
      src="images/Icon.png"
      alt="" />
       <h2 class="text-center">No content this here
       </h2>

       </div>`
        return;
    }



    for(const video of videos){
        const videoitem=document.createElement('div')
        videoitem.classList="card card-compact   shadow-xl "
        videoitem.innerHTML=`
         <div class=" w-full h-52">
    <img class="w-full h-full object-cover"
      src=${video.thumbnail
      }
      alt="Shoes" />
  </div>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
        
        `
        VideosContainer.appendChild(videoitem)

        

        
        
    }

}
loadVideos()


loadCategorys();
displayShowCategorys()