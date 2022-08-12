async function foo(){
    var res=await fetch ("http://makeup-api.herokuapp.com/api/v1/products.json");
    var result=await res.json();
    console.log(result);
    document.addEventListener("DOMContentLoaded",async()=>{
       let result = [];
 
       try{
          result = await foo();
 
       }catch(e){
          console.log("Error!");
          console.log(e);
 
       }
       console.log(result);
    });
 
     for(i=1;i<10;i++){
         let div=document.createElement("div");
         div.innerHTML=` <div class="container">
         <div class="row ">
           <div class="col-md-4">
              <div class="card">
                 <h5 class="card-title1">${result[i].brand}</h5>
                 <img src="${result[i].image_link}" class="card-img-top" alt="jpg">
                  <div class="card-body">
                     <h5 class="card-title">Product Name : ${result[i].name}</h5>
                     <h5 class="card-title">Product Price: ${result[i].price}</h5>
                     <h5 class="card-title">Description: ${result[i].description}</h5>
                    
                     <a href=${result[i].product_link} class="btn btn-primary">Product-link</a>
                  </div>
              </div>
           </div> 
         </div>
         <nav aria-label="Page navigation example">
   <ul class="pagination">
     <li class="page-item"><a class="page-link" href="#">Previous</a></li>
     <li class="page-item"><a class="page-link" href="#">1</a></li>
     <li class="page-item"><a class="page-link" href="#">2</a></li>
     <li class="page-item"><a class="page-link" href="#">3</a></li>
     <li class="page-item"><a class="page-link" href="#">Next</a></li>
   </ul>
 </nav>
      </div>`
       document.body.append(div)
      
       
     }
    }
    foo();
 
    