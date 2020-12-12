const electron = require('electron'); 
const path = require('path'); 
const glue_cli = require('./glue_cli');
const dialog = electron.remote.dialog; 
var uploadFile = document.getElementById('encrypt'); 
var decryptFile = document.getElementById('decrypt'); 
// Defining a Global file path Variable to store  
// user-selected file 
global.filepath = undefined; 
uploadFile.addEventListener('click', () => { 
        dialog.showOpenDialog({ 
            title: 'Select the File to be uploaded', 
            defaultPath: path.join(__dirname, '../assets/'), 
            buttonLabel: 'Upload', 
            filters: [ 
                { 
                    name: 'Text Files', 
                    extensions: ['txt', 'docx'] 
                }, ], 
            properties: ['openFile'] 
        }).then(file => { 
            console.log(file.canceled); 
            if (!file.canceled) { 
            global.filepath = file.filePaths[0].toString(); 
            glue_cli.encrypt(global.filepath) ; 
            }   
        }).catch(err => { 
            console.log(err) 
        }); 
});


decryptFile.addEventListener('click', () => { 
    dialog.showOpenDialog({ 
        title: 'Select the File to be uploaded', 
        defaultPath: path.join(__dirname, '../assets/'), 
        buttonLabel: 'Upload', 
        filters: [ 
            { 
                name: 'Encrypted files', 
                extensions: ['enc'] 
            }, ], 
        properties: ['openFile'] 
    }).then(file => { 
        console.log(file.canceled); 
        if (!file.canceled) { 
        global.filepath = file.filePaths[0].toString(); 
        glue_cli.decrypt(global.filepath) ; 
        }   
    }).catch(err => { 
        console.log(err) 
    }); 
});


