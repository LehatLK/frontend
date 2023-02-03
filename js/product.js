async function fetchAllproducts() {
  
  
  
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
  for(let list of product){
    listHTML += `
    <li class="theproduct">
    Title: ${list.title}
    <h2 class ="price"> Stock: ${list.Stock} </h2>
    <h3 class ="Stock">${list.Price} KR </h3>
    <p class =description> Description: ${list.Description}</p>
    <p id=cato-2> Category: ${list.Category}</p>

</li>`
    
    
  }

  const daproduct = document.getElementById('product1')
  console.log(daproduct)
  daproduct.innerHTML = listHTML; 
  console.log(daproduct)


} catch (error) {
  console.log(error)
  
}




}
fetchAllproducts();