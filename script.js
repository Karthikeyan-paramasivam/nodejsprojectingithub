// Sidebar content switching
function showContent(type) {
  const content = document.getElementById('mainContent');
  let html = "";

  // Common welcome message
  const welcomeHtml = `
    <h3 style="text-align:center; color: rgb(121, 209, 244); font-size: 30px; ">
      Welcome to Pippin Assets
    </h3>
  `;

  switch (type) {
    case 'user':
      html = `
        ${welcomeHtml}

        <!-- Create Button -->
        <div style="text-align: center;">
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
          
          <!-- PC Section -->
          <div style="display: flex; align-items: center; gap: 20px; margin: 10px 0;">

          <div style="display: flex; flex-direction: column;">
          <label for="pc">PC Type</label>
          <select id="pc" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
          <option value="">-- Select PC Type --</option>
          <option value="Desktop">Desktop</option>
          <option value="Win_Laptop">Win Laptop</option>
          <option value="MAC_Laptop">MAC Laptop</option>
          <option value="Laptop">Laptop</option>
          </select>
          </div>

          <div style="display: flex; flex-direction: column;">
          <label for="ass_idpc">PC Assets ID</label>
          <input id="ass_idpc" type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
          </div>


          <div style="display: flex; flex-direction: column;">
            <label for="ser_num">PC Serial Number</label>
            <input id="ser_num" type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
          </div>
          </div>


          <!-- Monitor Section -->
          <div style="display: flex; align-items: center; gap: 20px; margin: 10px 0;">

          <div style="display: flex; flex-direction: column;">
          <label for="monitor">Monitor-1</label>
          <select id="monitor" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
          <option value="">-- Select Monitor --</option>
          <option value="monitor-1">Monitor-1</option>
          </select>
          </div>

          <div style="display: flex; flex-direction: column;">
          <label for="monitor_id">Monitor Assets ID-1</label>
          <input id="ass_idpc" type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
          </div>


          <div style="display: flex; flex-direction: column;">
            <label for="monitor_ser_num">Monitor Serial Number-1</label>
            <input id="ser_num" type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
          </div>
          </div>

          <div style="display: flex; align-items: center; gap: 20px; margin: 10px 0;">

          <div style="display: flex; flex-direction: column;">
          <label for="monitor">Monitor-2</label>
          <select id="monitor" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
          <option value="">-- Select Monitor --</option>
          <option value="monitor-1">Monitor-2</option>
          </select>
          </div>

          <div style="display: flex; flex-direction: column;">
          <label for="monitor_id">Monitor Assets ID-2</label>
          <input id="ass_idpc" type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
          </div>


          <div style="display: flex; flex-direction: column;">
            <label for="monitor_ser_num">Monitor Serial Number-2</label>
            <input id="ser_num" type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
          </div>
          </div>

          <div style="display: flex; align-items: center; gap: 20px; margin: 10px 0;">

          <div style="display: flex; flex-direction: column;">
          <label for="monitor">Monitor-3</label>
          <select id="monitor" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
          <option value="">-- Select Monitor --</option>
          <option value="monitor-1">Monitor-3</option>
          </select>
          </div>

          <div style="display: flex; flex-direction: column;">
          <label for="monitor_id">Monitor Assets ID-3</label>
          <input id="ass_idpc" type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
          </div>


          <div style="display: flex; flex-direction: column;">
            <label for="monitor_ser_num">Monitor Serial Number-3</label>
            <input id="ser_num" type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
          </div>

          <div id="monitor3-block" style="display: flex; align-items: center; gap: 20px; margin: 10px 0;">

  <div style="display: flex; flex-direction: column;">
    <label for="monitor3">Monitor-3</label>
    <select id="monitor3" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
      <option value="">-- Select Monitor --</option>
      <option value="monitor-3">Monitor-3</option>
    </select>
  </div>

  <div style="display: flex; flex-direction: column;">
    <label for="monitor3_id">Monitor Assets ID-3</label>
    <input id="monitor3_id" type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
  </div>

  <div style="display: flex; flex-direction: column;">
    <label for="monitor3_serial">Monitor Serial Number-3</label>
    <input id="monitor3_serial" type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
  </div>

  <!-- Remove button -->
  <div style="display: flex; flex-direction: column; justify-content: flex-end;">
    <button type="button" onclick="removeMonitor('monitor3-block')"
      style="padding: 6px 12px; background-color: red; color: white; border: none; border-radius: 6px; cursor: pointer;">
      Remove
    </button>
  </div>
</div>


          <div style="display: flex; align-items: center; gap: 20px; margin: 10px 0;">

          <div style="display: flex; flex-direction: column;">
          <label for="Headset">Headset</label>
          <select id="Headset" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
          <option value="">-- Headset Type --</option>
          <option value="w.mouse">Wired Headset</option>
          <option value="ws.mouse">Wireless Headset</option>
          </select>
          </div>

          <div style="display: flex; flex-direction: column;">
          <label for="Headset">Headset Assets ID</label>
          <input id="Headset" type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
          </div>


          <div style="display: flex; flex-direction: column;">
            <label for="Headset_serial">Headset Serial Number</label>
            <input id="Headset_serial" type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
          </div>
          </div>

          <div style="display: flex; align-items: center; gap: 20px; margin: 10px 0;">

          <div style="display: flex; flex-direction: column;">
          <label for="mouse">Mouse</label>
          <select id="mouse" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
          <option value="">-- Mouse Type --</option>
          <option value="w.mouse">Wired Mouse</option>
          <option value="ws.mouse">Wireless Mouse</option>
          </select>
          </div>

          <div style="display: flex; flex-direction: column;">
          <label for="mouse_assets">Mouse Assets ID</label>
          <input id="mouse_assets" type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
          </div>


          <div style="display: flex; flex-direction: column;">
            <label for="mouse_serial">Mouse Serial Number</label>
            <input id="mouse_serial" type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
          </div>
          </div>

          <div style="text-align: left; margin-bottom: 20px;">
          <button id="saveUserBtn"
          style="margin-top: 15px; padding: 10px 20px; background-color: green; color: white; border: none; border-radius: 8px; cursor: pointer;">
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

function removeMonitor(blockId) {
  const block = document.getElementById(blockId);
  if (block) {
    block.remove(); // removes only for current session
  }
}
