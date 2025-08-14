function showContent(type) {
    const content = document.getElementById('mainContent');
    let html = "";
    

    switch (type) {
        case 'user':
            let html = `<h3 style="text-align: center; color: rgb(121, 209, 244);">User Details</h3>`;
            content.innerHTML = html;
            break;
        case 'mac_laptop':
            html = `<h3>Mac Laptop</h3>`;
            break;
        case 'win_laptop':
            html = `<h3>Windows Laptop</h3>`;
            break;
        case 'desktop':
            html = `<h3>Desktop</h3>`;
            break;
        case 'mouse':
            html = `<h3>Mouse</h3>`;
            break;
        case 'keyboard':
            html = `<h3>Keyboard</h3>`;
            break;
        case 'usb_camera':
            html = `<h3>USB Camera</h3>`;
            break;
        case 'headset':
            html = `<h3>Headset</h3>`;
            break;
        case 'wifi_device':
            html = `<h3>WiFi Device</h3>`;
            break;
        case 'laptop_bag':
            html = `<h3>Laptop Bag</h3>`;
            break;
        case 'scrap_system':
            html = `<h3>Scrap System</h3>`;
            break;
        case 'software':
            html = `<h3>Software</h3>`;
            break;
        default:
            html = `<h3>Welcome</h3>`;
    }

    content.innerHTML = html;
}

