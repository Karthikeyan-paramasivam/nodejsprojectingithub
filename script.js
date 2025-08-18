// Sidebar content switching
function showContent(type) {
  const content = document.getElementById('mainContent');
  let html = "";

  // Common welcome message
  const welcomeHtml = `
    <h3 style="text-align:center; color: rgb(121, 209, 244); font-size: 50px; margin-bottom: 20px;">
      Welcome to Pippin Assets
    </h3>
  `;

  switch (type) {
    case 'user':
      html = `
        ${welcomeHtml}

        <!-- Create Button -->
        <div style="text-align: center; margin-bottom: 20px;">
  <button id="createBtn"
          style="padding: 10px 20px; font-size: 16px;
                 background-color: rgba(144, 244, 121, 1); color: white;
                 border: none; border-radius: 8px; cursor: pointer;">
    Create New User
  </button>
</div>

        <div style="text-align:center; font-family: Arial, sans-serif;">
          <h3 style="color: rgb(121, 209, 244); margin-bottom: 20px; font-size: 28px;">User Details</h3>
          <div style="margin: 10px;">
            <label for="empNo" style="font-size: 16px; margin-right: 10px;">Employee No</label>
            <input id="empNo" type="text" placeholder="Enter Employee No"
                   style="padding: 10px; font-size: 16px; width: 250px; border-radius: 8px; border: 1px solid #ccc;">
          </div>

          <button id="submitBtn"
                  style="margin-top: 15px; padding: 10px 20px; font-size: 16px;
                         background-color: rgba(232, 121, 244, 1); color: white;
                         border: none; border-radius: 8px; cursor: pointer;">
            Submit
          </button>

          <p id="resultMsg" style="margin-top: 20px; font-size: 18px; color: green;"></p>
        </div>
      `;
      content.innerHTML = html;

      // Attach event listeners
      document.getElementById("submitBtn").addEventListener("click", submitUser);
      document.getElementById("createBtn").addEventListener("click", () => showContent("createUser"));
      break;

    case 'createUser':
      html = `
        ${welcomeHtml}

        <div style="text-align:center; font-family: Arial, sans-serif;">
          <h3 style="color: rgb(121, 209, 244); margin-bottom: 20px; font-size: 28px;">Create User</h3>
          
          <div style="text-align: left; margin: 25px;">
            <label for="newEmpNo">Employee No</label>
            <input id="newEmpNo" type="text" placeholder="Enter Employee No">
          </div>

          <div style="text-align: left; margin: 25px;">
            <label for="empName">Employee Name</label>
            <input id="empName" type="text" placeholder="Enter Employee Name">
          </div>

          <div style="text-align: left; margin: 25px;">
            <label for="pc">PC Type</label>
            <select id="pc">
              <option value="">-- Select PC Type--</option>
              <option value="Desktop">Desktop</option>
              <option value="Win_Laptop">Win_Laptop</option>
              <option value="MAC_Laptop">MAC_Laptop</option>
              <option value="Laptop">Laptop</option>
            </select>
          </div>

          <div style="margin: 10px;">
            <label for="ass_idpc">PC Assets ID</label>
            <input id="ass_idpc" type="text" placeholder="Enter Assets_ID">
          </div>

          <div style="margin: 10px;">
            <label for="ser_num">PC Serial_Number</label>
            <input id="ser_num" type="text" placeholder="Enter Serial Number">
          </div>

          <div style="text-align: center; margin-bottom: 20px;">
          <button id="saveUserBtn"
                  style="margin-top: 15px; texpadding: 10px 20px; background-color: green; color: white; border: none; border-radius: 8px; cursor: pointer;">
            Save
          </button>
          </div>
        </div>
      `;
      content.innerHTML = html;

      document.getElementById("saveUserBtn").addEventListener("click", () => {
        alert("✅ User Created Successfully!");
        showContent("user"); // Go back to user details page
      });
      break;

    default:
      html = welcomeHtml;
      content.innerHTML = html;
  }
}

// Submit User function
function submitUser() {
  const empNo = document.getElementById("empNo").value.trim();
  const resultMsg = document.getElementById("resultMsg");

  if (!empNo) {
    resultMsg.style.color = "red";
    resultMsg.textContent = "❌ Please enter an Employee ID";
    return;
  }

  fetch("employees.json")
    .then(res => res.json())
    .then(data => {
      if (data[empNo]) {
        const details = data[empNo];
        resultMsg.style.color = "green";
        let detailsHtml = `<p>✅ Details for Employee ID: ${empNo}</p><ul>`;
        for (const [key, value] of Object.entries(details)) {
          detailsHtml += `<li><strong>${key}:</strong> ${value}</li>`;
        }
        detailsHtml += "</ul>";
        resultMsg.innerHTML = detailsHtml;
      } else {
        resultMsg.style.color = "red";
        resultMsg.textContent = "❌ No details found for this Employee ID.";
      }
    })
    .catch(err => {
      resultMsg.style.color = "red";
      resultMsg.textContent = "⚠️ Error fetching data.";
      console.error(err);
    });
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  showContent("user"); // default view
});
