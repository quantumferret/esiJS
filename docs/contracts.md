<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [bids][1]
    -   [Parameters][2]
-   [contracts][3]
    -   [Parameters][4]
-   [items][5]
    -   [Parameters][6]
-   [getSettings][7]
-   [setSettings][8]
    -   [Parameters][9]
-   [sleep][10]
    -   [Parameters][11]

## bids

Lists bids on a public auction contract.

### Parameters

-   `contractID`  {number} The auction contract to get the bids of.
-   `pageNumber`   (optional, default `1`)
-   `pageNum`  {number} The page of bids to get. Defaults to `1`.

Returns **[object][12]** The bids on the auction.

## contracts

Returns a paginated list of all public contracts in the given region.

### Parameters

-   `regionID`  {number} The region to get the contracts from.
-   `pageNumber`   (optional, default `1`)
-   `pageNum`  {number} The page of contracts to get. Defaults to `1`.

Returns **[object][12]** A paginated list of all public contracts in the given region.

## items

Lists items of a public contract.

### Parameters

-   `contractID`  {number} The contract to get items from.
-   `pageNumber`   (optional, default `1`)
-   `pageNum`  {number} The page of contracts to get. Defaults to `1`.

Returns **\[[number][13]]** A array of items.

## getSettings

Gets the settings for esiJS.

Returns **[JSON][14]** A JSON object with the settings.

## setSettings

Sets the settings for esiJS.

### Parameters

-   `$0` **[Object][12]** 
    -   `$0.route`  
    -   `$0.authToken`  
    -   `$0.language`  
    -   `$0.programName`  
-   `route` **[string][15]** Any of the valid routes through ESI.
-   `authToken` **[string][15]** A valid auth token.
-   `language` **[string][15]** A valid language code.
-   `programName` **[string][15]** The name of your project, used by esiJS to pass in as a header.

Returns **[Boolean][16]** True if it was able to sucessfully write. Otherwise, a error.

## sleep

Pause execution of code for a specified amount of time.

### Parameters

-   `millis` **[number][13]** The time to delay (in milliseconds)

Returns **[Promise][17]&lt;[function][18]>** 

[1]: #bids

[2]: #parameters

[3]: #contracts

[4]: #parameters-1

[5]: #items

[6]: #parameters-2

[7]: #getsettings

[8]: #setsettings

[9]: #parameters-3

[10]: #sleep

[11]: #parameters-4

[12]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[13]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[14]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON

[15]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[16]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[17]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise

[18]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function