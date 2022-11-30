# <font color=Black>SpartanUSD Stablecoin Smart Contract</font>


The SpartanUSD Stablecoin is an ERC20-based Token, issued by the Spartan Network operators officially through the stablecoin contract on Spartan-III Chain (NC PolygonEdge), which is strictly anchored to USDC in a ratio of 1:1. The basic functions in the stablecoin contract are Mint, Transfer, Withdraw and Burn. The circulation of the stablecoin will be strictly controlled within a range not greater than the amount of USDC pledged by the stablecoin users into the USDC wallet on the Polygon mainnet.

<br/>

## <font color=Black><span id="1">Basic Information</span></font>
---


- **SpartanUSD Contract Address:** `0x1fD89dc1f4Ffbb797d471D6BB0dbb8EfEABdbe9c` on the Spartan-III chain

- **USDC Pledge Wallet Address:** `0x764b33c01a611597438f0286e946633685ed3d2f` on Polygon (Matic Network)

- **Maximum Counting Accuracy:** 6 Decimals (0.000001 SUSD)

- **Name:** SpartanUSD 

- **Symbol:** SUSD

- **Transfer Service Fee:** 0.1% of the amount of SUSD transferred

- **Withdraw Service Fee:** 0.003 SUSD

<br/>

## <font color=Black><span id="2">Common Functions</span></font>
---

### <font color=Black><span id="2.1">Mint SpartanUSD</span></font>

