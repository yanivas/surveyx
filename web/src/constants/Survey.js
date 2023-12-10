
const abi =  [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "closeSurvey",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_surveyID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_totalPool",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_responsesNeeded",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_expiry",
				"type": "uint256"
			}
		],
		"name": "createSurvey",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_timeStamp",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_validity",
				"type": "bool"
			}
		],
		"name": "fillSurvey",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "surveyID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalAmount",
				"type": "uint256"
			}
		],
		"name": "SurveyCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "participant",
				"type": "address"
			}
		],
		"name": "SurveyFilled",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getSurvey",
		"outputs": [
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "surveyID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalPool",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "responsesNeeded",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "responsesCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "poolRemaining",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			},
			{
				"components": [
					{
						"internalType": "address",
						"name": "responder",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "validity",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "timeStamp",
						"type": "uint256"
					}
				],
				"internalType": "struct SurveyContract.Response[]",
				"name": "response",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "surveyCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "surveys",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "totalPool",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "poolRemaining",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "responsesNeeded",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "responseCount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "surveyExpiry",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export default abi;