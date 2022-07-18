function loadUser() {
  hienthi.innerHTML = `<button onclick="loadlist()">ListBam</button>
<br>
<button onclick="loadCreate()">Create</button>
<div id="content">Trang Chu</div>
`
}
function loadlist() {
  document.getElementById('content').innerHTML = "List"
}
function loadCreate() {
  document.getElementById('content').innerHTML = "Create"
}
