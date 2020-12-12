const electron = require('electron'); 
var shell = require('shelljs');
shell.config.execPath = shell.which('node').toString()
function encrypt(file_path)
{
    shell.exec('./encryptor-cli/encryptor encrypt ' + file_path)
    electron.shell.showItemInFolder(file_path + ".enc")
}

function decrypt(file_path)
{
    shell.exec('./encryptor-cli/encryptor decrypt ' + file_path)
    electron.shell.showItemInFolder(file_path + ".decrypted")
}

module.exports = {encrypt, decrypt}