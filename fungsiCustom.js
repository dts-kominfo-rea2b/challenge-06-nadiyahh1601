// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

let arrayKu = [];
const fnCallback = (err, data) => {
  
  if(err){
    console.log(`error nih ${err}`);
  }else{
    arrayKu.push(data);
    // console.log(arrayKu);
    return arrayKu;
  }
  
   
}
const bacaData = (b)=>{
  const listFiles = [file1, file2, file3];
  let dataSplit = null;
  listFiles.map((file) => {
  fs.readFile(
        file,
        { encoding: 'utf8'},
        (err, dataYangDibaca) => {
            // apabila terjadi error, mari kita print errornya
            if(err){
                return console.log('Ada terjadi error: ' +err);
            }else{
      
              const dataParsing = JSON.parse(dataYangDibaca);
              
              if(dataParsing.message !== undefined){
                dataSplit = dataParsing.message.split(" ");
                b(err, dataSplit[1]);
                //hasilAkhir.push(b(err, dataSplit[1]));
              }else if(dataParsing[0].message !== undefined){
                dataSplit = dataParsing[0].message.split(" ");
                b(err, dataSplit[1]);
                //hasilAkhir.push(b(err, dataSplit[1]));
              }else{
                dataSplit = dataParsing[0].data.message.split(" ");
                b(err, dataSplit[1]);
                //hasilAkhir.push(b(err, dataSplit[1]));
                
              }
            }
        }
      );
  });

};
bacaData(fnCallback);


// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
