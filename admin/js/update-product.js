let urlParams = new URLSearchParams(window.location.search)
console.log(urlParams.get('id'));

async function updatebutton() {

  
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

    const response6 = await fetch('http://localhost:3000/posts/' + urlParams.get('id') , {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Authorization': 'Bearer ' + data.accessToken,
      
      
    }
  });
  const product = await response6.json();
  console.log(product)


  
  document.getElementById('title2').value = product.title;
  console.log(document.getElementById('title2').value)
  document.getElementById('description2').value = product.Description;
  document.getElementById('price2').value = product.Price;
  document.getElementById('stock2').value = product.Stock;
  document.getElementById('cate-1').value = product.Category;
  
  
  

  


 
 
 
    
  } catch (error) {

    
  }


}

updatebutton();

const submit = document.getElementById('sub-2');
      console.log(submit);
      submit.addEventListener('click',async function upp(e){
        e.preventDefault(); 
        let urlParams2 = new URLSearchParams(window.location.search);
        console.log(urlParams2.get('id'));

        const response10 =  await fetch ('http://localhost:3000/api-user/token', {
          method:'POST',
          headers : {
            'Content-Type' : 'application/json' 

          },


          body:JSON.stringify({"username": "Ahmed", "password" : "123456"})

        });
    const data = await response10.json();
    console.log(data.accessToken);
       

      


var products = new Headers();

products.append('Accept', 'application/json'); 
products.append('Content-Type', 'application/json'); 
products.append('Authorization', 'Bearer ' + data.accessToken)
     

  const title2 = document.getElementById('title2').value
  const description2 = document.getElementById('description2').value
  const Price2 = document.getElementById('price2').value
  const Stock2 = document.getElementById('stock2').value
  const Category2 = document.getElementById('cate-1').value 

const response11 =  await fetch('http://localhost:3000/posts/' + urlParams2.get('id'), {
  method: 'PATCH',
  redirect: 'follow',
  headers: products,
  body: JSON.stringify({
      title: title2,
      Description: description2,
      Price : Price2,
      Stock : Stock2,
      Category: Category2

  }),
}).then(resp => {
  console.log(response11);


}).catch(err => {

})

window.location.replace('file:///Users/momme40/ws/frontend/admin/admin.html')
})


  