function setFolderMetadata(localFileSystem, subFolder, metadataKey, metadataValue) 
{
    var onSetMetadataWin = function() {
      console.log("success setting metadata")
    }
    var onSetMetadataFail = function() {
      console.log("error setting metadata")
    }

    var onGetDirectoryWin = function(parent) {
      var data = {};
      data[metadataKey] = metadataValue;
      parent.setMetadata(onSetMetadataWin, onSetMetadataFail, data);
    }
    var onGetDirectoryFail = function() {
      console.log("error getting dir")
    }

    var onFSWin = function(fileSystem) {
      fileSystem.root.getDirectory(subFolder, {create: true, exclusive: false}, onGetDirectoryWin, onGetDirectoryFail);
    }

}

document.addEventListener("deviceready", function(){
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){//Permiso al sistema de archivos
		//Permiso Concedido
		fileSystem.root.getDirectory("vasFolder", {create: true, exclusive: false}, function(){
			alert('hecho');
		}, onFSFail);
	}, onFSFail);
	
}, false);

function onFSFail(evt){
	navigator.notification.alert(evt.target.error.code, null, "Error de Directorio", "De acuerdo");
}