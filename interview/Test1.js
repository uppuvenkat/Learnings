// var findata = {
//     india:[
//         {AP:[ 
//             {Nellore:['md1', 'md2', 'md3']},
//             {Chittor:['md1', 'md2', 'md3']} 
//          ]}, 
//         {Kar:[ 
//             {Nellore:['md1', 'md2', 'md3']},
//              {Chittor:['md1', 'md2', 'md3']}
//             ]}
//         ],

//     US:[{AP:['Nellore', 'chittor']}, {Kar:['dist1', 'dist2']} ]

// }

// console.log(findata.india[0].AP[0].Nellore[0])

// var data = [
//     { country: 'India', state: 'AP', dist: 'nellore', md:'md1' },
//     { country: 'India', state: 'AP', dist: 'nellore', md:'md2' },
//     { country: 'India', state: 'AP', dist: 'kadapa', md:'md1' },
//     { country: 'India', state: 'AP', dist: 'chittoor', md:'md1' },
//     { country: 'India', state: 'Karnataka', dist: 'banglore', md:'md1' },
//     { country: 'India', state: 'Karnataka', dist: 'mulbagal' , md:'md1'},
//     { country: 'US', state: 'State1', dist: 'dist1' , md:'md1'},
//     { country: 'US', state: 'State1', dist: 'dist2' , md:'md1'},
//     { country: 'US', state: 'State1', dist: 'dist2' , md:'md2'},
//     { country: 'US', state: 'State2', dist: 'dist3' , md:'md1'},
//     { country: 'US', state: 'State2', dist: 'dist4', md:'md1' }
// ]
// var countries = []

// data.map((el,id)=>{
//     // console.log(Object.keys(el))
//     if(countries.indexOf(el[Object.keys(el)[0]]) == -1){
//         countries.push(el[Object.keys(el)[0]])
//     }
// })
// console.log(countries)

// var finData = {}
// var stData = {}

// data.map((e,id)=>{
//    var keys =  Object.keys(e)
//     let str = '';
//     keys.pop();
//     keys.map((k,idk)=>{
//        str = str +'_' + e[k]; 
//     })
    
//     if(finData[str] == undefined){
//         finData[str] = [e]
//     }else{
//         finData[str].push(e)
//     }
    
// })
// console.log(Object.keys(finData))
// console.log(finData)




























// var cdata = data.filter((e, id) => {
//     return e.state == 'AP'
// })
// finData[data[0].country] = []
// stData[data[0].state] = [data[0]]
// finData[data[0].country] = [stData]
// console.log(finData.India[0].AP[0])
// var countryObj = {}
// var stateObj = {}

// for (let i = 0; i < data.length; i++) {
//     if (countryObj[data[i]['country']] = -1) {
//         countryObj[data[i]['country']] = 1
//     }
// }

// for (let i = 0; i < data.length; i++) {
//     if (stateObj[data[i]['state']] = -1) {
//         stateObj[data[i]['state']] = 1
//     }
// }
// let states = Object.keys(stateObj);
// let countries = Object.keys(countryObj);
// console.log(countries, states)

// countries.map((c, idc) => {
//     states.map((s, ids) => {
//         let arr = []
//         data.map((ob, id) => {
//             if (c == ob.country) {
//                 let finData = {}
//                 let stData = {}
//                 if (s == ob.state) {
//                     arr.push(ob)
//                     // console.log(c,s)
//                     // stData[ob.state] = [ob]
//                     // console.log(stData)

//                     // if(stData[ob.state] == -1){
//                     //      stData[ob.state] = [ob]
//                     //      console.log(stData)
//                     //     }
//                     // else stData[ob.state].push(ob)

//                     // if(finData[ob.country] == -1) finData[ob.country] = [stData]
//                     // else  finData[ob.country].push(stData)
//                 }
//             }
//         })
//         // console.log(arr.length == 0 ? '' : arr)
//         stData[s] = arr.length == 0 ? '' : arr;
//         // console.log('aaaaaaaaaaaaaa')
//     })
//     finData[c] = [stData]
// })

// console.log(finData)
// data.map((e, id) => {
//     // finData[e.country] = finData[e.country][e.state]
//     let finData = {}
//     let stData = {}
//     //     let cdata = data.filter((x, id) => {
//     //         return x.state == 'AP'
//     //     })

//     stData[e.state] = cdata
//     finData[e.country] = [stData]
// })
// // console.log(finData)