
const submit = document.getElementById("for-1");
  
  submit.addEventListener('submit', async function s(e){
    e.preventDefault();
    
    const title = document.getElementById("title").value;
    const Description = document.getElementById("description").value;
    const Price = document.getElementById("price").value;
    const Stock = document.getElementById("stock").value;
    const category11 = document.getElementById("category").value;
    
    
    
    
    
    
    
    
    try {

      const response3 = await fetch('http://localhost:3000/api-user/token', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({username: "Ahmed" , password: "123456"}) // body data type must match "Content-Type" header

    })

    const data1 = await response3.json();
    console.log(data1.accessToken);
    
    
      const response4 = await fetch('http://localhost:3000/posts', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + data1.accessToken
        },
        body: JSON.stringify(
          {"title": title ,
          "Description": Description,
          "Price": Price,
          "Stock": Stock,
          "Category": category11 }) // body data type must match "Content-Type" header
        });

        const data = response4.json()
        console.log(data);
        
        
        
        
      } catch (error) {
        console.log(error);
      } 
      window.location.replace('file:///Users/momme40/ws/frontend/products.html')
      
      
    })
  
