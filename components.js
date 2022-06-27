/*
 * BRYAN MEDIA LLC
 * JAVASCRIPT LIBRARY CREATED BY BRYAN BENSON DANQUAH
 * STARTED AT FRI,JAN 24,2022.9:12AM
 * AMIN TO CREATE FUNCTIONS THAT WILL MAKE WEB DEV
   EASY AND FAST
 * APPROACH IS OBJECT LITERALS.
 * CODE IS FULLY OPEN SOURCE AND LICENSED UNDER MIT
 * FIND ME ON BRYANMEDIA.SITE.
 *+233549542302
 */

 let $=(El)=> {
   "use strict";
  let  libObj={
   on:(event,callback)=>{
   
   if(El.constructor.name==="String"){
     document.querySelector(El).addEventListener(event, callback)
   }
   if(El.constructor.name==="Window"){
     window.addEventListener(event,callback)
   }
   if(El.constructor.name==="HTMLDocument"){
     document.addEventListener(event,callback)
   }
     
   },
   put: function(txt) {

      document.querySelector(El).innerHTML += txt;



    },
    style:(Css={

    })=>{
      if(!Object.keys(Css).length<1){
      
      for (const key in Css) {
        
document.querySelector(El).style.setProperty(key, Css[key],null)
}
      }else{
        console.warn("Css manipulation object has no values")
      }
    },
    
    fadeOut:(duration)=>{
      document.querySelector(El).style.opacity=0;
      document.querySelector(El).style.transition=(duration/1000)+"s";
         setTimeout(()=>{
           document.querySelector(El).style.display="none";
           },duration)
    },
    fadeIn:(duration)=>{
       
       if(document.querySelector(El).style.display=="none"){
         //console.warn("Fade in Function expects selector to have opacity 0 or display none or visibility hidden");
        document.querySelector(El).style.opacity="0";
        document.querySelector(El).style.display="block";
       }
       if(!document.querySelector(El).style.display=="none"&&!document.querySelector(El).style.visibility=="hidden"&&!document.querySelector(El).style.opacity<1){
         console.warn("fadeIn() expects element to have opacity 0 or display none or visibility hidden");
        
       }
       
       document.querySelector(El).style.transition=(duration/1000)+"s";
       setTimeout(()=>{
         
          
          document.querySelector(El).style.opacity=1;
       },100);
    },
    fadeToggle:(duration)=>{
     
        
      if (document.querySelector(El).style.display=="none"||document.querySelector(El).style.visibility=="hidden"||document.querySelector(El).style.opacity<1) {
      
        document.querySelector(El).style.opacity="0";
        document.querySelector(El).style.display="block";
       
       
       document.querySelector(El).style.transition=(duration/1000)+"s";
       setTimeout(()=>{
         
          
          document.querySelector(El).style.opacity=1;
          document.querySelector(El).style.height="auto";
       },100);
        
      }else{
        document.querySelector(El).style.opacity=0;
      document.querySelector(El).style.transition=(duration/1000)+"s";
      
      
         setTimeout(()=>{
           document.querySelector(El).style.display="none";
           document.querySelector(El).style.height=0;
           },duration)
      }
    },
    
 getAllEl:()=>{
   if (document.querySelectorAll(El).length<2||document.querySelectorAll(El)===null) {
     console.warn("Calling all() on fewer element , Use  select instead");
   }
    return document.querySelectorAll(El);
    

    },
    getEl:()=>{
      if (document.querySelector(El)) {
      return document.querySelector(El)
   }
    },
    Class:{
      exists:(cls)=>{
        if (document.querySelector(El).classList.contains(cls)) {
        return true;
      } 
      },
      add:(cls)=>{
        if (!document.querySelector(El).classList.contains(cls)) {
        document.querySelector(El).classList.add(cls);
      } else {
        throw new Error("Class already exists. use toggleClass or removeClass instead")
      }
      },
      remove:(cls)=>{
        if (document.querySelector(El).classList.contains(cls)) {
        document.querySelector(El).classList.remove(cls);
      } else {
        throw new Error("Class does not  exists. use toggleClass or addClass instead")
      }
      },
      toggle:(cls)=>{
        if (document.querySelector(El).classList.contains(cls)) {
        document.querySelector(El).classList.remove(cls)

      } else {
        document.querySelector(El).classList.add(cls);


      }
      }
    },
    
   }
 return libObj;
 }
 

let Bryan={
components:{
  toast: function(Al = {
      message: "",
      duration: duration,
      width: width,
      height: height,
      offset:offset ,

    }) {
     
      function create(){
        
      let w= Al.width+"px";
      let h=Al.height+"px";
      let b=Al.offset+"px";
      let cW = screen.width;
      let actW = ((cW - Al.width)/2);
      let modDiv = document.createElement("div");
      modDiv.classList.add("cmodal");
      let p = document.createElement("p");
      
      if (Al.message == "") {
        throw new Error("Toast Message is a Required Field");
        return
      }
      let node = document.createTextNode(Al.message);
      p.appendChild(node);
      modDiv.appendChild(p);
      let parent=document.body;
      parent.appendChild(modDiv);
      $(".cmodal").style({
        color:"#fff",
        background:"linear-gradient(45deg,hotpink, cornflowerblue)",
        display:"flex",
        "justify-content":"center",
        "align-items":"center",
        padding:"20px",
        "border-radius":"12px",
        "flex-wrap":"wrap",
        position:"absolute",
        transition:Al.duration,
        width:w,
        height:h,
        bottom:b,
        left:actW
      })
          setTimeout(()=>{
                   modDiv.style.opacity = 0;
         // parent.removeChild(document.querySelector(".cmodal"))
         modDiv.style.display="none"
         modDiv.classList.remove("cmodal")
          },Al.duration)
      }
      if (!$(".cmodal").getEl()){
        create();
      }

    }
}

}
