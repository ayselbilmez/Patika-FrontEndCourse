function newElement() {
  const inputValue = document.getElementById("task").value.trim();

  if (inputValue === "") {
    showToast("errorToast");
  } else {
    const li = document.createElement("li");
    li.textContent = inputValue;

    const list = document.getElementById("list");
    list.insertBefore(li, list.firstChild); // ✔️ En başa ekler

    document.getElementById("task").value = "";
    showToast("successToast");
  }
}

function showToast(id) {
  const toastEl = document.getElementById(id);
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}
show();
