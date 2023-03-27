let idProduct;

async function confirmDelete(id) {
  idProduct = id;

  return new Promise(async (resolve) => {
    const deleteButton = document.querySelectorAll(".delete-btn");
    deleteButton.forEach(button=>{
      button.addEventListener("click", async (e) => {
        e.preventDefault();
        const result = await Swal.fire({
          title: 'Deseja realmente excluir o produto?',
          showCancelButton: true,
          confirmButtonText: 'Sim',
          cancelButtonText: 'Não',
        });
        resolve(result.isConfirmed);
      });
    })
    
  });
}

async function returnResp(){
 
  const resp = await confirmDelete(idProduct);
  
  if(resp){
    const response  = await fetch(`/admin/produtos/${idProduct}/excluir`,{
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      },
     
    })

    if(response.ok){
      window.location.reload();
    }
  }
  

}

returnResp();







  



// deleteButton.addEventListener("click", async (e)=>{
//     e.preventDefault();
//     try {
//         const result = await confirmDelete();
//         if(result){
//             return true;
//         }else{
//             return false
//         }
//     } catch (error) {
        
//     }
    
// });

