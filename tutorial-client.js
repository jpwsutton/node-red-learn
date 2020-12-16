console.log("Custom client code has been called!");
RED.events.DEBUG = false;
var tutorialState = localStorage.getItem("tutorialState")||{ tutorial: "MAS", stage: 0};
var editorReady = false;
var currentTutorial = 0;



// Intercept flow requests to pull down the correct Tutorial
$( document ).ajaxSend(function(event, jqxhr, settings){
    //console.log("ajaxSend: ", settings);
    if(settings.type ==='GET' && settings.url.startsWith('flows')){
        console.log("Intercepting flows call:", settings);
        settings.url += "&tutorial=" + currentTutorial;
    }
    return true;
});



// Inject our Tutorial Tab and remove other tabs on startup.
RED.events.on('workspace:dirty', (object)=> {
    if(editorReady === false){
        editorReady = true;
        console.log("I think the editor is now ready for some tutorialification.")

        RED.sidebar.removeTab('config');
        RED.sidebar.removeTab('context');
        //RED.sidebar.removeTab('info');
        initTutorialTab(tutorial);



        

       
        
    }
});

RED.events.on('tutorial:restart-step', ()=>{
    currentTutorial = 0;
    // persist to local storage as well in case we are intuurpted
    localStorage.setItem("tutorialState", JSON.stringify({ tutorial: "MAS", stage: currentTutorial}));

    // Clear the editor canvas
    RED.nodes.clear();
    // Request the flows to re-load (Will pull down the new flows)
    loadFlows();

    // Update the Tutorial Pane
    updateTutorialHelp(currentTutorial, false)

})


// Move a tutorial
RED.events.on('tutorial:next-step', ()=>{
    var currentState = JSON.parse(localStorage.getItem("tutorialState"))||{ tutorial: "MAS", stage: 0};
    var nextStage = currentState.stage + 1;
    var final = false
    if(nextStage === tutorial.steps.length -1){
        // Moving onto the final step
        final = true;
    }

    // Set the new current step
    currentTutorial = nextStage;

    console.log("Moving to new tutorial step. Current: " + currentState.stage + ", New: " + currentTutorial)

    // persist to local storage as well in case we are intuurpted
    localStorage.setItem("tutorialState", JSON.stringify({ tutorial: "MAS", stage: currentTutorial}));

    // Clear the editor canvas
    RED.nodes.clear();
    // Request the flows to re-load (Will pull down the new flows)
    loadFlows();

    // Update the Tutorial Pane
    updateTutorialHelp(currentTutorial, final)
})
console.log("Tutorial state is: ", tutorialState);





// Tweaked version of the loadFlows from RED.js
function loadFlows(done) {
    
    $.ajax({
        headers: {
            "Accept":"application/json",
        },
        cache: false,
        url: 'flows',
        success: function(nodes) {
            if (nodes) {
                var currentHash = window.location.hash;
                RED.nodes.version(nodes.rev);
                try {
                    RED.nodes.import(nodes.flows);
                    RED.nodes.dirty(false);
                    RED.view.redraw(true);
                    if (/^#flow\/.+$/.test(currentHash)) {
                        RED.workspaces.show(currentHash.substring(6));
                    }
                } catch(err) {
                    RED.notify(
                        RED._("event.importError", {message: err.message}),
                        {
                            fixed: true,
                            type: 'error'
                        }
                    );
                }
            }
        }
    });
}