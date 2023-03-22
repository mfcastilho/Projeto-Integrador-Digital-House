let idProduct;

async function confirmDelete(id) {
  idProduct = id;
  return new Promise(async (resolve) => {
    const deleteButton = document.querySelector("#delete-button-id");
    deleteButton.addEventListener("click", async (e) => {
      e.preventDefault();
      const result = await Swal.fire({
        title: 'Deseja realmente excluir o produto?',
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
        dangerMode: true,
      });
      resolve(result.isConfirmed);
    });
  });
}

async function returnResp(){
  // const confirm = document.querySelector(".swal2-confirm");
  const resp = await confirmDelete(idProduct);
  if(resp){
    fetch(`/admin/produtos/${idProduct}/excluir`,{
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({resp:resp, id:idProduct})
    }).then(res=>console.log(res))
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

