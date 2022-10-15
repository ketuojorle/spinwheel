window.addEventListener("load", function(){
    

    let raffleMachine = document.getElementById("raffle-machine");
    let partition = document.getElementById("partition"); 
    let siteName = document.createElement('h1');
    siteName.setAttribute('id', 'game-name');
    siteName.innerHTML = "Spin<span class='green'>wheel</span>";
    partition.appendChild(siteName);
    let spinningWheel = document.getElementById("wheel");
    let axialDisc = document.getElementById("axial-disc"); 
    axialDisc.innerHTML = "Tap to Spin Wheel";
    let resetElem = document.getElementById("reset-span");
    let resetButton; 
    let rollingTime = 20000;
    let winnerTicket;
    let wheelSound = document.createElement('AUDIO');
    let pickedTicketHolder = document.getElementById("tk-display");
    let pickedTicketContent = document.getElementById("tk-content");
    let winnerTicketHolder = document.getElementById("winner-display");
    let winnerTicketContent = document.getElementById("winner-content");
    let ticketBox = document.getElementById("tk-box");
    let ticket;
    let pickedTicketNumber; 
    let comment = document.getElementById("remark");
    let btn = this.document.querySelectorAll('button');

    
    axialDisc.onclick = function(){  //WHEN THE CENTER DISC IS CLICKED , IT SHOULD ROLL FOR rollingTime PERIOD
     //TO CHECK IF TICKET HAD BEEN PICKED. IF NOT IT SHOULD NOT EXECUTE
      function checkIfTicketIsPicked(){
      if(pickedTicketContent.innerHTML ==""){
         comment.textContent = `You haven't pick a ticket.`;
         comment.style.animationPlayState = "running"; //START BLINKING ALERT
         return false;
         }else{ comment.textContent = " ";
                comment.style.animationPlayState = "paused";
                rollingStart(); 
                rollingStop(); }
              
                      }      
        checkIfTicketIsPicked(); 
      /*
      if(pickedTicketContent.innerHTML !=="" || spinningWheel.style.animationPlayState ==="paused"){
         for(let b=0;b < btn.length; b++){btn[b].disabled = true;}
         }  */
     
     function rollingStart(){
         for(let b=0;b < btn.length; b++){btn[b].disabled = true;} //DEACTIVATE TICKET TO AVOID ADJUSTMENT THAT MAY MATCH OUTCOME           
                 spinningWheel.style.animationPlayState = "running";  //WHEEL SHOULD START ROLLING                    
                 wheelSound.src = 'largeCoins.mp3';
                 wheelSound.play(); 
                 wheelSound.currentTime = 3;
                 wheelSound.loop = true;
                 wheelSound.playbackRate = 2; 
                 wheelSound.volume = 1.0;              
                 axialDisc.innerHTML = " ";
                 winnerTicket = Math.floor(Math.random()* 10) + 1;  //RANDOM NUMBER BETWEEN 1 AND 10
                 axialDisc.onclick = function(){return false;}; //IF CENTER DISC IS CLICKED WHILE ROLLING, IT SHOULD NOT START ALL OVER                                       
                     }
             //    rollingStart();

     function rollingStop(){ 
      setTimeout(function(){for(let b=0;b < btn.length; b++){btn[b].disabled = false;} // DEACTIVATE TICKET
                 spinningWheel.style.animationPlayState = "paused";
                 axialDisc.style.backgroundColor = 'red';         
                 axialDisc.innerHTML= `Winner Ticket : ${winnerTicket}`;
                 wheelSound.pause();
                 wheelSound.src = 'wwbamstop.mp3'; //CHANGING OF SOUND EFFECT
                 wheelSound.play(); 
                 wheelSound.currentTime = 30;
                 wheelSound.loop = false;
                 wheelSound.playbackRate = 2; 
                 wheelSound.volume = 1.0; 
                 winnerTicketContent.innerHTML = `${winnerTicket}`;
                 winnerTicketHolder.style.visibility = 'visible';          
                 if(winnerTicket == pickedTicketNumber){ //CHECKING IF OUTCOME SAME AS TICKET PICKED FOR COMMENT PURPOSE
                    comment.textContent = `Congratulations, you are a genius! Try again.`;
                    comment.style.animationPlayState = "running";
                 }else{comment.textContent = `OOOooopsss! Wrong prediction, try one more time`; 
                 comment.style.animationPlayState = "running";}             
                 resetButton= document.createElement('INPUT'); 
                 resetButton.setAttribute('type','button');
                 resetButton.setAttribute('class','reset-button');
                 resetButton.setAttribute('value','Reset Wheel');
                 resetElem.appendChild(resetButton);
                 resetButton.style.backgroundColor = 'green';
                 resetButton.onclick = function(){window.location.reload(true);  resetElem.removeChild(resetButton);};
                 axialDisc.onclick = function(){comment.textContent = `Reset wheel.`; return false;}; //STOP FUNCTION IF THE WHEEL IS NOT RESET                 
                 },rollingTime);
                 } 
             //   rollingStop();
             
                 } //END OF axial-disc onclick
    
           //WHAT HPPEN WHEN A TICKET IS PICKED FROM TICKET BOX

           
           ticketBox.addEventListener('click', function(event){    
            if(event.target.matches('button')){      
               ticket = event.target;
               pickedTicketNumber = ticket.textContent;

               if(ticket){       
                 if(pickedTicketContent.innerHTML =="" || winnerTicketContent.innerHTML =="")
                   {pickedTicketContent.innerHTML = pickedTicketNumber; 
                    pickedTicketHolder.style.visibility = 'visible';
                  }else{ comment.textContent = `Reset Wheel.`; 
                         comment.style.animationPlayState = "running"; 
                          return false;
                       }
              //
              //STOP COMMENT BLINKING WHILE THE WHEEL ROLLS
                 if(comment.textContent !== "" && comment.style.animationPlayState ==="running"){
                    comment.style.animationPlayState ==="paused";
                    comment.textContent = "";
                             } 
                          
               }     
                     
                            
           }});

    
             
            }); 
    
    // | \
    
    
    
    
    
    

    
    
    
    
    
    
    
    