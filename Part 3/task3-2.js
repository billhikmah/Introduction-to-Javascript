//Check room tenant on the hotel guest list program

const cekTenant = (inputName, key)=>{ 
    return new Promise((resolve, reject)=>{
      const tenant = [
          {
            room: 1,
            name: "Leanne Graham",
            email: "Sincere@april.biz",
            address: "Kulas Light, Apt. 556, Lampung",
            phone: "1-770-736-8031 x56442",
          },
          {
            room: 2,
            name: "Ervin Howell",
            email: "Shanna@melissa.tv",
            address: "Victor Plains, Suite 879, Wisokyburgh",
            phone: "010-692-6593 x09125",
          },
          {
            room: 3,
            name: "Clementine Bauch",
            email: "Nathan@yesenia.net",
            address: "Douglas Extension, Suite 847, McKenziehaven",
            phone: "1-463-123-4447",
          },
          {
            room: 4,
            name: "Patricia Lebsack",
            email: "Julianne.OConner@kory.org",
            address:"Hoeger Mall, Apt. 692, South Elvis",
            phone: "493-170-9623 x156",
          },
          {
            room: 5,
            name: "Chelsey Dietrich",
            email: "Lucio_Hettinger@annie.ca",
            address: "Skiles Walks, Suite 351, Roscoeview",
            phone: "(254)954-1289",
          },
          {
            room: 6,
            name: "Mrs. Dennis Schulist",
            email: "Karley_Dach@jasper.info",
            address: "Norberto Crossingm, Apt. 950, South Christy",
            phone: "1-477-935-8478 x6430",
          },
          {
            room: 7,
            name: "Kurtis Weissnat",
            email: "Telly.Hoeger@billy.biz",
            address: "Rex Trail, Suite 280, Howemouth",
            phone: "210.067.6132",
          },
          {
            room: 8,
            name: "Nicholas Runolfsdottir V",
            email: "Sherwood@rosamond.me",
            address: "Ellsworth Summit, Suite 729, Aliyaview",
            phone: "586.493.6943 x140",
          },
          {
            room: 9,
            name: "Glenna Reichert",
            email: "Chaim_McDermott@dana.io",
            address: "Dayna Park, Suite 449, Bartholomebury",
            phone: "(775)976-6794 x41206",
          },
          {
            room: 10,
            name: "Clementina DuBuque",
            email: "Rey.Padberg@karina.biz",
            address: "Kattie Turnpike, Suite 198, Lebsackbury",
            phone: "024-648-3804",
          }
        ];
        
      let cetak = [];
      const sortir = (array, category, kunci)=>{
        const cari = array.map(elemen=>elemen[category]);
        const hasil = cari.filter((elemen)=>{
            return elemen.toString().toLowerCase().match(kunci.toString().toLowerCase())
        });
        return hasil;
      };

      const output = sortir(tenant, key, inputName);

      for(j=0; j<output.length; j++){
        for(i=0; i<tenant.length; i++){
              if(tenant[i][key] === output[j]){
                  cetak.push(tenant[i])
              }
          }
      }
        
      if(cetak.length !== 0){
          resolve(cetak);
      } else {
          reject("\nThe person was not found on the guest list\n")
      }
    })
}
  
const input= "clemen";
const key="name"

cekTenant(input,key)
    .then((output)=>{console.log(output)})
    .catch((err)=>{console.log(err)})