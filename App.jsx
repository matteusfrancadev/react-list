import { v4 as uuid } from 'uuid';
import { useState } from "react"; // BIBLIOTECA QUE ALTERA O ESTADO DOS ELEMENTOS
import { Input, Button, Main, Li, ListItem } from './styles.js'
import { FcCheckmark, FcFullTrash } from "react-icons/fc";


function App() {
  // RETURN CODE JAVASCRIPT
  const [list, setList] = useState([]) // GUARDA A LISTA COMPLETA
  const [task, setTask] = useState('') // GUARDA O QUE ESTA NO INPUT

  function inputChange(event) {
    setTask(event.target.value) // PEGA O QUE TA NO INPUT
    }

  function clickButton() {
    if(task !== ''){
      setList([...list, { id: uuid(), task, finished: false }]) // IMPRIME O QUE ESTÁ NO INPUT
    }else{
      alert('O campo está vazio')
    }
  }

  function finishTask(id){
    const newList = list.map(item  => (
      item.id === id ? { ...item , finished: !item.finished} : item

    ))
    setList(newList)
  }

  function deleteTask(id){
    const newList = list.filter(task => task.id !== id  )

    setList(newList)
  }

  // RETURN CODE HTML IN REACT  
  return (
    <Main>
      <Input onChange={inputChange} type="text" placeholder="Digite a sua tarefa..." />
      <Button onClick={clickButton} > Adicionar </Button>

      <ul>
        {list.map(item => (
          <ListItem isFinished = {item.finished} key = {item.id} >
            <FcCheckmark onClick = {() => finishTask(item.id)} />
            <Li>{item.task}</Li>
            <FcFullTrash onClick={() => deleteTask(item.id)}/>
          </ListItem>
        ))}
      </ul>
    </Main>
  )
}

export default App;
