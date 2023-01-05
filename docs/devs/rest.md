---
title: "REST API"
---

# REST API V5 Documentation

The GeyserTimes.org API gives your application access to the most comprehensive geyser eruption database on the internet. The API generally follows RESTful principles. Responses are returned in JSON format. 

:::caution

Expect documentation to be a work in progress. If you have specific requests regarding this API contact [support@geysertimes.org](mailto:support@geysertimes.org).

:::

## API Usage Policy

GeyserTimes’s servers are run on donated resources. They have strictly limited capacity. Heavy use of the GeyserTimes API may adversely affect other's ability to interact with the database and is an abuse of the individual donations and sponsorship which provide hardware and bandwidth.

GeyserTimes data are free for everyone to use. Our data servers are not.

Clients may be blocked without notice if they are affecting the service level for others or causing data corruption. We will try to contact relevant parties if possible, but cannot guarantee this.

Requirements:

* Heavy use is forbidden without prior permission from the System Administrators. Polling the same URL more than once per minute is considered abusive--please be gentle.
* Clearly display license attribution.
* Do not actively or passively encourage copyright infringement.

## Requests

### Geysers

```
GET https://www.geysertimes.org/api/v5/geysers
``` 

**Response**

JSON is returned in the form

```json
{ "status": "success", "geysers": [{"id": "2", "name": "Old Faithful", "groupName": "Common UGB Geysers"}, {...}] }
``` 

### Entries

```
GET https://www.geysertimes.org/api/v5/entries/{entryIDs} *
``` 

Retrieve one or more entries by ID

```
GET https://www.geysertimes.org/api/v5/entries/fromEpoch/toEpoch[/{geyserIDs}] *
```

Retrieve all entries with eruptions between datetimes

```
GET https://www.geysertimes.org/api/v5/entries_latest[/{geyserIDs}] *
```

Retrieve the most recent eruption for each geyser

```
GET https://www.geysertimes.org/api/v5/entries_recent[/minutes] *
```

Retrieve the entries most recently entered

**Response**

JSON is returned in the form

```json
{ "status": "success", "entries": [{}, {}] }
```

Variable definitions:

| Name | Definition |
| --- | --- |
| ```exact``` | the eruption time is exact |
| ```ns``` | the eruption time is near start |
| ```ie``` | the geyser was observed in eruption at this time |
| ```e``` | the eruption time is from an electronic data logger |
| ```a``` | the eruption time is approximate |
| ```wc``` | the eruption was observed via a webcam |
| ```q``` | questionable, typically that the user thinks they saw the geyser erupt |
| ```ini``` | the eruption was an initial eruption in a series |
| ```maj``` | the eruption was a major eruption |
| ```min``` | the eruption was a minor eruption |
| ```duration``` | Free-form duration of the eruption as entered by the entrant |
| ```entrant``` | The GeyserTimes username of the entrant |
| ```entrantID``` | The entrant's ID number
| ```observer``` | The observer of the eruption, possibly different than the entrant |
| ```comment``` | The entrant's comments about the eruption |
| ```timeUpdated``` | The time the entry was updated |
| ```timeEntered``` | The time the entry was entered into the device/website/etc. |

### Predictions

```
GET https://www.geysertimes.org/api/v5/predictions_latest[/{geyserIDs}][?userID=XX] *
```

**Response**

JSON is returned in the form

```json
{ "status": "success", "predictions": [{}, {}] }
```

Variable definitions:

| Name | Definition |
| --- | --- |
| ```geyserID``` | the GeyserTimes.org internal ID # for the geyser |
| ```geyserName``` | the name of the geyser |
| ```userID``` | the GeyserTimes.org internal Id # for the user making the prediction |
| ```userName``` | the predictor's username |
| ```prediction``` | the datetime center of the prediction window |
| ```windowOpen``` | the datetime start of the prediction window |
| ```windowClose``` | the datetime close of the prediction window |
| ```expiration``` | the datetime expiration of the prediction |
| ```comment``` | comments about the prediction |
| ```method``` | a description of the method used to make the prediction |
| ```timestamp``` | the datetime of the prediction |
| ```eruptionForecastNumber``` | represents the next eruption (1) or an upcoming eruption (2,3,etc) in the future |
| ```probability``` | the prediction model's probability of being true, 0.0% is default |
| ```lastReportTime``` | the most recent eruption time for the geyser known at time of prediction |
| ```intervalNumber``` | if the last eruption time is known: 1. If the most recent eruption time is assumed, the prediction is based on a double interval: 2. Some predictors may choose to predict based on a triple interval or more with wider prediction windows. |

### Users

```
GET https://www.geysertimes.org/api/v5/users
```

**Response**

JSON is returned in the form

```json
{ "status": "success", "users": [{}, {}] }
```

Variable definitions:

| Name | Definition |
| --- | --- |
| ```userID``` | GeyserTimes.org interal ID number |
| ```username``` | Username/handle on GeyserTimes.org |
| ```fullName``` | User's real name |
| ```dateRegistered``` | Datetime the user registered with GeyserTimes.org |

### POST Requests

Not yet available. Your application will need to be registered and will receive an API key.

### Notes

Variables in the URL between {} can be vectorized with ";"

Variables in the URL displayed between [] are optional

GeyserIDs can be either GT.org's numeric ID or string names of the geyser

URLs marked with * are CORS enabled for your slick JavaScript/AJAX apps.

### Additional Parameters

By default, all datetime values are Unix epoch time. Adding a truthy `GET` paramater `iso` (`?iso=1` or `?iso=true`) to the end of the URL will return datetimes in ISO 8601 format.

Add a truth `GET` parameter `primary` to limit eruptions to only those identified as "primary."

### Examples
Entries for the last 15 minutes

```
https://www.geysertimes.org/api/v5/entries_recent/15
https://www.geysertimes.org/api/v5/entries_recent/15?ISO=1
```

List of all geysers and their ID#'s

```
https://www.geysertimes.org/api/v5/geysers
```

Latest entry for Old Faithful Geyser

```
https://www.geysertimes.org/api/v5/entries_latest/2
https://www.geysertimes.org/api/v5/entries_latest/old+faithful
```

Latest entry for Old Faithful, Daisy, Castle, Riverside, and Grand Geysers

```
https://www.geysertimes.org/api/v5/entries_latest/2;4;5;7;13
https://www.geysertimes.org/api/v5/entries_latest/old+faithful;daisy;castle;riverside;grand
```

All entries for eruptions between Jan 1, 2014 00:00 MST and Jan 5, 2014 00:00 MST

```
https://www.geysertimes.org/api/v5/entries/1388559600/1388905200
```

All entries for Beehive (ID #1) and Old Faithful Geysers (ID #2) between Jan 1, 2014 00:00 MST and Jan 5, 2014 00:00 MST

```
https://www.geysertimes.org/api/v5/entries/1388559600/1388905200/1;2
https://www.geysertimes.org/api/v5/entries/1388559600/1388905200/old+faithful;beehive
```