// Sidebar content switching
function showContent(type) {
  const content = document.getElementById('mainContent');
  let html = "";

  switch (type) {
    case 'user':
      html = `
        <!-- Create Button -->
        <button id="createBtn"
                style="position: absolute; top: 30px; left: 270px;
                       padding: 20px 30px; font-size: 20px;
                       background-color: rgba(121, 209, 244, 1);
                       color: white; border: none; border-radius: 8px; cursor: pointer;">
          Create
        </button>

        <div style="text-align:center; font-family: Arial, sans-serif;">
          <h3 style="color: rgb(121, 209, 244); margin-bottom: 20px; font-size: 40px;">User Details</h3>
          <div style="margin: 10px;">
            <label for="empNo" style="font-size: 16px; margin-right: 10px;">Employee No</label>
            <input id="empNo" type="text" placeholder="Enter Employee No"
                   style="padding: 10px; font-size: 16px; width: 250px; border-radius: 8px; border: 1px solid #ccc;">
          </div>

          <!-- Submit Button -->
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

      // Attach event listener AFTER button exists
      document.getElementById("submitBtn").addEventListener("click", submitUser);
      break;

    case 'createUser':
      html = `
        <div style="text-align:center; font-family: Arial, sans-serif;">
          <h3 style="color: rgb(121, 209, 244); margin-bottom: 20px; font-size: 40px;">Create User</h3>
          
          <div style="margin: 10px;">
            <label for="newEmpNo" style="font-size: 16px; margin-right: 10px;">Employee No</label>
            <input id="newEmpNo" type="text" placeholder="Enter Employee No"
                   style="padding: 10px; font-size: 16px; width: 250px; border-radius: 8px; border: 1px solid #ccc;">
          </div>

          <div style="margin: 10px;">
            <label for="empName" style="font-size: 16px; margin-right: 10px;">Employee Name</label>
            <input id="empName" type="text" placeholder="Enter Employee Name"
                   style="padding: 10px; font-size: 16px; width: 250px; border-radius: 8px; border: 1px solid #ccc;">
          </div>

          <div style="margin: 10px;">
            <label for="pc" style="font-size: 16px; margin-right: 10px;">PC</label>
            <select id="pc" 
                    style="padding: 10px; font-size: 16px; width: 270px; border-radius: 8px; border: 1px solid #ccc;">
              <option value="">-- Select PC --</option>
              <option value="Desktop">Desktop</option>
              <option value="Win_Laptop">Win_Laptop</option>
              <option value="MAC_Laptop">MAC_Laptop</option>
              <option value="Laptop">Laptop</option>
            </select>
          </div>

          <div style="margin: 10px;">
            <label for="ass_idpc" style="font-size: 16px; margin-right: 10px;">Assets_ID</label>
            <input id="ass_idpc" type="text" placeholder="Enter Assets_ID"
                   style="padding: 10px; font-size: 16px; width: 250px; border-radius: 8px; border: 1px solid #ccc;">
          </div>

          <div style="margin: 10px;">
            <label for="ser_num" style="font-size: 16px; margin-right: 10px;">Serial_Number</label>
            <input id="ser_num" type="text" placeholder="Enter Serial Number"
                   style="padding: 10px; font-size: 16px; width: 250px; border-radius: 8px; border: 1px solid #ccc;">
          </div>

          <button id="saveUserBtn"
                  style="margin-top: 15px; padding: 10px 20px; font-size: 16px;
                         background-color: green; color: white; border: none;
                         border-radius: 8px; cursor: pointer;">
            Save
          </button>
        </div>
      `;
      content.innerHTML = html;

      // Attach event listener AFTER button exists
      document.getElementById("saveUserBtn").addEventListener("click", () => {
        alert("✅ User Created Successfully!");
        showContent("user");
      });
      break;

    // Other sidebar cases
    default:
      html = `<h3 style="text-align:center;">Welcome to Pippin Assets</h3>`;
      content.innerHTML = html;
  }
}

// --- Submit User ---
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

// --- Initialize page ---
document.addEventListener("DOMContentLoaded", () => {
  showContent("user"); // show user page on load
});
