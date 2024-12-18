// Import required classes from the fuels library
const { Wallet, Contract, Interface } = require('fuels');

// Main asynchronous function
async function main() {
    // Specify the Fuel RPC URL and the private key
    const FUEL_RPC_URL = 'https://node-beta-1.fuel.network/graphql';
    const privateKey = '0x...'; // Replace with your private key
    const wallet = Wallet.fromPrivateKey(privateKey, FUEL_RPC_URL);

    // Specify the contract's address and ABI
    const contractAddress = '0x...'; // Replace with your contract's address
    const contractAbi = [
        {
            "type": "function",
            "name": "get_value",
            "inputs": [],
            "outputs": [{ "type": "u64" }]
        },
        {
            "type": "function",
            "name": "set_value",
            "inputs": [{ "name": "new_value", "type": "u64" }],
            "outputs": []
        }
    ];

    // Create a contract instance
    const contractInterface = new Interface(contractAbi);
    const contract = new Contract(contractAddress, contractInterface, wallet);

    try {
        // Call a getter function to retrieve the current value
        const getValueResult = await contract.functions.get_value().call();
        console.log(`Current value: ${getValueResult.value}`);

        // Call a setter function to update the value
        const newValue = 42;
        const setValueResult = await contract.functions.set_value(newValue).call();
        console.log('Value updated successfully.');

        // Verify the new value
        const updatedValue = await contract.functions.get_value().call();
        console.log(`Updated value: ${updatedValue.value}`);
    } catch (error) {
        console.error('Error during contract interaction:', error);
    }
}

// Execute the main function
main().catch((err) => {
    console.error('An error occurred:', err);
});
