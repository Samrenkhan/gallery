var btn=document.querySelector(".bt")

arr=[]

btn.addEventListener("click",function(){
    let name =document.querySelector("input").value
     let pr= document.querySelector(".box").innerHTML=name
    arr.push(pr)
    clutter = "" 
    arr.forEach(myfunc)
    function myfunc(val,i){
        clutter += `<div class="mainbox">
        <div id ="${i}"class="box">${val} <span><i class="ri-edit-2-fill"></i> <i class="ri-delete-bin-4-fill"></i></span></div>
        
    </div>`

    }
  document.querySelector("input").value=""

  
  
  
    document.querySelector(".mainbox").innerHTML=clutter

    document.querySelectorAll(".box").forEach(element => {
        element.addEventListener("click",function(dets){
        dets.target.style.display="none"
      

        })
        
    }); 
    // document.querySelector(".mainbox").innerHTML=clutter
    

})

// document.querySelector(".box").style.display=dets.target.dataset.display



























