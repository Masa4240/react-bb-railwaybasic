import * as React from 'react'
import { BoardBody } from './Description'

export const ThreadList = () => {
    const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads"
    const [thList, updateThList] = React.useState("")
    React.useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then((result) => {       
            //updateThList(result[1].title)
            var curList = result.map((res)=>{
              return <React.Fragment key={res.id}>
              {res.title}
              <br />
            </React.Fragment>
            })
            // //var curList = result.map((res) => res.title)
            // console.log ("CurrentList")
            // console.log (curList)     
            // updateThList(result.map((res) => console.log(res.title)))
            updateThList(curList)
            // console.log ("thList")
            // console.log (thList)
            // console.log (typeof(thList))
            // console.log (typeof(curList))
        },
        (error) => {
          console.log(error);
        }, [])
    })
      
     // console.log (thList)
      // function threatLists(){
      //   return thList.map((title) => 
      //     <h1>{title}</h1>)
      // }


      function body (){
        if (thList == null){
          return null
        }
        return <div>
          <br />
          <h2>Thread List</h2>
          {thList}
          </div>
      }
      return body()
    }

    // export const GetThreadList = () => {
    //   console.log("Clicked")
    //   const [thList, updateThList] = React.useState("")
    //   const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads"
    //   React.useEffect(() => {
    //             fetch(url)
    //             .then(res => res.json())
    //             .then((result) => {       
    //                 updateThList(result)
    //                 console.log (thList)
    //             },
    //             (error) => {
    //               console.log(error);
    //             }, [])
    //           }) 
    //           console.log (thList)

    // }