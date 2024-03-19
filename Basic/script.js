function addListenersForAllButtons(){

    const allButtons = document.getElementsByClassName('button');
  
    console.log(allButtons)
  
    const allButtonsAsArray = Array.from(allButtons);
  
    for (let index = 0; index < allButtonsAsArray.length; index ++ ){
  
      const divButton = allButtonsAsArray[index];
  
      divButton.addEventListener("click",  handleButtonEvent)
  
    }
  }
  
  function handleButtonEvent(event){
  
    console.log("Button click event ")
  
    const divButtonText = getTextualContent(event);
  
    if (divButtonText == "Clear"){
  
      handleClear(event)
    }else if (divButtonText == "BACKSPACE"){
  
      handleBackspace(event)
    }else if (divButtonText == "="){
  
      handleEquals(event)
    }else {
  
      updateIOpanel(event);
    }
  
  }

  function handleClear(event){

    const ioPanel = document.getElementById("ioPanel")
    
    ioPanel.innerText = "";
  }
  

    // function handleOperators(event){

    // }

    function handleBackspace(event){

        const ioPanel = document.getElementById("ioPanel")
        const ioPanelText = ioPanel.innerText

        if(ioPanelText.length > 0){
            const trimmedText 
            = ioPanelText.substring(0,(ioPanelText.length - 1))
           console.log("Trimmed Text is" + trimmedText);
   
           ioPanel.innerText = trimmedText;
        }

        console.log("Backspace button clicked");

    }

    // function handleNumbers(event){

    // }

    // function handleDotButton(event){

    // }

    // function handleParanthisis(event){

    // }

    function handleEquals(event){
        const ioPanelText = getIoPanelContent(event)
           console.log("Equal buttons clicked");

        // empty check
        //Invalid Expression
        //valid Expression

        if(ioPanelText == ''){
            ioPanel.innerText = "<NO VALUE ENTERED>"
        }else{

          try{
            const outcome = eval(ioPanelText)
            
            console.log("Outcome is " + outcome);
            ioPanel.innerText = outcome;

          }catch(error){

            ioPanel.innerText = "Expression Error: [" + ioPanelText +"]"
          }
            
        }
    }
    

    function updateIOpanel(event){

      const ioPanel =  document.getElementById("ioPanel")

       const divButtonText =  getTextualContent(event)

       const finalTextUpdate = ioPanel.innerText + divButtonText
       
       ioPanel.innerText = finalTextUpdate;

    }

    function getTextualContent(event){
        const divButtonTarget= event.target;
       const divButtonText = divButtonTarget.innerText
       return divButtonText;
    }

    function getIoPanelContent(event){
        const ioPanel =  document.getElementById("ioPanel")
        return ioPanel.innerText;
    }

addListenersForAllButtons()
