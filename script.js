// Sidebar content switching
function showContent(type) {
    const content = document.getElementById('mainContent');
    let html = "";

    switch (type) {
        case 'user':
            html = `
                <div style="text-align:center; font-family: Arial, sans-serif;">
                    <h3 style="color: rgb(121, 209, 244); margin-bottom: 20px; font-size: 40px;">User Details</h3>
                    <div style="margin: 10px;">
                        <label for="empNo" style="font-size: 16px; margin-right: 10px;">Employee No</label>
                        <input id="empNo" type="text" placeholder="Enter Employee No"
                               style="padding: 10px; font-size: 16px; width: 250px; border-radius: 8px; border: 1px solid #ccc;">
                    </div>
                    <button onclick="submitUser()"
                            style="margin-top: 15px; padding: 10px 20px; font-size: 16px; background-color: rgba(232, 121, 244, 1); color: white; border: none; border-radius: 8px; cursor: pointer;">
                        Submit
                    </button>
                    <p id="resultMsg" style="margin-top: 20px; font-size: 18px; color: green;"></p>
                </div>
            `;
            break;
        default:
            html = `<h3 style="text-align:center;">${type.replace('_', ' ').toUpperCase()}</h3>`;
    }

    content.innerHTML = html;
}

// Employee lookup using JSONP
function submitUser() {
    const empNo = document.getElementById('empNo').value.trim();
    const resultMsg = document.getElementById('resultMsg');
    const gsheetApiUrl = "https://script.google.com/macros/s/AKfycbzhhAaCan9Q7vUl18szvCW4VHM38XR8m6mrDbsXI5O9iNrpZFvCkAvexq_27YO3RpqD/exec";

    if (!empNo) {
        resultMsg.style.color = 'red';
        resultMsg.textContent = "❌ Please enter an Employee ID";
        return;
    }

    const oldScript = document.getElementById('jsonpScript');
    if (oldScript) oldScript.remove();

    const script = document.createElement('script');
    script.id = 'jsonpScript';
    script.src = `${gsheetApiUrl}?empNo=${encodeURIComponent(empNo)}&callback=handleResponse`;
    document.body.appendChild(script);

    window.handleResponse = function(data) {
        if (!data) {
            resultMsg.style.color = 'red';
            resultMsg.textContent = "❌ No response from server.";
            return;
        }

        if (data.error) {
            resultMsg.style.color = 'red';
            resultMsg.textContent = `❌ ${data.error}`;
            return;
        }

        if (data.exists) {
            resultMsg.style.color = 'green';
            let detailsHtml = `<p>✅ Details available for Employee ID: ${empNo}</p><ul>`;
            for (const [key, value] of Object.entries(data.details)) {
                detailsHtml += `<li><strong>${key}:</strong> ${value}</li>`;
            }
            detailsHtml += `</ul>`;
            resultMsg.innerHTML = detailsHtml;
        } else {
            resultMsg.style.color = 'red';
            resultMsg.textContent = "❌ No details found for this Employee ID.";
        }
    };
}
