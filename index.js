document.getElementById('transferForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const sender = document.getElementById('sender').value;
    const receiver = document.getElementById('receiver').value;
    const amount = document.getElementById('amount').value;

    if (sender && receiver && amount) {
        document.getElementById('result').innerHTML = `
            <p>Transfer Successful!</p>
            <p><strong>Sender:</strong> ${sender}</p>
            <p><strong>Receiver:</strong> ${receiver}</p>
            <p><strong>Amount:</strong> $${amount}</p>
        `;
    } else {
        document.getElementById('result').innerHTML = `
            <p>Please fill out all fields.</p>
        `;
    }
});

document.getElementById('updateButton').addEventListener('click', function() {
    document.getElementById('result').innerHTML = '<p>Update button clicked.</p>';
});

document.getElementById('deleteButton').addEventListener('click', function() {
    document.getElementById('result').innerHTML = '<p>Delete button clicked.</p>';
});

document.getElementById('rejectButton').addEventListener('click', function() {
    document.getElementById('result').innerHTML = '<p>Reject button clicked.</p>';
});
