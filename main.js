const textarea = document.querySelector("textarea");
const fileInput = document.querySelector(".file-name input")
const saveBtn = document.querySelector(".save-btn")
const select = document.querySelector(".Selection select")


saveBtn.addEventListener("click",() => {
    const blob = new Blob([textarea.value],{type: select.value});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileInput.value;
    link.href = url;
    link.click();
})