const todoList = JSON.parse(localStorage.getItem('TodoList')) || [];

display();

function key(event){
    if(event.key === 'Enter')
        createList();
}

function createList(){
    let inputData = document.querySelector('.js-input-data');
    let data = inputData.value.trim();
    console.log(data);

    let inputDate = document.querySelector('.js-input-date');
    let date = inputDate.value;
    
    if(data === ''){
        alert('Enter a valid work');
    }
    else{
        todoList.push({
            date,
            data,
        }
        );
    }
    inputData.value = '';
    inputDate.value = '';
    display();
    store();
}

function display(){
    let list = '';
    document.querySelector('.js-display').innerHTML = list;
    for(let i=0; i<todoList.length ;i++){
        const input = todoList[i];
        let {data,date} = input;

        if(date === ''){
            date = '-';
        }

        let html = `
            <div class="output">
                <div class="op-data">${data}</div>
                <div class="op-date">${date}</div>
                <button class="del" id="b${i}"onclick="todoList.splice(${i},1); display(); store();">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M5 11h14v2H5z"></path></svg>
                </button>
            </div>
            `;    
        list+=html;

        document.querySelector('.js-display').innerHTML = list;
    }
}

function store(){
    localStorage.setItem('TodoList',JSON.stringify(todoList));
}