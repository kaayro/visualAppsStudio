document.addEventListener("deviceready", function(){
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){//Permiso al sistema de archivos
		//Permiso Concedido
		fileSystem.root.getDirectory("vasFolder/projects", {create: true, exclusive: false}, function(){//Crea directorio en matriz
			fileSystem.root.getFile("vasFolder/projects/prueba.html", {create: true, exclusive: false}, function(fileEntry){//Crear Archivo HTML
				fileEntry.createWriter(function(escritor){
					escritor.write("<html><head>"+
					"<script src='phonegap.js'></script>"+
					"<script>"+
					"document.addEventListener('deviceready',function(){"+
					"navigator.notification.alert(evt.target.error.code, null, 'Error de Directorio', 'De acuerdo');"+
					"),false);"+
					"</script>"+
					"</head><body>Ok</body></html>");
				},onFSFail);
				var sPath = fileEntry.fullPath.replace("prueba.html","");
				var fileTransfer = new FileTransfer();
				fileTransfer.download("http://www.igitsoft.com/carlos/phonegap.js", sPath + "phonegap.js", function(theFile){
					alert(theFile.toURI());
				}, function(error){
					alert(error.code);
				});
			}, onFSFail);
		}, onFSFail);
	}, onFSFail);
	
}, false);

function onFSFail(evt){
	navigator.notification.alert(evt.target.error.code, null, "Error de Directorio", "De acuerdo");
}