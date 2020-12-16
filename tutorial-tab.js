var content = document.createElement("div");
content.className = "red-ui-sidebar-node-tutorial";
content.id = "red-ui-sidebar-node-tutorial";
content.tabIndex = 0;

$('<div class="red-ui-sidebar-header"><h2>Node-RED Tutorials!</h2></div><div id="tutorial-content"></div><div id="tutorial-button"></div>'
).appendTo(content);

//$('<div class="tutorial-content"><br/></div>').appendTo(content);




function initTutorialTab(tutorial){
    console.log("Tutorial: ", tutorial);

   


    RED.sidebar.addTab({
        id: "tutorial",
        label: "Tutorial",
        name: "Tutorial",
        content: content,
        toolbar: toolbar,
        iconClass: "fa fa-university",
        action: "tutorial:show-tutorial-tab",
        onchange: function() { 
    
    
         },
        pinned: true,
        enableOnEdit: true
    });
    RED.sidebar.show('tutorial');
    RED.actions.add("tutorial:show-tutorial-tab", function() {RED.sidebar.show('tutorial')});

    


  

    updateTutorialHelp(0, false)

}


function updateTutorialHelp(tutStepId, final){

     // Set up the content with the first step of the tutorial.
    //$(RED.utils.renderMarkdown("# Hello world")).appendTo(content);
    $("#tutorial-content").html(RED.utils.renderMarkdown(tutorial.steps[tutStepId].stepMarkdown||""))

    if(final == false){
        $("#tutorial-button").html('<button class="ui-button  ui-widget primary" id="tutorial-next">Next</button>');
    } else  {
        $("#tutorial-button").html('<button class="ui-button  ui-widget primary" id="tutorial-restart">Restart Tutorial</button>');
    }

    $("#tutorial-next").on("click", function(e) {
        e.preventDefault();
        console.log("Tutorial Next Button Pressed!");
        RED.events.emit("tutorial:next-step");
    });

    $("#tutorial-restart").on("click", function(e) {
        e.preventDefault();
        console.log("Tutorial restart Button Pressed!");
        RED.events.emit("tutorial:restart-step");
    });

   

}

console.log("tut tab script end")