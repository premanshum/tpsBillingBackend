The Azure serverless function implementation

There are three steps:
1. Create an Azure function App and add a httpTrigger function in the function app. Name it as AzFuncExp.

2. Copy entire content of index.js file to corresponding index.js file of AzFuncExp function.

3. In Function.json file, change the route to "AzFuncExp/{*segments}". See line#8 in the attached function.json file

4. From the portal, go to Kudu. navigate to the folder... Site >>> wwwroot >>> AzFuncExp
    a. Install all the dependencies, particularly express and azure-function-express using the command npm
    b. npm install express
    c. npm install azure-function-express

5. Open a browser to issue the command: https://premserverlessexpress.azurewebsites.net/api/azfuncexp/work?name=%22Wow!%22

Points to remember:

- if the word, AzFuncExp, is ommitted from function.json, then the URL would look like this:
    https://premserverlessexpress.azurewebsites.net/api/work?name=%22Wow!%22

    i.e. the url got shortened. The code in index.js would not work. The same word has to be removed from index.js as well

    However, this should be avoided. A function app can host many Functions. If the Function name or anykind of identifier
    is not attached to the url, other functions will not execute at all.

    for example: the first and second url will work, as it has been taken care in the index.js code. 
    The third URL will not work, even though there is a dedicated function in the function app.

    https://premserverlessexpress.azurewebsites.net/api/home
    https://premserverlessexpress.azurewebsites.net/api/work?name=prem
    https://premserverlessexpress.azurewebsites.net/api/fileReader?file=singlePayer.json



