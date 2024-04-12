// getElementById()
    //type 1 - store type
        let store=document.getElementById("change");
        console.log(store);
        //change html data in JS , we use innerHTML
        store.innerHTML= "  TAMIL"

    //type 2 - 
        document.getElementById("change").innerHTML="Hii Dude, You are Welcome"


// getElementsByName
    let para1=document.getElementsByClassName("para");
    console.log(para1);       //It returns --> all same class names are gives within a array.

    //How to replace the array value in innerHTML
   para1[2].innerHTML="Welcomt to my Page"


// gerElementsByTagName
    para2=document.getElementsByTagName("p");
    console.log(para2);       //It returns --> all same tag names are gives within a array.
    para2[3].innerHTML="Changed"



//Event Attributes
    //1.OnClick
        ///while click a button , change content by id
            function hello(){ 
            let sambavam=document.getElementById("cat")
            sambavam.style.color="red"           //readElement.style.color
            sambavam.style.fontSize="70px"       //readElement.style.
            sambavam.style.backgroundColor="black"
}

        ///while click a button , change content by class||Tag name
            function contentclick(){
                let headingthree=document.getElementsByTagName("h3");
                for(let i=0;i<headingthree.length;i++){
                    headingthree[i].innerHTML="Changed Heading";
                    headingthree[i].style.backgroundColor="#17224D";
                    headingthree[i].style.color="white";
                
                }
            }

