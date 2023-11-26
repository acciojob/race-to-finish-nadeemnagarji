window.promises = [];
let p1 = new Promise((resolve)=>{
	setTimeout(()=>{
			resolve("p1")
	},1000)
})
let p2 = new Promise((resolve)=>{
	setTimeout(()=>{
			resolve("p2")
	},2000)
})
let p3 = new Promise((resolve)=>{
	setTimeout(()=>{
			resolve("p3")
	},3000)
})
let p4 = new Promise((resolve)=>{
	setTimeout(()=>{
			resolve("p4")
	},4000)
})
let p5 = new Promise((resolve)=>{
	setTimeout(()=>{
			resolve("p5")
	},5000)
})

window.promises.push(p1)
window.promises.push(p2)
window.promises.push(p3)
window.promises.push(p4)
window.promises.push(p5)
let output = document.getElementById("output")
 Promise.any(window.promises).then((result)=>{
	 output.innerText = result
 })
// Do not change the code above this
// add your promises to the array `promises`
