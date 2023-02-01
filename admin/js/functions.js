async function fetchproduct() {
  
  
  
  try {
    const response1 = await fetch('http://localhost:3000/api-user/token', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({username: "Ahmed" , password: "123456"}) // body data type must match "Content-Type" header
  });

  const data = await response1.json();
  console.log(data.accessToken);
  
  const response2 = await fetch('http://localhost:3000/posts' , {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Authorization': 'Bearer ' + data.accessToken,
      
      
    }
  });
  const product = await response2.json();
  console.log(product)

  let listHTML = "";
  for (let list of product){
    listHTML += `
    <thead>
        
      <tbody>
        <tr>
          <td>Rad 1, Kolumn 1 ${list.Stock}</td>
          <td>Rad 1, Kolumn 2 ${list.Description}</td>
        </tr>
        
        
  
      </tbody>;`
  }
  
    
  

  


} catch (error) {
  console.log(error)
  
}




}
fetchproduct();














































// const table = document.getElementsByClassName("table");
//  console.log(table)


    
    
  
    
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    