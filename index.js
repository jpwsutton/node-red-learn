const EventEmitter = require('events');
const express = require("express");
const http = require("http");
const fs = require("fs");

// Load the Node-RED editor components
const REDEditorAPI = require("@node-red/editor-api");
const REDUtil = require("@node-red/util");
const REDRegistry = require("@node-red/registry");

// Load our fake runtime
const runtimeAPI = require("./lib/runtime/index.js");

const PORT = process.env.PORT || 8000;

var log = REDUtil.log;

// Create the base app and http server
const app = express();
const server = http.createServer(function(req,res) { app(req,res);});
server.on('error', function(err) {
    console.log(err);
});

// Setup the runtime settings
const settings = {
    available: ()  => false,
    httpNodeRoot: "/",
    version: "1.2.4",
   // adminAuth: require("./user-authentication"),
    editorTheme: {
        page: { 
            title: "Node-RED Learn",
            scripts: [
                "/Users/jsutton/ibm/ets/mayflower/outreach/postcard/node-red-learn/tutorial-client.js",
                "/Users/jsutton/ibm/ets/mayflower/outreach/postcard/node-red-learn/tutorial-tab.js",
                "/Users/jsutton/ibm/ets/mayflower/outreach/postcard/node-red-learn/tutorial.js"
            ]
        },
        asset: {
        red: "red/red.js",
        main: "red/main.js",

    },
        header: { title: " Node-RED Learn"},
        palette: { editable: false },
        deployButton: {
            //type:"simple",
            //label:"Save",
            //icon: "/absolute/path/to/deploy/button/image" // or null to remove image
        },
        menu: { // Hide unwanted menu items by id. see packages/node_modules/@node-red/editor-client/src/js/red.js:loadEditor for complete list
            "menu-item-import-library": false,
            "menu-item-export-library": false,
            "menu-item-keyboard-shortcuts": false,
            "menu-item-help": {
                label: "Alternative Help Link Text",
                url: "http://example.com"
            }
        }
    },
    coreNodesDir: __dirname+"/node_modules/@node-red/nodes",
};

REDUtil.init(settings);
// Read in our tutorial definintion
var tutorial = require("/Users/jsutton/ibm/ets/mayflower/outreach/postcard/node-red-learn/tutorial.js");

log.warn("Loaded tutorial: " + tutorial.name);






// Initialise our fake runtime - this seems to be the minimal set needed
// to get the core nodes loaded.
// There may still be some bits of function needed.
const runtime = {
    events: new EventEmitter(),
    settings:settings,
    log: REDUtil.log,
    util: REDUtil.util,
    nodes: { registerType: () => {}},
    library: { register: () => {}},
    get adminApp() { return REDEditorAPI.httpAdmin },
    tutorial: tutorial
}

runtimeAPI.init(runtime);

// Initialise the Node-RED components

REDEditorAPI.init(settings,server,{},runtimeAPI);
REDRegistry.init(runtime)




REDRegistry.load().then(() => REDEditorAPI.start()).then(() => {
// Start the editor-api
    // Attach the editor API app to ours
    app.use("/", REDEditorAPI.httpAdmin);
    server.listen(PORT,function() {
        console.log(`http://localhost:${PORT}`);
    });
});