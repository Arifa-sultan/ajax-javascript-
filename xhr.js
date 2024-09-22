function myaxios(method,url){
    // const url='http://jsonplaceholder.typicode.com/users';
    const xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.responseType = 'json';
    xhr.onload = ()=>{
        if(xhr.status>=400){
            console.log('failed');
        }else{
            console.log(xhr.response);
        }
    }
    xhr.onerror = ()=>{
        console.log('error');
    }
    xhr.send();
}