
  const tutorial = {
        "name" : "My First Node-RED Tutorial",
        "description" : "This is a first crack at building a tutorial for Node-RED",
        "version" : "0.1",
        "requiredNodes":  ["inject", "debug", "switch", "change"],
        "steps" : [
            {
                "stepMarkdown" : "## Your first flow, Inject and Debug.",
                "starterFlow" : {"flows": [], "rev": "0"},
                "targetFlow": {"flows": [
                    {
                        "id": "f45a8d1d.5eca3",
                        "type": "tab",
                        "label": "Flow 1",
                        "disabled": false,
                        "info": ""
                    },
                    {
                        "id": "44047b5f.9df224",
                        "type": "inject",
                        "z": "f45a8d1d.5eca3",
                        "name": "",
                        "props": [
                            {
                                "p": "payload"
                            },
                            {
                                "p": "topic",
                                "vt": "str"
                            }
                        ],
                        "repeat": "",
                        "crontab": "",
                        "once": false,
                        "onceDelay": 0.1,
                        "topic": "",
                        "payload": "",
                        "payloadType": "date",
                        "x": 190,
                        "y": 60,
                        "wires": [
                            [
                                "2d32aba4.51b074"
                            ]
                        ]
                    },
                    {
                        "id": "2d32aba4.51b074",
                        "type": "debug",
                        "z": "f45a8d1d.5eca3",
                        "name": "",
                        "active": true,
                        "tosidebar": true,
                        "console": false,
                        "tostatus": false,
                        "complete": "false",
                        "statusVal": "",
                        "statusType": "auto",
                        "x": 670,
                        "y": 60,
                        "wires": []
                    }
                ],
                "rev": "1"}
            },
            {
                "stepMarkdown" : "## The Switch Node",
                "starterFlow" :  {"flows": [
                    {
                        "id": "f45a8d1d.5eca3",
                        "type": "tab",
                        "label": "Flow 1",
                        "disabled": false,
                        "info": ""
                    },
                    {
                        "id": "44047b5f.9df224",
                        "type": "inject",
                        "z": "f45a8d1d.5eca3",
                        "name": "",
                        "props": [
                            {
                                "p": "payload"
                            },
                            {
                                "p": "topic",
                                "vt": "str"
                            }
                        ],
                        "repeat": "",
                        "crontab": "",
                        "once": false,
                        "onceDelay": 0.1,
                        "topic": "",
                        "payload": "",
                        "payloadType": "date",
                        "x": 190,
                        "y": 60,
                        "wires": [
                            [
                                "2d32aba4.51b074"
                            ]
                        ]
                    },
                    {
                        "id": "2d32aba4.51b074",
                        "type": "debug",
                        "z": "f45a8d1d.5eca3",
                        "name": "",
                        "active": true,
                        "tosidebar": true,
                        "console": false,
                        "tostatus": false,
                        "complete": "false",
                        "statusVal": "",
                        "statusType": "auto",
                        "x": 670,
                        "y": 60,
                        "wires": []
                    }
                ],
                "rev": "1"},
                "targetFlow" : {"flows" : [
                    {
                        "id": "f45a8d1d.5eca3",
                        "type": "tab",
                        "label": "Flow 1",
                        "disabled": false,
                        "info": ""
                    },
                    {
                        "id": "44047b5f.9df224",
                        "type": "inject",
                        "z": "f45a8d1d.5eca3",
                        "name": "",
                        "props": [
                            {
                                "p": "payload"
                            },
                            {
                                "p": "topic",
                                "vt": "str"
                            }
                        ],
                        "repeat": "",
                        "crontab": "",
                        "once": false,
                        "onceDelay": 0.1,
                        "topic": "",
                        "payload": "",
                        "payloadType": "date",
                        "x": 190,
                        "y": 60,
                        "wires": [
                            [
                                "f7838789.10ec68"
                            ]
                        ]
                    },
                    {
                        "id": "2d32aba4.51b074",
                        "type": "debug",
                        "z": "f45a8d1d.5eca3",
                        "name": "",
                        "active": true,
                        "tosidebar": true,
                        "console": false,
                        "tostatus": false,
                        "complete": "false",
                        "statusVal": "",
                        "statusType": "auto",
                        "x": 670,
                        "y": 60,
                        "wires": []
                    },
                    {
                        "id": "f7838789.10ec68",
                        "type": "switch",
                        "z": "f45a8d1d.5eca3",
                        "name": "",
                        "property": "payload",
                        "propertyType": "msg",
                        "rules": [
                            {
                                "t": "eq",
                                "v": "",
                                "vt": "str"
                            }
                        ],
                        "checkall": "true",
                        "repair": false,
                        "outputs": 1,
                        "x": 390,
                        "y": 60,
                        "wires": [
                            [
                                "2d32aba4.51b074"
                            ]
                        ]
                    }
                ],
            "rev": 2}
            },
            {
                "stepMarkdown" : "## The Switch Node",
                "starterFlow" : {"flows" : [
                    {
                        "id": "f45a8d1d.5eca3",
                        "type": "tab",
                        "label": "Flow 1",
                        "disabled": false,
                        "info": ""
                    },
                    {
                        "id": "44047b5f.9df224",
                        "type": "inject",
                        "z": "f45a8d1d.5eca3",
                        "name": "",
                        "props": [
                            {
                                "p": "payload"
                            },
                            {
                                "p": "topic",
                                "vt": "str"
                            }
                        ],
                        "repeat": "",
                        "crontab": "",
                        "once": false,
                        "onceDelay": 0.1,
                        "topic": "",
                        "payload": "",
                        "payloadType": "date",
                        "x": 190,
                        "y": 60,
                        "wires": [
                            [
                                "f7838789.10ec68"
                            ]
                        ]
                    },
                    {
                        "id": "2d32aba4.51b074",
                        "type": "debug",
                        "z": "f45a8d1d.5eca3",
                        "name": "",
                        "active": true,
                        "tosidebar": true,
                        "console": false,
                        "tostatus": false,
                        "complete": "false",
                        "statusVal": "",
                        "statusType": "auto",
                        "x": 670,
                        "y": 60,
                        "wires": []
                    },
                    {
                        "id": "f7838789.10ec68",
                        "type": "switch",
                        "z": "f45a8d1d.5eca3",
                        "name": "",
                        "property": "payload",
                        "propertyType": "msg",
                        "rules": [
                            {
                                "t": "eq",
                                "v": "",
                                "vt": "str"
                            }
                        ],
                        "checkall": "true",
                        "repair": false,
                        "outputs": 1,
                        "x": 390,
                        "y": 60,
                        "wires": [
                            [
                                "2d32aba4.51b074"
                            ]
                        ]
                    }
                ],
            "rev": 3},
                "targetFlow" : {"flows" : [
                    {
                        "id": "f45a8d1d.5eca3",
                        "type": "tab",
                        "label": "Flow 1",
                        "disabled": false,
                        "info": ""
                    },
                    {
                        "id": "44047b5f.9df224",
                        "type": "inject",
                        "z": "f45a8d1d.5eca3",
                        "name": "",
                        "props": [
                            {
                                "p": "payload"
                            },
                            {
                                "p": "topic",
                                "vt": "str"
                            }
                        ],
                        "repeat": "",
                        "crontab": "",
                        "once": false,
                        "onceDelay": 0.1,
                        "topic": "",
                        "payload": "",
                        "payloadType": "date",
                        "x": 190,
                        "y": 60,
                        "wires": [
                            [
                                "f7838789.10ec68"
                            ]
                        ]
                    },
                    {
                        "id": "2d32aba4.51b074",
                        "type": "debug",
                        "z": "f45a8d1d.5eca3",
                        "name": "",
                        "active": true,
                        "tosidebar": true,
                        "console": false,
                        "tostatus": false,
                        "complete": "false",
                        "statusVal": "",
                        "statusType": "auto",
                        "x": 670,
                        "y": 60,
                        "wires": []
                    },
                    {
                        "id": "f7838789.10ec68",
                        "type": "switch",
                        "z": "f45a8d1d.5eca3",
                        "name": "",
                        "property": "payload",
                        "propertyType": "msg",
                        "rules": [
                            {
                                "t": "eq",
                                "v": "",
                                "vt": "str"
                            }
                        ],
                        "checkall": "true",
                        "repair": false,
                        "outputs": 1,
                        "x": 390,
                        "y": 60,
                        "wires": [
                            [
                                "2d32aba4.51b074"
                            ]
                        ]
                    }
                ],
            "rev": 4}
            }
        ]
    }


try{
    module.exports = tutorial;
} catch (err){
    // Probably loading in the browser, ignore
}
    