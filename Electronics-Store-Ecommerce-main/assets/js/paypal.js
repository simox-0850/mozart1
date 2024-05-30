<script src="https://www.paypal.com/sdk/js?client-id=Acal0BCXZI-YW93s9SxhTUfFuIbEMcVAShuoFwYf_v7TgFHVJ5vGE9Jem9NkwEMxrRNSmrZ8XDi6jgoQ&currency=USD"></script>




// Render the PayPal button into #paypal-button-container
paypal.Buttons({
    // Set up the transaction
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '10.00' // Replace with the amount to be charged
                }
            }]
        });
    },
    // Finalize the transaction
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
            // You can redirect to a thank-you page or display a success message here
        });
    },
    // Handle errors
    onError: function(err) {
        console.error('An error occurred:', err);
        alert('An error occurred during the transaction. Please try again.');
    }
}).render('#paypal-button-container');
