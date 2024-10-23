const dataSet1 = [
    { name: "McLaren", description: "Marke", link:"mclaren.html" },
    { name: "Mercedes-Benz", description: "Marke", link:"mercedes.html" },
    { name: "Audi", description: "Marke", link:"audi.html" },
    { name: "Lotus", description: "Marke", link:"lotus.html" },
    { name: "BMW", description: "Marke", link:"bmw.html" },
    { name: "600 LT", description: "McLaren", link:"modell600lt.html" },
    { name: "750 S", description: "McLaren", link:"modell750s.html" },
    { name: "Artura", description: "McLaren", link:"modellartura.html" },
    { name: "S 63 AMG", description: "Mercedes-Benz" },
    { name: "G 63 AMG", description: "Mercedes-Benz" },
    { name: "S 350", description: "Mercedes-Benz" },
    { name: "RS 6", description: "Audi" },
    { name: "R8", description: "Audi" },
    { name: "Q8", description: "Audi" },
    { name: "Emire", description: "Lotus" },
    { name: "Esprit", description: "Lotus" },
    { name: "Exige", description: "Lotus" },
    { name: "M3", description: "BMW" },
    { name: "M4", description: "BMW" },
    { name: "X6", description: "BMW" }
    
  ];
  
  const searchInput = document.getElementById("searchInput");
  const resultsDiv = document.getElementById("searchResults");
  
  searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    resultsDiv.innerHTML = "";
  
    for (const product of dataSet1) {
      const productName = product.name.toLowerCase();
      const productDescription = product.description.toLowerCase();
      if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
        resultsDiv.innerHTML += `
          <div id="oneResult">
            <h2><a href="${product.link}">${product.name}</a></h2>
            <p>${product.description}</p>
          </div>
        `;
      }
    }
  });