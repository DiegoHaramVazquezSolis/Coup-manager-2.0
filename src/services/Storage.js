import { storage } from './../firebase';

/**
 * Metodo para subir archivos a storage
 * @returns {Promise} URL de descarga de la imagen
 * @param {String} ref Nodo de storage donde se almacenara el archivo.
 * @param {File} file Archivo a almacenar en el storage.
 * @param {callback} onBegin CallBack para accion a realizar al iniciar el upload.
 * @param {callback} setProgress CallBack para definir progreso en el estado de componentes.
 * @param {callback} afterUpload CallBack para accion a realizar al terminar la subida del archivo.
 */
export const uploadFile = (ref, file, onBegin, setProgress, afterUpload) => {
    var uploadTask = storage.ref(ref).put(file);
    return uploadTask.on("state_changed", function (snap) {
        var progress = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(progress);
    },function (error) {
        console.log(error);
    },() => {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            afterUpload(downloadURL);
        });
    });
}

/**
 * Metodo para obtener URL de descarga de un archivo
 * @returns {String} URL de descarga del archivo
 * @param {String} ref Nodo de storage donde buscara el archivo
 * @param {String} fileName Nombre del archivo a buscar
 */
export const getDownloadURL = (ref, fileName) => {
    return storage.ref(ref).child(fileName).getDownloadURL().then(function (downloadURL) {
        return downloadURL;
    });
}