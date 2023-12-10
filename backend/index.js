const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const axios = require('axios');

// Specify the path to your JSON file
const filePath = './questions_2.json';

// Read the JSON file synchronously
const data = fs.readFileSync(filePath, 'utf8');

// Parse the JSON data
const surveys = JSON.parse(data);
console.log(surveys)
const app = express();
const port = 3000;

app.use(bodyParser.json());

async function validateTransactions(account_id) {
  try {
    const response = await axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${account_id}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${process.env.ETHERSCAN_KEY}`);
    return response.data
  } catch (error) {
    console.error(error);
  }
}


async function validateAnswer(userValue, questionId){

	if(questionId == 1 ){
		if (!['a', 'b', 'c', 'd', 'e', 'f'].includes(userValue)) {
		    return false
		} else {
		    return true
		}
	}else if (questionId == 2 ){
		if (!['a', 'b', 'c', 'd'].includes(userValue)) {
		    return false
		} else {
		    return true
		}
	}
	else if (questionId == 3 ){
		const validPlatforms = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
		if (!userValue.each(platform => validPlatforms.includes(platform))) {
		    return false
		} else {
		    return true
		}
	}
	else if (questionId == 4 ){
		if (!['a', 'b', 'c', 'd', 'e'].includes(userValue)) {
		    return false
		} else {
		    return true
		}
	}
	else if (questionId == 5 ){
		if (!['a', 'b', 'c', 'd'].includes(userValue)) {
		    return false
		} else {
		    return true
		}
	}
	else if (questionId == 6 ){
		const validChallenges = ['a', 'b', 'c', 'd', 'e', 'f'];
		if (!userValue.each(challenge => validChallenges.includes(challenge))) {
		    return false
		} else {
		    return true
		}
	}
	else if (questionId == 7 ){
		const validRanking = ['1', '2', '3', '4', '5', '6'];
		if (!userValue.each(rank => validRanking.includes(rank))) {
		    return false
		} else {
		    return true
		}
	}
	else if (questionId == 8 ){
		if (!['a', 'b', 'c', 'd', 'e'].includes(userValue)) {
		    return false		
		} else {
		    return true
		}
	}
	else if (questionId == 9 ){
		if (userValue.trim() === '') {
		    return false
		} else {
		    return true
		}
	}
	else if (questionId == 10 ){
		const validCryptos = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		if (!userValue.each(crypto => validCryptos.includes(crypto))) {
		    return false
		} else {
		    return true
		}
	}
	else if (questionId == 11 ){
		if (userValue.trim() === '') {
		    return false
		} else {
		    return true
		}
	}
	else if (questionId == 12 ){
		if (isNaN(userValue) || userValue < 0 || userValue > 100) {
		    return false
		} else {
		    return true
		}
	}
	else if (questionId == 13 ){
		if (!['a', 'b', 'c', 'd'].includes(userValue)) {
		    return false
		} else {
		    return true
		}
	}
	else if (questionId == 14 ){
		const validChallenges = ['a', 'b', 'c', 'd', 'e'];
		if (!userValue.each(challenge => validChallenges.includes(challenge))) {
		    return false
		} else {
		    return true
		}
	}
	else if (questionId == 15 ){
		if (userValue.trim() === '') {
		    return false
		    } else {
		    return true
		}
	}
	else if (questionId == 16 ){
		if (!['a', 'b', 'c', 'd', 'e'].includes(userValue)) {
		    return false
		} else {
		    return true
		}
	}
	else if (questionId == 17 ){
		if (!['a', 'b'].includes(userValue)) {
		    return false
		} else {
		    return true
		}
	}
	else if (questionId == 18 ){
		if (userValue.trim() === '') {
		    return false
		    } else {
		    return true
		}
	}
	else if (questionId == 19 ){
		if (!['a', 'b', 'c', 'd', 'e'].includes(userValue)) {
		    return false
		} else {
		    return true
		}
	}else if (questionId == 20 ){
		if (userValue.trim() === '') {
		    return false
		} else {
		    return true
		}
	}else{
		return 'Invalid request'
	}


}


// Function to find a question by set and question ID
async function findQuestion(setId, questionId) {
  const set = surveys.find((survey) => survey.set === setId);

  if (set) {
    const question = set.questions.find((q) => q.id === questionId);
    return question || null;
  }

  return null;
}

app.get('/health', async (req, res) => {

    res.status(200).json({
      success: true,
      message: 'ok'
    });
});

app.post('/recentTransactions', async (req, res) => {
  const { account_id } = req.body;
  try {
  	console.log(account_id)
    transactions = await validateTransactions(account_id)
    console.log(transactions)
    if(transactions.status==1){
    	res.status(200).json({
	      success: true,
	      message: `Transactions found`
	    });
    	
    }else{
    res.status(200).json({
      success: true,
      message: 'No transaction found'
    });
    }
    
  } catch (error) {
    console.error('Error while calling api:', error);
    res.status(401).json({
      success: false,
      message: 'Error while calling api',
      error: error.message,
    });
  }
});

app.post('/validate_question', async (req, res) => {
  const { setId, questionId, answer } = req.body;
  try {
    question_object = await findQuestion(setId, questionId)
    if(question_object!=null){
    	response = await validateAnswer(answer, questionId)
    	res.status(200).json({
	      success: true,
	      message: 'Success',
	      data: response
	    });
    }else{
    res.status(400).json({
      success: false,
      message: 'Invalid request'
    });
    }
    
  } catch (error) {
    console.error('Error during login:', error);
    res.status(401).json({
      success: false,
      message: 'Authentication failed',
      error: error.message,
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
