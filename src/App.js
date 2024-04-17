import {useState} from "react";
import './App.css';
import Box from "./component/Box";

// 1. 박스 2개(타이틀,사진,결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3,4의 결과를 가지고 누가 이겼는지 승패를 따진다. 
// 6. 승패에 따라 테두리 색이 바뀐다(이기면-초록,지면-빨강,비기면-검정)

const choice = {
  rock : {
    name : "Rock",
    img : "https://t3.ftcdn.net/jpg/00/55/21/18/360_F_55211893_pMzGwbg4p7yElUGfc868m9dUXaknoWkU.jpg"
  },
  scissors:{
    name : "Scissors",
    img : "https://media.istockphoto.com/id/1043551106/vector/scissors-vector-cartoon.jpg?s=612x612&w=0&k=20&c=iu7Ca7ucLnq0HyalszRYYjO29XFnbWlnP2MpoMop0iU="
  },
  paper:{
    name : "Paper",
    img : "https://img.freepik.com/premium-vector/paper-cartoon-walking_309278-29798.jpg"
  }
}
function App() {
  const [userSelect,setUserSelect] = useState(null)
  const [ComputerSelect,setComputerSelect] = useState(null)
  const[result,setResult] = useState("")

  const play = (userchoice) =>{
    setUserSelect(choice[userchoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userchoice],computerChoice))
  }

  const judgement = (user,computer) =>{
    console.log("user",user,"com",computer)

    // user === computer 비김(tie)
    // user === rock, computer === scissors user가 이김
    // user === rock, computer === paper user가 짐
    // user === scissors computer paper user가 이김
    // user === scissors computer rock user가 짐
    // user === paper, computer === rock user가 이김
    // user === paper, computer === scissors user가 짐

    if(user.name === computer.name){
      return "tie"
    } else if(user.name === "Rock") return computer.name === "Scissors" ? "win" : "lose"
    else if(user.name === "Scissors") return computer.name === "Paper" ? "win" : "lose"
    else if(user.name === "Paper") return computer.name === "Rock" ? "win" : "lose"

  }

  const randomChoice=()=>{
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 어레이로 만들어주는 함수다.
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    return choice[final];
  }

  return (
    <div>
    <div className="main">
      <Box title="You" item={userSelect} result={result}/>
      <Box title="Computer" item={ComputerSelect} result={result}/>
    </div>
    <div className="main">
      <button onClick={()=>play("scissors")}>가위</button>
      <button onClick={()=>play("rock")}>바위</button>
      <button onClick={()=>play("paper")}>보</button>      
    </div>
    </div>
  );
}

export default App;
