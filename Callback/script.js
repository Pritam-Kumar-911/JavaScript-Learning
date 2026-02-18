
// understanding Callback hell 
// function getID(ID , nextID){
//     setTimeout(()=>{
//         console.log("Data: ",ID);
//         if(nextID){
//             nextID();
//         }
//     } , 2000);
// }

// getID(19 , ()=>{
//     getID(2 , () => {
//         getID(5 , ()=>{
//             getID(56);
//         });
//     });
// });

//understanding Promises and understanding how Promises resolves Callback hell problem 



//understanding the concept of async and await and concluding that how this is better approach

function getID(ID , nextID){
    return new Promise((resolves, reject)=>{
        setTimeout(()=>{
        console.log("Data: ",ID);
        resolves("Success message!");
        if(nextID){
            nextID();
        }
    } , 2000);
    }).then((res)=>{
        console.log("Success!");
        console.log(res);
    });
}

async function getIDasnc() {
    await getID(13);
    await getID(67);
    await getID(19);
}