        //login page

        const remBtn = document.querySelector(".rem ");
        const remDiv = document.querySelector(".rem .div");
        const circ = document.querySelector(".circ");
        let isRembered = false;
        
        remBtn.addEventListener("click", () => {
            isRembered = !isRembered;

            if(isRembered){
                circ.style.right = "0";
                remDiv.style.backgroundColor = "#1ed760";
                
            }else{
                circ.style.right = "16px";
                remDiv.style.backgroundColor = "#727272";
            }
            
        })