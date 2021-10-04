
subBtn.addEventListener("click", function(e) {
    email = document.querySelector("#email").value;
    username = document.querySelector("#username").value;
    e.preventDefault();
    updateStorage();
})

function updateStorage(){
    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
}

// MOVIE
// name: Action          id: 28
// name: Adventure       id: 12
// name: Animation       id: 16
// name: Comedy          id: 35
// name: Crime           id: 80
// name: Documentary     id:  99
// name: Drama           id: 18
// name: Family          id: 10751
// name: Fantasy         id: 14
// name: History         id: 36
// name: Horror          id: 27
// name: Music           id: 10402
// name: Mystery         id: 9648
// name: Romance         id: 10749
// name: Science Fiction id: 878
// name: TV Movie        id: 10770
// name: Thriller        id: 53
// name: War             id: 10752
// name: Western         id: 37