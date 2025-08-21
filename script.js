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
      <label for="empNo" style="font-size: 16px; margin-right: 10px;">Employee Name</label>
            <input id="empname" type="text" placeholder="Enter Employee Name"
                   style="padding: 10px; font-size: 16px; width: 250px; border-radius: 8px; border: 1px solid #ccc;">
          </div>

          <div style="text-align:center; font-family: Arial, sans-serif;">
          <button id="submitBtn"
                  style="margin-top: 15px; padding: 10px 20px; font-size: 16px;
                         background-color: rgba(232, 121, 244, 1); color: white;
                         border: none; border-radius: 8px; cursor: pointer;">
            Submit
          </button>
          <p id="resultMsg" style="margin-top: 20px; font-size: 18px; color: green;"></p>
        </div>
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
            <label for="newEmpNo">Employee No:</label>
            <input id="newEmpNo" type="text" placeholder="Enter Employee No">
          </div>

          <div style="text-align: left; margin: 25px;">
            <label for="empName">Employee Name:</label>
            <input id="empName" type="text" placeholder="Enter Employee Name">
          </div>
<!-- Container for all PCs -->
<div id="pc-container">
  <!-- PC Section -->
  <div class="pc-block" style="display: flex; align-items: center; gap: 20px; margin: 10px 0;">
    <div style="display: flex; flex-direction: column;">
      <label>PC Type</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="">-- Select PC Type --</option>
        <option value="Desktop">Desktop</option>
        <option value="Win_Laptop">Win Laptop</option>
        <option value="MAC_Laptop">MAC Laptop</option>
        <option value="Laptop">Laptop</option>
      </select>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>PC Assets ID</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>PC Serial Number</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Assigned Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Return Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Remarks</label>
      <textarea rows="1" placeholder="Remarks here..."
        style="padding: 8px; width: 250px; border-radius: 5px; border: 1px solid #ccc; resize: both;"></textarea>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>IT Name</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="">-- Select Name --</option>
        <option value="Padmanabha V R">Padmanabha V R</option>
        <option value="Vijay_Kumar">Vijay Kumar S</option>
        <option value="Thatrakal_Suresh">Thatrakal Suresh</option>
        <option value="Karthikeyan">Karthikeyan P</option>
        <option value="Rajshekar">Rajshekar R</option>
      </select>
    </div>

    <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
      <button type="button" onclick="addPC()"
        style="padding: 8px 16px; background-color: green; color: white; border: none; border-radius: 6px; cursor: pointer;">
        Add PC
      </button>

      <button type="button" onclick="removePC(this)"
        style="padding: 8px 16px; background-color: red; color: white; border: none; border-radius: 6px; cursor: pointer;">
        Remove
      </button>
    </div>
  </div>
</div>

<!-- Container for all Monitors -->
<div id="monitor-container">
  <div class="monitor-block" style="display: flex; align-items: center; gap: 20px; margin: 10px 0;">
    <div style="display: flex; flex-direction: column;">
      <label>Monitor</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="">-- Select Monitor --</option>
        <option value="monitor-1">Monitor-1</option>
        <option value="monitor-2">Monitor-2</option>
        <option value="monitor-3">Monitor-3</option>
      </select>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>Monitor Assets ID</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>Monitor Serial Number</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Assigned Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Return Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Remarks</label>
      <textarea rows="1" placeholder="Enter remarks here..."
        style="padding: 8px; width: 250px; border-radius: 5px; border: 1px solid #ccc; resize: both;"></textarea>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>IT Name</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="">-- Select Name --</option>
        <option value="Padmanabha V R">Padmanabha V R</option>
        <option value="Vijay_Kumar">Vijay Kumar S</option>
        <option value="Thatrakal_Suresh">Thatrakal Suresh</option>
        <option value="Karthikeyan">Karthikeyan P</option>
        <option value="Rajshekar">Rajshekar R</option>
      </select>
    </div>

    <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
      <button type="button" onclick="addMonitor()"
        style="padding: 8px 16px; background-color: green; color: white; border: none; border-radius: 6px; cursor: pointer;">
        Add Monitor
      </button>

      <button type="button" onclick="removeMonitor(this)"
        style="padding: 8px 16px; background-color: red; color: white; border: none; border-radius: 6px; cursor: pointer;">
        Remove
      </button>
    </div>
  </div>
</div>

<!-- Container Headset -->
<div id="headset-container">
  <div class="headset-block" style="display: flex; align-items: center; gap: 20px; margin: 10px 0;">
    <div style="display: flex; flex-direction: column;">
      <label>HeadSet</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="">-- Select Headset --</option>
        <option value="Headset_Wired">Headset Wired</option>
        <option value="Headset_Wireless">Headset Wireless</option>
      </select>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>Headset Assets ID</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>Headset Serial Number</label>
      <input type="text" style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Assigned Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Return Date</label>
      <input type="date" style="padding: 8px; width: 110px; border-radius: 5px; border: 1px solid #ccc;">
    </div>

    <div style="display: flex; flex-direction: column; margin: 10px 0;">
      <label>Remarks</label>
      <textarea rows="1" placeholder="Enter remarks here..."
        style="padding: 8px; width: 250px; border-radius: 5px; border: 1px solid #ccc; resize: both;"></textarea>
    </div>

    <div style="display: flex; flex-direction: column;">
      <label>IT Name</label>
      <select style="padding: 8px; width: 150px; border-radius: 5px; border: 1px solid #ccc;">
        <option value="">-- Select Name --</option>
        <option value="Padmanabha V R">Padmanabha V R</option>
        <option value="Vijay_Kumar">Vijay Kumar S</option>
        <option value="Thatrakal_Suresh">Thatrakal Suresh</option>
        <option value="Karthikeyan">Karthikeyan P</option>
        <option value="Rajshekar">Rajshekar R</option>
      </select>
    </div>

    <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
      <button type="button" onclick="addHeadset()"
        style="padding: 8px 16px; background-color: green; color: white; border: none; border-radius: 6px; cursor: pointer;">
        Add Headset
      </button>

      <button type="button" onclick="removeHeadset(this)"
        style="padding: 8px 16px; background-color: red; color: white; border: none; border-radius: 6px; cursor: pointer;">
        Remove
      </button>
    </div>
  </div>
</div>

<!-- Save Button -->
<div style="text-align: center; margin-bottom: 20px;">
  <button id="saveUserBtn"
    style="margin-top: 15px; padding: 10px 20px; background-color: green; color: white; border: none; border-radius: 8px; cursor: pointer;">
    Save
  </button>
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

// Add PC
function addPC() {
  addBlock("pc-container", "pc-block");
}

// Add Monitor
function addMonitor() {
  addBlock("monitor-container", "monitor-block");
}

// Add Headset
function addHeadset() {
  addBlock("Headset-container", "Headset-block");
}

// Generic function to clone & clear
function addBlock(containerId, blockClass) {
  const container = document.getElementById(containerId);
  const firstBlock = container.querySelector("." + blockClass);
  const newBlock = firstBlock.cloneNode(true);

  // clear inputs
  newBlock.querySelectorAll("input").forEach(input => input.value = "");
  newBlock.querySelectorAll("select").forEach(sel => sel.selectedIndex = 0);

  container.appendChild(newBlock);
}

// Generic remove
function removeBlock(button, blockClass, containerId) {
  const block = button.closest("." + blockClass);
  const container = document.getElementById(containerId);

  // prevent removing the last one
  if (container.querySelectorAll("." + blockClass).length > 1) {
    block.remove();
  } else {
    alert("At least one entry must remain.");
  }
}
