function showContent(type) {
    const content = document.getElementById('mainContent');
    let html = "";

    switch (type) {
        case 'user':
            html = `<h3>User Details</h3><p>Name: John Doe</p><p>Role: Admin</p>`;
            break;
        case 'mac_laptop':
            html = `<h3>Mac Laptop</h3><p>Model: MacBook Pro 16"</p><p>Year: 2023</p>`;
            break;
        case 'win_laptop':
            html = `<h3>Windows Laptop</h3><p>Brand: Dell</p><p>Model: XPS 15</p>`;
            break;
        case 'desktop':
            html = `<h3>Desktop</h3><p>Brand: HP</p><p>Model: EliteDesk 800</p>`;
            break;
        case 'mouse':
            html = `<h3>Mouse</h3><p>Type: Wireless</p><p>Brand: Logitech</p>`;
            break;
        case 'keyboard':
            html = `<h3>Keyboard</h3><p>Type: Mechanical</p><p>Brand: Keychron</p>`;
            break;
        case 'usb_camera':
            html = `<h3>USB Camera</h3><p>Resolution: 1080p</p><p>Brand: Logitech</p>`;
            break;
        case 'headset':
            html = `<h3>Headset</h3><p>Type: Over-ear</p><p>Brand: Bose</p>`;
            break;
        case 'wifi_device':
            html = `<h3>WiFi Device</h3><p>Brand: TP-Link</p><p>Speed: 1Gbps</p>`;
            break;
        case 'laptop_bag':
            html = `<h3>Laptop Bag</h3><p>Type: Backpack</p><p>Brand: Samsonite</p>`;
            break;
        case 'scrap_system':
            html = `<h3>Scrap System</h3><p>Status: Not in use</p>`;
            break;
        case 'software':
            html = `<h3>Software</h3><p>OS: Windows 11 / macOS Ventura</p>`;
            break;
        default:
            html = `<h3>Welcome</h3><p>Select an asset to view details.</p>`;
    }

    content.innerHTML = html;
}
