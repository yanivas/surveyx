// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SurveyContract {
    address public owner;
    uint public surveyCount = 0;

    struct Response{
        address responder;
        bool validity;
        uint timeStamp;
    }

    struct Survey {
        uint id;
        address creator;
        uint totalPool; // Total amount in Ether for the survey
        uint price;
        uint poolRemaining;
        uint responsesNeeded;
        uint responseCount;
        mapping(address => bool) participants;
        bool status;
        uint surveyExpiry;
        Response[] responses;
    }

    mapping(uint => Survey) public surveys;

    event SurveyCreated(uint id, address creator, uint surveyID, uint totalAmount);
    event SurveyFilled(uint id, address participant);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    modifier surveyExists(uint _id) {
        require(_id > 0, "Survey does not exist");
        _;
    }


    constructor() {
        owner = msg.sender;
    }

    function createSurvey(uint _surveyID, uint _totalPool, uint _responsesNeeded, uint _expiry) external onlyOwner payable {
        require(msg.value >= _totalPool, "Amount sent should be equal to totalPool amount");

        surveyCount++;
        Survey storage newSurvey = surveys[_surveyID];
        newSurvey.id = _surveyID;
        newSurvey.creator = msg.sender;
        newSurvey.totalPool = msg.value;
        newSurvey.responsesNeeded = _responsesNeeded;
        newSurvey.responseCount = 0;
        newSurvey.poolRemaining = _totalPool;
        newSurvey.price = msg.value / _responsesNeeded;
        newSurvey.surveyExpiry = block.timestamp + _expiry;
        newSurvey.status = true;

        emit SurveyCreated(surveyCount, msg.sender, _surveyID, msg.value);
    }


    function fillSurvey(uint _id, uint _timeStamp, bool _validity) external surveyExists(_id) {
        require(surveys[_id].surveyExpiry > block.timestamp, "Survey has expired");
            if (block.timestamp >= surveys[_id].surveyExpiry) {
                surveys[_id].status = false; 
                emit SurveyFilled(_id, msg.sender);
                return;
        }
        require(surveys[_id].status == true, "Survey is closed");
        require(!surveys[_id].participants[msg.sender], "You have already filled out this survey");
        require(surveys[_id].responsesNeeded >= surveys[_id].responseCount, "Survey is completed");
        
        surveys[_id].participants[msg.sender] = true;
        surveys[_id].responseCount++;
        surveys[_id].poolRemaining = surveys[_id].poolRemaining - surveys[_id].price;
        payable(msg.sender).transfer(surveys[_id].price);

        Response memory newResponse = Response({
            responder: msg.sender,
            validity: _validity,
            timeStamp: _timeStamp
        });
        surveys[_id].responses.push(newResponse);
        
        emit SurveyFilled(_id, msg.sender);
    }

    function getSurvey(uint _id) external view surveyExists(_id) returns (address creator, uint surveyID, uint totalPool, uint responsesNeeded, uint price, uint responsesCount, uint poolRemaining, bool status, Response[] memory response) {
        Survey storage survey = surveys[_id];
        return (survey.creator, survey.id, survey.totalPool, survey.responsesNeeded, survey.price, survey.responseCount, survey.poolRemaining, survey.status, survey.responses);
    }

    function closeSurvey(uint _id) external surveyExists(_id) {
        require(surveys[_id].creator == msg.sender || owner ==msg.sender, "Only owner and creator of survey can call this function");
        surveys[_id].status = false;
    }

}