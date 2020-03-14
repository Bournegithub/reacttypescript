function setStorage(name:string, value:any) {
    return localStorage.setItem(name, value);
};
function getStorage(name:string) {
    if(localStorage.getItem(name)) {
        return localStorage.getItem(name);
    } else {
        return false;
    }
};
function cleanStorage() {
    return localStorage.clear();
}
export {getStorage, setStorage, cleanStorage}