document.querySelector('button').addEventListener("click", () => {
    document.querySelector('body').classList.toggle("dark");
    if (document.querySelector('span').textContent == "light"){
        document.querySelector('span').textContent = "dark";
    }
    else {
        document.querySelector('span').textContent = "light";
    }
});