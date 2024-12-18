# Interaction-with-Fuel-Network-2
In this script, we will connect to the smart contract, call its function, and also display the execution results.


1.Install the fuels library:

npm install fuels

2. The smart contract must already be deployed on the Fuel Network, and you must have its ABI and address.

Description:
Interface: Specifies the ABI of the smart contract used to call its functions.
Contract: Allows you to interact with the Fuel Network smart contract, pass arguments, and retrieve results.
Getter/Setter: The example has get_value and set_value functions that read and modify contract data.
What this code does:
Connects to the Fuel Network via RPC.
Creates an instance of the smart contract.
Calls the get_value function to get the current value.
Calls the set_value function to update the value.
Validates the updated value by calling get_value again.
Note:
Replace privateKey and contractAddress with actual values.
The ABI (contractAbi) must match the interface of your smart contract.

