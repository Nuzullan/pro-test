window.onload = function () {
    const changeColorBtn = document.getElementById("changeColorBtn");
    const historyBody = document.getElementById("historyBody");
    let colorHistory = [];
  
    function generateRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }
  
    function changeBackgroundColor() {
      if (colorHistory.length >= 20) {
        alert("Color history limit reached (20 colors)");
        return;
      }
  
      const newColor = generateRandomColor();
      document.body.style.backgroundColor = newColor;
  
      if (colorHistory.length < 20) {
        colorHistory.push(newColor);
        updateHistoryTable();
      }
    }
  
    function updateHistoryTable() {
      historyBody.innerHTML = "";
  
      colorHistory.forEach((color, index) => {
        const row = historyBody.insertRow();
        const indexCell = row.insertCell(0);
        const colorCell = row.insertCell(1);
  
        indexCell.textContent = index + 1;
        colorCell.textContent = color;
      });
    }
  
    changeColorBtn.addEventListener("click", changeBackgroundColor);
  };

  

