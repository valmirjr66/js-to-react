const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
  const headers = {
    "X-Api-Key": "q8wH9ANYNzT4pLDRoX5y9A==CDCKeA2wIi89q4BI"
  };

  const response = await fetch(
    'https://api.api-ninjas.com/v1/quotes?category=happiness',
    { headers: headers }
  );

  const body = await response.json();

  const quote = body[0].quote;

  const quoteNode = document.createElement("div");
  quoteNode.textContent = quote;
  quoteNode.style.marginTop = '40px';
  quoteNode.style.color = "green";
  quoteNode.style.fontWeight = "bold";
  quoteNode.id = "123"

  document.getElementById("root").appendChild(quoteNode);
});
