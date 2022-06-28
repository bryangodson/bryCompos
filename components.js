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
    Attr:{
      has:(attr)=>{
       let element= $(El).getEl();
       if (element.hasAttribute(attr)) {
         return true
        
       }else{
         return false;
         throw new Error("element has no such attribute");
       }
        
      },
      setVal:(attri,val)=>{
        let e = $(El).getEl();
       let ans= e.getAttribute(attri);
        if (val==ans) {
          throw new Error("Attribute value already exists" )
        }else{
          e.setAttribute(attri,val)
        }
        
      },
      getVal:(att)=>{
       
        if ($(El).Attr.has(att)){
          let val= $(El).getEl().getAttribute(att);
          return val
       
        }else{
          throw new Error("Atrribute  does not exists");
        }
        
      },
      remove:(at)=>{
        
        if ($(El).Attr.has(at)) {
          $(El).getEl().removeAttribute(at);
        }
        
      },
     /* create:(t)=>{
        
        if (!$(El).Attr.has(t)) {
          //$(El).getEl().createAttribute(t);
          
        }
        
      },
      toggle:(atr)=>{
        let tr=$(El).getEl();
        if (tr.Attr.has(atr)) {
          tr.Attr.remove(atr)
        }else{
          tr.Attr.create(atr)
      }
    }*/
    },
    togglePass:()=>{
      let x=$(El).getEl();
      if (x!=undefined) { 
        
      if ($(El).Attr.getVal("type")==="password"||$(El).Attr.getVal("type")==="text") {
        if ($(El).Attr.getVal("type")==="password") {
        $(El).Attr.setVal("type","text")
      }else{
        $(El).Attr.setVal("type","password")
      }
      }else{
        throw new Error ("Element is invalid for password toggle")
      }
      }else{
        throw new Error ("Element is not found")
      }
      
    },
    /*all:()=>{
      let x=$(El).getAllEl();
     x.forEach(Elll=> {
      
         Elll.type==="text"?Elll.type="password":Elll.type="text"
         
      
     });
      
    },*/
    
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
        background:"#006270",
        display:"flex",
        "justify-content":"center",
        "align-items":"center",
        padding:"20px",
        "border-radius":"12px",
        "flex-wrap":"wrap",
        position:"absolute",
        transition:"0.5s" ,
        width:w,
        height:h,
        bottom:b,
        left:actW+"px",
        opacity:1,
      })
          setTimeout(()=>{
                   modDiv.style.opacity = 0;
         // parent.removeChild(document.querySelector(".cmodal"))
         if (modDiv.style.opacity==0) {
           setTimeout(()=>{
           modDiv.style.display="none"
         modDiv.classList.remove("cmodal")
         },300)
         }
          },Al.duration)
      }
      if (!$(".cmodal").getEl()){
        create();
      }

    },
    btn:(config={})=>{
      let input=document.createElement("input");
      input.setAtrr
      
      
    }
}

}
