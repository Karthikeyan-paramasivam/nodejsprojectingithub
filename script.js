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
        case 'mac_laptop':
            html = `<h3 style="text-align:center;">Mac Laptop</h3>`;
            break;
        case 'win_laptop':
            html = `<h3 style="text-align:center;">Windows Laptop</h3>`;
            break;
        case 'desktop':
            html = `<h3 style="text-align:center;">Desktop</h3>`;
            break;
        case 'mouse':
            html = `<h3 style="text-align:center;">Mouse</h3>`;
            break;
        case 'keyboard':
            html = `<h3 style="text-align:center;">Keyboard</h3>`;
            break;
        case 'usb_camera':
            html = `<h3 style="text-align:center;">USB Camera</h3>`;
            break;
        case 'headset':
            html = `<h3 style="text-align:center;">Headset</h3>`;
            break;
        case 'wifi_device':
            html = `<h3 style="text-align:center;">WiFi Device</h3>`;
            break;
        case 'laptop_bag':
            html = `<h3 style="text-align:center;">Laptop Bag</h3>`;
            break;
        case 'scrap_system':
            html = `<h3 style="text-align:center;">Scrap System</h3>`;
            break;
        case 'software':
            html = `<h3 style="text-align:center;">Software</h3>`;
            break;
        default:
            html = `<h3 style="text-align:center;">Welcome</h3>`;
    }

    content.innerHTML = html;
}

function submitUser() {
    const empNo = document.getElementById('empNo').value;
    const resultMsg = document.getElementById('resultMsg');

    // Replace this with your Google Apps Script Web App URL
    const gsheetApiUrl = "https://script.google.com/macros/s/AKfycbzhhAaCan9Q7vUl18szvCW4VHM38XR8m6mrDbsXI5O9iNrpZFvCkAvexq_27YO3RpqD/exec";

    fetch(`${gsheetApiUrl}?empNo=${encodeURIComponent(empNo)}`)
    .then(res => res.json())
    .then(data => {
        if (data.exists) {
            resultMsg.style.color = 'green';
            resultMsg.textContent = "Details available for Employee ID: " + empNo;
        } else {
            resultMsg.style.color = 'red';
            resultMsg.textContent = "No details found for Employee ID: " + empNo;
        }
    })
    .catch(err => {
        resultMsg.style.color = 'red';
        resultMsg.textContent = "Error checking details.";
        console.error(err);
    });
}