let arr = []
let totalExpense = 0

function getNewArray() {
    let newArr = arr.map(iterator => {
        return `<li>
                    <div class="crd">
                        <p id="descp">${iterator.description}</p>
                        <p id="costp">${iterator.amount}</p>
                        <p id="date">${iterator.hours}:${iterator.minutes}:${iterator.seconds} | ${iterator.day}</p>
                    </div>
                </li>`
    })
    return newArr
}
// Add Item Buttton
function AddItem() {
    let descriptionRef = document.getElementById("description").value
    let amount = document.getElementById("amount").value
    let result = document.getElementById("result")

    if (amount === "" || descriptionRef === "")
        alert("ERROR ! ->PLEASE GIVE INPUT")

    else {

        totalExpense += parseInt(amount);
        if (isNaN(totalExpense)) {
            alert("WRONG INPUT")
            totalExpense = document.getElementById("total").innerHTML
            totalExpense = parseInt(totalExpense)
        }
        else {
            let date = new Date()
            let tempDay = date.getDay()
            let day = "null"
            if (tempDay === 0)
                day = "sunday"
            else if (tempDay == 1)
                day = "monday"
            else if (tempDay == 2)
                day = "tuesday"
            else if (tempDay == 3)
                day = "wednesday"
            else if (tempDay == 4)
                day = "thursday"
            else if (tempDay == 5)
                day = "friday"
            else if (tempDay == 6)
                day = "saturday"

            let object = {}
            object.description = descriptionRef
            object.amount = amount
            object.hours = date.getHours()
            object.minutes = date.getMinutes()
            object.seconds = date.getSeconds()
            object.day = day

            arr.push(object)

            document.getElementById("total").innerHTML = totalExpense

            let newArr = getNewArray()
            let string = newArr.join('')
            result.innerHTML = string
        }
    }
}


// Delete Buttton
function Delete() {
    let deletedObject = arr.shift();
    let deletedAmount = parseInt(deletedObject.amount)
    totalExpense = totalExpense - deletedAmount
    document.getElementById("total").innerHTML = totalExpense

    let newArr = getNewArray()

    let string = newArr.join('')
    let result = document.getElementById("result")
    result.innerHTML = string
}

// DeleteAll Buttton
function deleteAll() {
    if(arr.length==0)
        alert("No data found")
    else if(confirm("All data will be premanantly remove if you press ok."))
    {
        arr.splice(0, arr.length);
        totalExpense = 0
        document.getElementById("total").innerHTML = totalExpense
    
        let result = document.getElementById("result")
        result.innerHTML = ''
    }
}

let deleteAllRef = document.querySelector("#deleteAll")
deleteAllRef.addEventListener("click", deleteAll)

let addItembtnRef = document.querySelector("#addItembtn")
addItembtnRef.addEventListener("click", AddItem)

let delBtnRef = document.querySelector("#delBtn")
delBtnRef.addEventListener("click", Delete)



