document.getElementById('show').addEventListener("click", getAllItems);
document.getElementById('submit').addEventListener("click", myFunction);


function myFunction() {
    let date = document.getElementById("date").value;
    let exercise = document.getElementById("exercise").value;
    let weights = document.getElementById("weights").value;
    let sets = document.getElementById("sets").value;
    let reps = document.getElementById("reps").value;

    const data = {
        exercise: exercise,
        weights: weights,
        sets: sets,
        reps: reps,
    }
    localStorage.setItem(date, JSON.stringify(data));
}

function getAllItems() {
    let returnDate = document.getElementById("return").value;

    if(returnDate == "")
    {
        console.log("its working");
        var archive = [],
            keys = Object.keys(localStorage),
            i = 0, key;
        
        for (; key = keys[i]; i++) {
            archive.push(key + '=' + localStorage.getItem(key));
            console.log(key);
        }
    }
    else{
        var archive = [],
            key = returnDate;
        archive.push(key + '=' + localStorage.getItem(key));
    }

    document.getElementById("local-storage-list").value = archive;
}