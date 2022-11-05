import * as React from 'react'
export const CreateThread = () => {
    const [NewThread, setNewThread] = React.useState("");
    let doClick = () => {
      console.log("Clicked")
      const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads"
      const requestOptions ={
        method: 'POST',
        mode: 'no-cors',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({title: NewThread})
      };
    fetch(url,requestOptions)
    .then(res => {
      if (res.ErrorCode != null){
        console.log("Fetch error")
        console.log(res)
        alert("Failed")
      }
      else{

        setNewThread("")
        alert("Create New Thread Success")
      }
    })
    }

    return <div>
        <input type="text" value={NewThread}
        onChange={(event) => setNewThread(event.target.value)}/>
      {/* <p>{NewThread}</p> */}
      {/* <input
          type="submit"
          value="add"
          onSubmit={CreateNewThread(NewThread)}
          /> */}
    <button onClick={doClick} >Create New Thread</button>
            </div>
}

function CreateNewThread (string){
    const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads"
    console.log("Clicked")
    console.log(string)
    const requestOptions ={
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({title: string})
      };
    //fetch(url,requestOptions)
}