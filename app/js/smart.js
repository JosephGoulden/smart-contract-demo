$(document).ready(function() {

	$('#account').text('Your account: ' + web3.eth.defaultAccount);
	
	function updateBalance() {
		$('#balance').text('Balance: £' + Coin.getBalance(web3.eth.defaultAccount));
	}

	Coin.Transfer({ 'fromBlock': 0 }, function(error, event) {
		updateBalance();
		$('#transactions tbody').append('<tr>\
				<td>' + event.args.from + '</td>\
				<td>' + event.args.to + '</td>\
				<td>' + event.args.amount + '</td>\
			</tr>')
	});

	$('#send').click(function() {
		Coin.transfer($('#transferTo').val(), $('#transferAmount').val());
	});

	updateBalance();
});