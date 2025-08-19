  // ถ้ามีค่าตอนค้างไว้ ให้แสดงปุ่มกลับไปอ่านต่อ
const last = localStorage.getItem('lastEp');
if (last) {
  const btn = document.createElement('p');
  btn.innerHTML = `<a href="episode/${last}">อ่านต่อจากตอนที่ค้างไว้</a>`;
  document.body.prepend(btn);
}
