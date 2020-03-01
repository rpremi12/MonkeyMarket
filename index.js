


/*
* () ->  {Object}
* Takes user input and looks up stock data
*/
function getPrice()
{
	//Parse User Input and Get Company's Ticker
	var stockTicker = document.getElementById("company").value.trim().toUpperCase();
	//Get the raw Monthly Stock Data for that company
	var stockData = getStockData(stockTicker);
	//Format it for our return Object
	var numericJSONvals = getRequiredValues(stockData);
	//format it as an object to be referenced
	var returnObj = 
	{
		company: stockTicker,
		prevPrice: numericJSONvals[0],
		currPrice: numericJSONvals[1],
		diffence: numericJSONvals[2]

	};

   	return returnObj;
}

/*
* String ->  {JSON}
* Takes String and converts it to a JSON containing data for the stock
*/
function getStockData(stockTicker)
{
	var xmlHttp = new XMLHttpRequest({mozSystem: true});
	xmlHttp.open( "GET","https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol="+stockTicker+"&apikey=YW2GNEN1DGRZ73VK",false);
	xmlHttp.send(null);
	const parsed = JSON.parse(xmlHttp.responseText);

	return parsed;
}

/*
* {JSON} -> List
* Processes a JSON and converts it to a list with the important stock info
*/
function getRequiredValues(stockData)
{

	//Exception handler 
	if(stockData["Monthly Adjusted Time Series"] == undefined || stockData["Meta Data"] == undefined){
		throw "Stock Data unsucessfully retrieved"
	}

	//collect the Current Stock price's Date and its price 1 year ago
	var currDate = stockData["Meta Data"]["3. Last Refreshed"].trim();
	var arrDate = currDate.split("-");
	arrDate[0] = parseInt(Number(arrDate[0]) -1);
	var prevDate = arrDate.join("-");

	// Gather Output Stocks and Difference
    const currStock = stockData["Monthly Adjusted Time Series"][currDate]["5. adjusted close"];
    const prevStock = stockData["Monthly Adjusted Time Series"][prevDate]["5. adjusted close"];
    const diffStock = Number(currStock) - Number(prevStock);
    const resultList = [prevStock, currStock, diffStock];

	return resultList;

}