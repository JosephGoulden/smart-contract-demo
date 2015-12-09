contract Coin {
	
	mapping (address => uint) balances;

	event Transfer(address from, address to, uint amount);

	function Coin() {
		balances[msg.sender] = 1000000;
	}

	function transfer(address _to, uint amount) {
		if (amount < 0 || balances[msg.sender] < amount) {
			return;
		}
		balances[msg.sender] -= amount;
		balances[_to] += amount;
		Transfer(msg.sender, _to, amount);
	}

	function getBalance(address _of) constant returns (uint balance) {
		return balances[_of];
	}
}