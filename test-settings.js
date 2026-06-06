async function run() {
  console.log("Setting percentage to 15...");
  const res = await fetch('http://localhost:3000/api/settings', {
    method: 'POST',
    body: JSON.stringify({ code: "Yobro2026", percentage: 15 }),
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await res.json();
  console.log(data);
}
run();
