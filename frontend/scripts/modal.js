function toggleModal(id) {
    document.getElementById(id).classList.toggle('hidden');
    document.getElementById(id + '-backdrop').classList.toggle('hidden');
    document.getElementById(id).classList.toggle('flex');
    document.getElementById(id + '-backdrop').classList.toggle('flex');
    document.getElementById(id + '-backdrop').classList.toggle('bg-opacity-0');
    document.getElementById(id + '-backdrop').classList.toggle('bg-opacity-25');
}

function toggleMobile(id) {
    document.getElementById(id).classList.toggle('hidden');
    document.getElementById(id + '-backdrop').classList.toggle('hidden');
}