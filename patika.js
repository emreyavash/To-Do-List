let btn = document.querySelector('#liveToastBtn');
const text = document.querySelector('#task');
const ulDom = document.querySelector('#list');
let todo_array =localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];



const createLi=(text)=>{
    let liDom = document.createElement('li');
    liDom.innerHTML = text
    ulDom.append(liDom);
}

const ekle=()=>{
    if(text.value == ""){
        alertDiv("danger","Listeye boş ekleme yapamazsınız!" )
    }
    else{
        
        let liDom = document.createElement('li');
        liDom.innerHTML = text.value;
        todo_array.push(text.value);
        localStorage.setItem("tasks",JSON.stringify(todo_array));
        ulDom.append(liDom)
        text.value = ""
        
        alertDiv("success","Listeye Eklendi.");
        
    }
}
window.onload =()=>{
todo_array.map((item)=>{
    createLi(item)
})}
function alertDiv(alert,message){
    let alertDom = document.querySelector('#alertDiv');
    alertDom.innerHTML = `<div class="alert alert-${alert} alert-dismissible fade show" role="alert">
    <strong>${message}</strong> 
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>` 
}