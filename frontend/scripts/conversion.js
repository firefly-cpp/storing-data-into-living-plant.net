function submit(event) {
    event.preventDefault();
}

function changeMethod() {
    //  Parse data
    const method = document.getElementById('method').value;
    const key = document.getElementById('compression_key');

    //  Enable/disable key input field
    if (method === 'compression1') {
        key.disabled = false;
        key.classList.remove('bg-gray-50');
        key.placeholder = 'Enter key here...';
    } else {
        key.disabled = true;
        key.classList.add('bg-gray-50');
        key.placeholder = '';
    }
}

function encode() {
    //  Parse data
    const method = document.getElementById('method').value;
    const key = document.getElementById('compression_key').value;
    const text = document.getElementById('custom_text').value;

    //  Error handling
    if (text === '' || method === '') {
        toggleModal('encodeMissingDataModal');
        return;
    }
    if (method === 'compression1' && key === '') {
        toggleModal('missingKeyModal');
        return;
    }

    //  Encode
    let sequence;
    if (method === 'classic') sequence = classicEncoding(text);

    //  Display sequence
    document.getElementById('sequence').value = sequence;
}

function decode() {
    //  Parse data
    const method = document.getElementById('method').value;
    const key = document.getElementById('compression_key').value;
    const sequence = document.getElementById('sequence').value;

    //  Error handling
    if (sequence === '' || method === '') {
        toggleModal('decodeMissingDataModal');
        return;
    }
    if (method === 'compression1' && key === '') {
        toggleModal('missingKeyModal');
        return;
    }

    //  Decode
    let text;
    if (method === 'classic') text = classicDecoding(sequence);

    //  Display text
    document.getElementById('custom_text').value = text;
}

function classicEncoding(text) {
    //  Convert text to binary
    let bin = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        bin += char.charCodeAt(0).toString(2).padStart(8, '0');
    }

    //  Convert binary to DNA sequence
    let sequence = '';
    for (let i = 0; i < bin.length; i += 2) {
        const substr = bin.slice(i, i + 2);
        switch (substr) {
            case '00':
                sequence += 'A';
                break;
            case '10':
                sequence += 'C';
                break;
            case '11':
                sequence += 'T';
                break;
            case '01':
                sequence += 'G';
                break;
        }
    }

    return sequence;
}

function classicDecoding(sequence) {
    //  Convert DNA sequence to binary
    let bin = '';
    for (let i = 0; i < sequence.length; i++) {
        const char = sequence[i];
        switch (char) {
            case 'A':
                bin += '00';
                break;
            case 'C':
                bin += '10';
                break;
            case 'T':
                bin += '11';
                break;
            case 'G':
                bin += '01';
                break;
        }
    }

    //  Convert binary to text
    let text = '';
    for (let i = 0; i < bin.length; i += 8) {
        const byte = bin.slice(i, i + 8);
        if (byte !== '00000000') {
            text += String.fromCharCode(parseInt(byte, 2));
        }
    }

    return text;
}

function copyDNASequence(event) {
    //  Prevent form submission
    event.preventDefault();

    //  Parse data
    const sequence = document.getElementById('sequence').value;

    //  Copy sequence to clipboard
    navigator.clipboard.writeText(sequence);

    //  Change icon
    document.getElementById('copyToClipboard').classList.add('hidden');
    document.getElementById('copiedToClipboard').classList.remove('hidden');
}

function copyCustomText(event) {
    //  Prevent form submission
    event.preventDefault();

    //  Parse data
    const text = document.getElementById('custom_text').value;

    //  Copy text to clipboard
    navigator.clipboard.writeText(text);

    //  Change icon
    document.getElementById('copyToClipboard').classList.add('hidden');
    document.getElementById('copiedToClipboard').classList.remove('hidden');
}