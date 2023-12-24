//Q1

// function groups(array){
//   let Gryffindor = [];
//   let Hufflepuff = [];
//   let Ravenclaw = [];
//   let Slytherin = [];
//    array.map((student)=>{
//     let n = student.length;
//       if(n<6){
//         Gryffindor.push(student);
//       }else if(n>6 && n<8){
//         Hufflepuff.push(student);
//       }else if(n>8 && n<12){
//         Ravenclaw.push(student);
//       }else if(n >= 12){
//         Slytherin.push(student);
//       }
//    })
//    return obj = {
//       group1: Gryffindor,
//       group2: Hufflepuff,
//       group3: Ravenclaw,
//       group4: Slytherin,
//    }
// }

// const dummyNames = [
//   'BgcmTLevDwKDE',   'MmvxRKC',
//   'XWBbenaS',        'YGliowvdG',
//   'cyBoctGqZA',      'OUflcJax',
//   'wxGwL',           'gNITTFfJqlskg',
//   'AlWdctlLxYKejAW', 'EGOnhKrcobK',
//   'BVeHirKFfINdRTi', 'UaUjgfukVvNaLo',
//   'NxKWpeuSppLvFst', 'tkRqSyUCM',
//   'SKyiUpCNOB'
// ];

// console.log(groups(dummyNames));

//Q2 
function DoubleTrouble(array){
   let set = new Set(array);
   let res = Array.from(set);
   let newArray = [];
   res.forEach((el)=>{
      newArray.push(el);
      newArray.push(el);
   });
   return newArray
}

const el = [1,2,3,4,4,5,7,8,8,9,0];

console.log(DoubleTrouble(el));
//!random one pending

//Q3
function MirrorMirror(str){
    let mirrorStr = str.split('').reverse().join('');
    return str+mirrorStr;
}

const string = "Javascript";
console.log(MirrorMirror(string));

//Q4

function passwordChecker(pass){

}
const pass = "2Funky&4U";
console.log(passwordChecker(pass));
