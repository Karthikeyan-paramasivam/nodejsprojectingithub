function showContent(type) {
    const content = document.getElementById('mainContent');
    let html = "";

    const portInfo = `<p style="color: gray; font-size: 14px;">(Served from port 3000)</p>`;

    switch (type) {
        case 'user':
            html = `<h3>User Details</h3><p>Name: John Doe</p><p>Role: Admin</p>${portInfo}`;
            break;
        case 'mac_laptop':
            html = `<h3>Mac Laptop</h3><p>Model: MacBook Pro 16"</p><p>Year: 2023</p>${portInfo}`;
            break;
        case 'win_laptop':
            html = `<h3>Windows Laptop</h3><p>Brand: Dell</p><p>Model: XPS 15</p>${portInfo}`;
            break;
        case 'desktop':
            html = `<h3>Desktop</h3><p>Brand: HP</p><p>Model: EliteDesk 800</p>${portInfo}`;
            break;
        case 'mouse':
            html = `<h3>Mouse</h3><p>Type: Wireless</p><p>Brand: Logitech</p>${portInfo}`;
            break;
        case 'keyboard':
            html = `<h3>Keyboard</h3><p>Type: Mechanical</p><p>Brand: Keychron</p>${portInfo}`;
            break;
        case 'usb_camera':
            html = `<h3>USB Camera</h3><p>Resolution: 1080p</p><p>Brand: Logitech</p>${portInfo}`;
            break;
        case 'headset':
            html = `<h3>Headset</h3><p>Type: Over-ear</p><p>Brand: Bose</p>${portInfo}`;
            break;
        case 'wifi_device':
            html = `<h3>WiFi Device</h3><p>Brand: TP-Link</p><p>Speed: 1Gbps</p>${portInfo}`;
            break;
        case 'laptop_bag':
            html = `<h3>Laptop Bag</h3><p>Type: Backpack</p><p>Brand: Samsonite</p>${portInfo}`;
            break;
        case 'scrap_system':
            html = `<h3>Scrap System</h3><p>Status: Not in use</p>${portInfo}`;
            break;
        case 'software':
            html = `<h3>Software</h3><p>OS: Windows 11 / macOS Ventura</p>${portInfo}`;
            break;
        default:
            html = `<h3>Welcome</h3><p>Select an asset to view details.</p>${portInfo}`;
    }

    content.innerHTML = html;
}
