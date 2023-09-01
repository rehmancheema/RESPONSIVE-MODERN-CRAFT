// var change = document.getElementById('colorchange')
// var col=["#E34151","green","#ED9D26","#4BD8C8","#1C9AAB","#EB9B24"];
// var i= 0;
// async function run()
// {
//     setInterval(bg,2000);
//     async function bg()
//     {
//         change.style.backgroundColor=col[i];
//         i++;
//         if(i>col.length)
//         {
//             i=0;
//         }
//     }
    
// };

// run();
// var words=["Rethink.","Rexamine.","Redefine.","Rienvent.","Reset.","Restart.","Reboot.","Relink."];
// var j=0;

  
//   async function changeText() {
//     document.querySelector('.a').innerHTML = words[j];
//     document.querySelector('.a').style.transition =  'top 1s ease-in-out ';
//     j++;
//     if (j >= words.length-1) 
//     {
//       j = 0;
//     }
  
//     setTimeout(changeText , 2000)
//   };

// // document.querySelector('.a').style.display = 'none';
//  changeText();


var change = document.getElementById('colorchange')
var col = ["#E34151", "green", "#ED9D26", "#4BD8C8", "#1C9AAB", "#EB9B24"];
var i = 0;

function bg() {
    return new Promise(resolve => {
        setTimeout(() => {
            change.style.backgroundColor = col[i];
            i++;
            if (i > col.length) {
                i = 0;
            }
            console.log("bg");
        }, 2000); // Simulating a 2-second delay
    });
}
var words = ["Rethink.", "Rexamine.", "Redefine.", "Rienvent.", "Reset.", "Restart.", "Reboot.", "Relink."];
var j = 0;
// Function 2: Simulated asynchronous operation
function changeText() {
    return new Promise(resolve => {
        setTimeout(() => {
            document.querySelector('.a').innerHTML = words[j];
            document.querySelector('.a').style.transition = 'top 1s ease-in-out ';
            j++;
            if (j >= words.length - 1) {
                j = 0;
            }
            console.log("text");
        }, 1700); // Simulating a 1.5-second delay
    });
}
// Using Promise.all() to handle both functions concurrently

    setInterval(async () => {
         await Promise.all([  bg() , changeText()])
        
    }, 2000);

 