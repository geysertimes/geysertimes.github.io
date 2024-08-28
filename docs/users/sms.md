---
title: "SMS Interface (Satellite)"
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      position: 'relative',
      padding: '0.2rem 0.4rem',
      borderBottom: `2px solid var(--ifm-color-${color}-dark)`,
    }}>
    {children}
    <span
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderTopLeftRadius: '0.4rem',
        borderTopRightRadius: '0.4rem',
        backgroundColor: `var(--ifm-color-${color}-dark)`,
        opacity: 0.1,
      }}>
    </span>
  </span>
);

# SMS Interface (Satellite)

Historically, access to GeyserTimes' data within Yellowstone National Park has been limited to areas with cell service, and among all the geyser basins, only the Upper Geyser Basin has adequate coverage. Starting fall 2024 this is finally set to change. Apple has announced general availability of satellite SMS messaging beginning in September 2024, and major mobile network operators have inked deals with satellite providers. T-Mobile has partnered with SpaceX's Starlink, with a launch expected later in 2024, and both AT&T and Verizon have invested in AST SpaceMobile, which is yet to deploy its first satellite.

At GeyserTimes, we want to make the most of this unprecedented opportunity by offering a SMS interface. This document outlines supported devices and how to interact with our conversational messaging agent. At this time it is completely separate to our Android and iOS apps, although we will consider various levels of integration in the future based on community feedback.

:::warning

Please note that standard messaging rates apply, so keep this in mind if your plan does not include unlimited texts. GeyserTimes incurs a $0.012 fee per exchange, in addition to a monthly fee of $3.86 for maintaining our phone number. If you are willing and able to assist with expenses, please consider a [donation](http://geysertimes.org/donate.php).

:::

## Supported Devices

There remain lots of unknowns as these are the early days of satellite messaging and it is likely this field will rapidly evolve. The table below is our best effort to summarize the current state. We strive to keep it updated as new information becomes available.

| Device             | Operating System   | Carrier  | Cost          | Notes         |
|:-------------------|:-------------------|:---------|:--------------|:--------------|
| iPhone 14 or later | iOS 18+            | all      | free, for now | announced [1] |
| all                | Likely Android 15+ | T-Mobile | unknown       | announced [2] |

1. https://www.apple.com/newsroom/2024/06/ios-18-makes-iphone-more-personal-capable-and-intelligent-than-ever/
2. https://www.t-mobile.com/news/un-carrier/t-mobile-takes-coverage-above-and-beyond-with-spacex

## Message Format

All conversational messages are processed by an automated system and must thus adhere to a certain format. Each message must begin with a case-insensitive keyword that signifies the action that is executed. We support three different actions at this time:

* The <kbd>next</kbd> keyword [retrieves a prediction](#retrieve-prediction) for a given geyser.
* The <kbd>last</kbd> keyword [retrieves the latest eruption](#retrieve-last-eruption) of a given geyser.
* The <kbd>enter</kbd> keyword allows users to [submit an eruption](#submit-eruption). To properly attribute incoming entries, you'll need to connect your phone number with your GeyserTimes account. This must be done beforehand while cell service is still available.

### Retrieve Prediction

**Example:** next <Highlight color="info">Old Faithful</Highlight>

* <Highlight color="info">Geyser name</Highlight> for which to retrieve prediction. Must exactly match a geyser in the GeyserTimes database, safe for capitalization.

### Retrieve Last Eruption

**Example:** last <Highlight color="info">Old Faithful</Highlight>

* <Highlight color="info">Geyser name</Highlight> for which to retrieve latest eruption. Must exactly match a geyser in the GeyserTimes database, safe for capitalization.

### Submit Eruption

**Example:** enter <Highlight color="info">Old Faithful</Highlight> <Highlight color="warning">2024-08-28 1842:24</Highlight> <Highlight color="success">ns short</Highlight> <Highlight color="danger">d=2m 42s</Highlight> <Highlight color="secondary">(steam obscured part of the eruption, but confident it was a short)</Highlight>

* <Highlight color="info">Geyser name</Highlight> of geyser that erupted. Must exactly match a geyser in the GeyserTimes database, safe for capitalization.
* <Highlight color="warning">Date and time</Highlight> when the geyser erupted. The date part is optional and, when missing, will be assumed to be today in the geyser's timezone. The seconds part, after and including the colon, is optional.
* <Highlight color="success">Time codes</Highlight> that further characterize the observed eruption. A list of valid time codes can be found in the [glossary](/users/glossary#time-code). *Optional.*
* <Highlight color="danger">Duration</Highlight> of the observed eruption. Ideally should be in the format #m#s, but may be any text. Be wary of paired round brackets that may be confused with a comment. *Optional.*
* <Highlight color="secondary">Comment</Highlight> that further describes the observed eruption. Given the SMS limit of 160 characters you'll likely need to keep this short and concise. It must always be enclosed in a pair of round brackets. *Optional.*