import {useState} from "react";
import './App.css';
import Box from "./component/Box";
import Button from "./component/Button"

// 1. 박스 2개(타이틀,사진,결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3,4의 결과를 가지고 누가 이겼는지 승패를 따진다. 
// 6. 승패에 따라 테두리 색이 바뀐다(이기면-초록,지면-빨강,비기면-검정)

const choice = {
  rock:{
    name:"Rock",
    img:"https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png"
  },
  scissors:{
    name:"Scissors",
    img:"https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png"
  },
  paper:{
    name:"Paper",
    img:"https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png"
  }
}

function App() {
  
  const[userSelect,setuserSelect] = useState(null)
  const[computerSelect,setcomputerSelect] = useState(null)
  const[result,setresult] = useState("");
  const[computerResult,setcomputerResult] = useState("");

  const play =(userChoice)=>{
    setuserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setcomputerSelect(computerChoice);
    setresult(judgement(choice[userChoice],computerChoice));
    setcomputerResult(getcomputerResult(judgement(choice[userChoice],computerChoice)))

  }


  const judgement = (user,computer) =>{
    console.log(user,computer)

    // user === computer tie 비김
    // user === rock, computer === scissors ,user win
    // user === rock, computer === paper ,user lose
    // user === scissors, computer === paper ,user win
    // user === scissors, computer === rock ,user lose
    // user === paper, computer === rock ,user win
    // user === paper, computer === scissors ,user lose

    if(user.name === computer.name){
      return "Tie"
    } else if(user.name ==="Rock") return computer.name === "Scissors" ? "Win" : "Lose"
    else if(user.name ==="Scissors") return computer.name === "Paper" ? "Win" : "Lose"
    else if(user.name ==="Paper") return computer.name === "Rock" ? "Win" : "Lose"
  }

  const getcomputerResult = (userResult) =>{
    if(userResult === "Tie"){
      return "Tie"
    } else if (userResult === "Win"){
      return "Lose"
    } else if (userResult === "Lose"){
      return "Win"
    }
    }


  const randomChoice = () =>{
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    return choice[final];
  }
  return (
    <div className="full">
    <div className="container">
    <div className="main">
    <Box title="User" item={userSelect} result={result} />
    <Box title="Computer" item={computerSelect} result={computerResult}  />
    </div>
      <div className="section-button">
      <Button play={play} />
      </div>
      </div>
    </div>
  );
}

export default App;
