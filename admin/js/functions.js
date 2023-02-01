async function fetchproduct() {
  
  
  
  try {
    const response5 = await fetch('http://localhost:3000/api-user/token', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({username: "Ahmed" , password: "123456"}) // body data type must match "Content-Type" header
  });

  const data = await response5.json();
  console.log(data.accessToken);
  
  const response6 = await fetch('http://localhost:3000/posts' , {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Authorization': 'Bearer ' + data.accessToken,
      
      
    }
  });
  const product = await response6.json();
  console.log(product)

  let listHTML = "";
  for (let list of product){
    listHTML += ` <tr>
    <th>Price</th>
    <th>Stock</th>
    <th>Title</th>
    <th>Category</th>
    <th>Description</th>
    <th>Date</th>
    <th>Update</th>
    <th>Delete</th>

    
  </tr> 
  <tr>
    <td>${list.Price}</td>
    <td>${list.Stock}</td>
    <td>${list.title}</td>
    <td>${list.Category}</td>
    <td>${list.Description}</td>
    <td>${list.date}</td>
    <td><button id= ${list._id} class= "update button">Update button</button></td>
    <td><button id=${list._id} class= "delete button" >Delete button</button></td>

  </tr>`
  }


  

  
  const productt = document.getElementById('table')
    console.log(productt)
    
    productt.innerHTML = listHTML; 
    console.log(productt)

  
    
  

  


} catch (error) {
  console.log(error)
  
}


var updatebutton = document.getElementsByClassName('update')
var deletebutton = document.getElementsByClassName('delete')

for(let product1 of deletebutton ){
  product1.addEventListener('click', async function (e) {
    e.preventDefault

    const response5 = await fetch('http://localhost:3000/api-user/token', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({username: "Ahmed" , password: "123456"}) // body data type must match "Content-Type" header
  });

  const data5 = await response5.json();
  console.log(data5.accessToken);

    try {
      const response7 = await fetch('http://localhost:3000/posts/' + e.target.id , {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Authorization': 'Bearer ' + data5.accessToken,  
      'Content-Type': 'application/json'

      
      
    }
  });
  const data2 = await response7.json();
  console.log(data2)

  e.target.parentNode.parentNode.remove()
      
    } catch (error) {
      console.log(error)
      
    }
    
    
  })
}




}
fetchproduct();














































// const table = document.getElementsByClassName("table");
//  console.log(table)


    
    
  
    
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    