<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [autopilot][1]
    -   [waypoint][2]
        -   [Parameters][3]
-   [openWindow][4]
    -   [contract][5]
        -   [Parameters][6]
    -   [information][7]
        -   [Parameters][8]
    -   [marketDetails][9]
        -   [Parameters][10]
    -   [newMail][11]
        -   [Parameters][12]
        -   [Examples][13]

## autopilot

### waypoint

Set Autopilot Waypoint.

#### Parameters

-   `destinationID` **[number][14]** The destination. Can be Station, Structure, or System.
-   `addToBeginning` **any** Whether to add the destination to the beginning of the route. Defaults to false. (optional, default `false`)
-   `clearOtherWaypoints` **any** Whether to clear all other waypoints before adding the destination. Defaults to false. (optional, default `false`)

## openWindow

### contract

Open Contract Window.

#### Parameters

-   `contractID` **[number][14]** The contract to open.

### information

Open Information Window

#### Parameters

-   `targetID` **[number][14]** The target to get the information of. Can be a character, corporation or alliance.

### marketDetails

Open Market Details.

#### Parameters

-   `itemID` **[number][14]** The item type to open in market window.

### newMail

Open New Mail Window.

#### Parameters

-   `mail` **[object][15]** The details of mail to create. Example below.

#### Examples

```javascript
{
"body": "string",
"recipients": [
0
],
"subject": "string",
"to_corp_or_alliance_id": 0,
"to_mailing_list_id": 0
}
```

[1]: #autopilot

[2]: #waypoint

[3]: #parameters

[4]: #openwindow

[5]: #contract

[6]: #parameters-1

[7]: #information

[8]: #parameters-2

[9]: #marketdetails

[10]: #parameters-3

[11]: #newmail

[12]: #parameters-4

[13]: #examples

[14]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[15]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object