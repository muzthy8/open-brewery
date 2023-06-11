const get = async () => {
    try {
      const data = await fetch('https://api.openbrewerydb.org/v1/breweries')
  
      const payload = await data.json()
      let str = `<table border> 
      <tr>
      <th>Name</th>
      <th>Phone</th>
      <th>Website</th>
      </tr>
      `
      for (let obj of payload) {
        str += `<tr>
        <td>${obj.name}</td>
        <td>${obj.phone}</td>
        <td><a href='${obj.website_url}'>Click Here</a></td>
        </tr>
        `
      }
      str += '</table>'
      document.querySelector
  .innerHTML = str
    } catch (error) {
  
    }
  }
  get()

//   const get = async () => {

//     try {
//       const data = await fetch('https://api.openbrewerydb.org/v1/breweries')
  
//       const payload = await data.json()
//       let str = `<table border> 
//       <tr>
//       <th>Name</th>
//       <th>Phone</th>
//       <th>Website</th>
//       </tr>
//       `
//       for (let obj of payload) {
//         str += `<tr>
//         <td>${obj.name}</td>
//         <td>${obj.phone}</td>
//         <td><a href='${obj.website_url}'>Click Here</a></td>
//         </tr>
//         `
//       }
//       str += '</table>'
//       document.querySelector
//   .innerHTML = str
//     } catch (error) {
  
//     }
//   }
//   get()