By calling the official USDC contract (**contract address: `0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174`** on Polygon (Matic Network), the user uses the transfer() method to transfer USDC equal to the expected issuance amount of SUSD to the account (**account address: `0x764b33c01a611597438f0286e946633685ed3d2f`** on Polygon (Matic Network)).


Spartan obtains transaction information by listening related events, and the SpartanUSD contract will be called to mint the same amount of SUSD to the user account of the Spartan-III chain (Powered by NC PolygonEdge) through the minter account of SpartanUSD. The Spartan-III user account address is the same as the address of the sender account of the USDC transaction on Polygon.

> [!note|style:flat]

> - Please ensure the security of the private key of the Polygon account of the USDC transfer transaction sender, which will also be used as the private key of the Spartan-III wallet receiving SUSD.

### <font color=Black><span id="2.2">Transfer SpartanUSD</span></font>



The user can transfer their SpartanUSD asset to any other Spartan-III wallet by calling the SUSD contract’s transfer() method (**contract address: `0x1fD89dc1f4Ffbb797d471D6BB0dbb8EfEABdbe9c`** on the Spartan-III Chain).

The transfer() method will charge a service fee of 0.1% of the caller's transaction amount, and the service fee will not exceed 10 USD. 

- **Input Parameters:** Receiver Wallet Address (on the Spartan-III chain), Transfer Amount (Please enter a multiple of 10000, 10000 = 0.01SUSD);


> [!note|style:flat]

> - The Transfer Amount needs to be a value which is a multiple of 10000, because SUSD’s accuracy is 6 decimals, so, the value of 10000 is equivalent to 0.01 SUSD.

- **Output Parameters:** A bool parameter shows successful or failed;

- **Method Definition:** transfer (address to, uint256 amount) returns (bool);

- **Event Parameters:** Sender Wallet Address, Receiver Wallet Address, Transfer Amount, Service Fee;

- **Event Definition:** Transfer (msg.sender, to, amount, serviceCharge);

- **Example:**

```groovy
func TestTransfer(t *testing.T) {
	cli, err := ethclient.Dial(NodeUrl)
	if err != nil {
		log.Logger.Error(err)
	}
	instance, err := stablecoin.NewStablecoin(common.HexToAddress(Address), cli)
	if err != nil {
		log.Logger.Error(err)
	}
	auth, err := eth.GenAuth(cli, PrivateKey)
	if err != nil {
		log.Logger.Error(err)
	}
	tx, err := instance.Transfer(auth, common.HexToAddress(to), new(big.Int).SetUint64(amount))
	if err != nil {
		log.Logger.Error(err)
	}
	fmt.Println("tx Hash:", tx.Hash().String())
}
```


### <font color=Black><span id="2.3">Withdraw SpartanUSD</span></font>


The user can withdraw their SpartanUSD asset to USDC which will be transferred to a Polygon (Matic Network) wallet by calling the SUSD contract’s withdraw() method (**contract address: `0x1fD89dc1f4Ffbb797d471D6BB0dbb8EfEABdbe9c`** on the Spartan-III Chain).



The withdraw() method will charge a constant service fee of 0.003 SUSD.

- **Input Parameters:** Receiver Account Address (on Polygon (Matic Network)), Withdraw Amount;

> [!note|style:flat]

> - The SUSD balance of the sender account address needs to be greater than the total price of the transaction (withdraw amount + withdraw service fee).

- **Output Parameters:** None;

- **Method Definition:** withdraw (address payee, uint256 amount);

- **Event Parameter:** Sender Wallet Address, Withdraw Amount, Service Fee, Receiver Wallet Address (on Polygon (Matic Network));

- **Event Definition:** Withdraw (msg.sender, amount, _withdrawFee, payee);

- **Example:**

```groovy
func TestWithdraw(t *testing.T) {
	cli, err := ethclient.Dial(NodeUrl)
	if err != nil {
		log.Logger.Error(err)
	}
	instance, err := stablecoin.NewStablecoin(common.HexToAddress(Address), cli)
	if err != nil {
		log.Logger.Error(err)
	}
	auth, err := eth.GenAuth(cli, PrivateKey)
	if err != nil {
		log.Logger.Error(err)
	}
	tx, err := instance.Withdraw(auth, common.HexToAddress(payee), new(big.Int).SetUint64(amount))
	if err != nil {
		log.Logger.Error(err)
	}
	fmt.Println("tx Hash:", tx.Hash().String())
}
```

### <font color=Black><span id="2.4">Check SpartanUSD Balance</span></font>


Users can check their SpartanUSD balance by calling the SUSD contract’s balanceOf() method.

- **Input Parameters:** Target Account Address (on the Spartan-III chain);

- **Output Parameters:** Balance;

- **Method Definition:** balanceOf (address account) view returns (uint256);

- **Example:**

```groovy
func TestBalanceOf(t *testing.T) {
	cli, err := ethclient.Dial(NodeUrl)
	if err != nil {
		log.Logger.Error(err)
	}
	instance, err := stablecoin.NewStablecoin(common.HexToAddress(Address), cli)
	if err != nil {
		log.Logger.Error(err)
	}
	balance, err := instance.BalanceOf(nil, common.HexToAddress(Address))
	if err != nil {
		log.Logger.Error(err)
	}
	fmt.Println("balance:", balance.String())
}
```

### <font color=Black><span id="2.5">Check the Circulation of SpartanUSD</span></font>


Users can check the total circulation of SpartanUSD by calling the SUSD contract’s totalSupply() method.

After the mint() method, the total circulation will be increased by the amount of mint and after the withdraw() or burn() method, the total circulation will be decreased by the amount of withdraw or burn.

- **Input Parameters:** None;

- **Output Parameters:** The Total Circulation of SUSD;

- **Method Definition:** totalSupply() view returns (uint256);

- **Example:**

```groovy
func TestTotalSupply(t *testing.T) {
	cli, err := ethclient.Dial(NodeUrl)
	if err != nil {
		log.Logger.Error(err)
	}
	instance, err := stablecoin.NewStablecoin(common.HexToAddress(Address), cli)
	if err != nil {
		log.Logger.Error(err)
	}
	totalSupply, err := instance.TotalSupply(nil)
	if err != nil {
		log.Logger.Error(err)
	}
	fmt.Println("totalSupply:", totalSupply.String())
}
```


### <font color=Black><span id="2.6">Check the Maximum Transaction Service Fee</span></font>


Users can check the maximum transaction service fee by calling the SUSD contract’s TestMaximumTransferCharge() method.

The return value is counted in units of 0.000001 SUSD (6 decimals), for example, 1000000 means 1 USUD.


- **Input Parameters:** None;

- **Output Parameters:** The maximum transaction service fee;

- **Method Definition:** maximumTransferCharge() view returns (uint256);

- **Example:**

```groovy
func TestMaximumTransferCharge(t *testing.T) {
	cli, err := ethclient.Dial(NodeUrl)
	if err != nil {
		log.Logger.Error(err)
	}
	instance, err := stablecoin.NewStablecoin(common.HexToAddress(Address), cli)
	if err != nil {
		log.Logger.Error(err)
	}
	maximumTransferCharge, err := instance.MaximumTransferCharge(nil)
	if err != nil {
		log.Logger.Error(err)
	}
	fmt.Println("maximumTransferCharge:", maximumTransferCharge.String())
}
```

### <font color=Black><span id="2.7">Check the Transaction Service Fee Ratio</span></font>


Users can check the transaction service fee ratio by calling the SUSD contract’s getTransferRatio() method.

The return value is counted in units of 0.0001 (4 decimals), for example, 10 means 0.001 (0.1%).

- **Input Parameters:** None;

- **Output Parameters:** the transaction service fee ratio (counted in units of 0.0001);

- **Method Definition:** getTransferRatio() view returns (uint256);

- **Example:**

```groovy
func TestGetTransferRatio(t *testing.T) {
	cli, err := ethclient.Dial(NodeUrl)
	if err != nil {
		log.Logger.Error(err)
	}
	instance, err := stablecoin.NewStablecoin(common.HexToAddress(Address), cli)
	if err != nil {
		log.Logger.Error(err)
	}
	transferRatio, err := instance.GetTransferRatio(nil)
	if err != nil {
		log.Logger.Error(err)
	}
	fmt.Println("transferRatio:", transferRatio.String())
}
```

### <font color=Black><span id="2.8">Check the Maximum Amount of SUSD for Transfer</span></font>


Users can check the maximum amount of SUSD for transfer and the service fee for running a transfer of your input amount SUSD by calling the SUSD contract’s queryTransferLimit() method.


- **Input Parameters:** SUSD Amount of a transfer;

- **Output Parameters:** Service Fee, the Maximum Amount of SUSD;

- **Method Definition:** queryTransferLimit (uint256 amount) view returns (uint256 serviceCharge, uint256 maxTransferAmount);

- **Example:**

```groovy
func TestQueryTransferLimit(t *testing.T) {
	cli, err := ethclient.Dial(NodeUrl)
	if err != nil {
		log.Logger.Error(err)
	}
	instance, err := stablecoin.NewStablecoin(common.HexToAddress(Address), cli)
	if err != nil {
		log.Logger.Error(err)
	}
	outstruct, err := instance.QueryTransferLimit(nil, new(big.Int).SetUint64(amount))
	if err != nil {
		log.Logger.Error(err)
	}
	fmt.Println("ServiceCharge:", outstruct.ServiceCharge.String())
	fmt.Println("MaxTransferAmount:", outstruct.MaxTransferAmount.String())
}
```

### <font color=Black><span id="2.9">Check the Maximum Amount of SUSD for Withdraw</span></font>


Users can check the maximum amount of SUSD for withdraw and the service fee for running a withdraw method by calling the SUSD contract’s queryWithdrawLimit() method.

- **Input Parameters:** None;

- **Output Parameters:** Service Fee, the Maximum Amount of SUSD for withdraw;

- **Method Definition:** queryWithdrawLimit() view returns (uint256 withdrawFee, uint256 maxWithdrawAmount);

- **Example:**

```groovy
func TestQueryWithdrawLimit(t *testing.T) {
	cli, err := ethclient.Dial(NodeUrl)
	if err != nil {
		log.Logger.Error(err)
	}
	instance, err := stablecoin.NewStablecoin(common.HexToAddress(Address), cli)
	if err != nil {
		log.Logger.Error(err)
	}
	outstruct, err := instance.QueryWithdrawLimit(nil)
	if err != nil {
		log.Logger.Error(err)
	}
	fmt.Println("WithdrawFee:", outstruct.WithdrawFee.String())
	fmt.Println("MaxWithdrawAmount:", outstruct.MaxWithdrawAmount.String())
}
```


<br/>
<br/>
<br/>