(function() {
    'use strict';

    const messages = document.querySelector('.css-4nt1n4');

    if (!messages) {
        console.error('Element not found');
        return;
    }

    var saved_content = '';

    for (const subelement of messages.children) {
        var msg_content = subelement.querySelector('.chakra-text.css-1dng7dm') || subelement.querySelector('.chakra-text.css-1z9n34');
        var user = subelement.querySelector('.chakra-text.css-opvwf3');
        var time = subelement.querySelector('.chakra-text.css-9km0jq') || subelement.querySelector('.chakra-text.css-4coye4');

        if (msg_content || user) {
            user = user ? user.textContent.trim() : 'User';
            msg_content = msg_content ? msg_content.textContent.trim() : '';
            time = time ? time.textContent.trim() : '';

            const content = `${time} | ${user}: ${msg_content}`;

            saved_content += content + '\n\n';
        }
    }

    console.log(saved_content);

    const blob = new Blob([saved_content], { type: 'text/plain' });
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = 'aisekai_export.txt';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
})();
