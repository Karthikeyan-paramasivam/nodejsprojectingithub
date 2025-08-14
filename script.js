function showContent(type) {
    const content = document.getElementById('mainContent');
    let html = "";
    const portInfo = `<p style="color: gray; font-size: 14px;">Served from port 3000</p>`;

    switch (type) {
        case 'user':
            html = `<h3>User Details</h3>${portInfo}`;
            break;
        case 'mac_laptop':
            html = `<h3>Mac Laptop</h3>${portInfo}`;
            break;
        case 'win_laptop':
            html = `<h3>Windows Laptop</h3>${portInfo}`;
            break;
        case 'desktop':
            html = `<h3>Desktop</h3>${portInfo}`;
            break;
        case 'mouse':
            html = `<h3>Mouse</h3>${portInfo}`;
            break;
        case 'keyboard':
            html = `<h3>Keyboard</h3>${portInfo}`;
            break;
        case 'usb_camera':
            html = `<h3>USB Camera</h3>${portInfo}`;
            break;
        case 'headset':
            html = `<h3>Headset</h3>${portInfo}`;
            break;
        case 'wifi_device':
            html = `<h3>WiFi Device</h3>${portInfo}`;
            break;
        case 'laptop_bag':
            html = `<h3>Laptop Bag</h3>${portInfo}`;
            break;
        case 'scrap_system':
            html = `<h3>Scrap System</h3>${portInfo}`;
            break;
        case 'software':
            html = `<h3>Software</h3>${portInfo}`;
            break;
        default:
            html = `<h3>Welcome</h3>${portInfo}`;
    }

    content.innerHTML = html;
}

