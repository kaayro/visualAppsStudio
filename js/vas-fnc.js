document.addEventListener("deviceready", function(){
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){//Permiso al sistema de archivos
		//Permiso Concedido
		fileSystem.root.getDirectory("vasFolder/projects", {create: true, exclusive: false}, function(){//Crea directorio en matriz
			alert('hecho');
		}, onFSFail);
	}, onFSFail);
	
}, false);

function onFSFail(evt){
	navigator.notification.alert(evt.target.error.code, null, "Error de Directorio", "De acuerdo");
}