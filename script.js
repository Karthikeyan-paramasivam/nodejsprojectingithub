// Sidebar content switching
function showContent(type) {
  const content = document.getElementById('mainContent');
  let html = "";

  switch (type) {
    case 'user':
      html = `
        <!-- Create Button (Top-Left Corner) -->
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
          <option value="Laptop">Win_Laptop</option>
          <option value="Laptop">MAC_Laptop</option>
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
  break;

    case 'mac_laptop': html = `<h3 style="text-align:center;">Mac Laptop</h3>`; break;
    case 'win_laptop': html = `<h3 style="text-align:center;">Windows Laptop</h3>`; break;
    case 'desktop': html = `<h3 style="text-align:center;">Desktop</h3>`; break;
    case 'mouse': html = `<h3 style="text-align:center;">Mouse</h3>`; break;
    case 'keyboard': html = `<h3 style="text-align:center;">Keyboard</h3>`; break;
    case 'usb_camera': html = `<h3 style="text-align:center;">USB Camera</h3>`; break;
    case 'headset': html = `<h3 style="text-align:center;">Headset</h3>`; break;
    case 'wifi_device': html = `<h3 style="text-align:center;">WiFi Device</h3>`; break;
    case 'laptop_bag': html = `<h3 style="text-align:center;">Laptop Bag</h3>`; break;
    case 'scrap_system': html = `<h3 style="text-align:center;">Scrap System</h3>`; break;
    case 'software': html = `<h3 style="text-align:center;">Software</h3>`; break;
    default: html = `<h3 style="text-align:center;">Welcome to Pippin Assets</h3>`;
  }

  content.innerHTML = html;
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

  fetch("employees.json")  // Ensure employees.json is in same folder
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

// --- Attach Submit Button ---
document.getElementById("submitBtn").addEventListener("click", submitUser);

// --- Attach actions dynamically for other buttons ---
document.addEventListener("click", function(event) {
  if (event.target.id === "createBtn") {
    showContent("createUser");
  }
  if (event.target.id === "saveUserBtn") {
    alert("✅ User Created Successfully!");
    showContent("user"); // go back to User page
  }
});
