async function testProxy() {
  const res = await fetch("/proxy");
  const text = await res.text();
  document.getElementById("output").textContent = text.substring(0, 500);
}
