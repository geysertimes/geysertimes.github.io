---
title: "SMS Interface (Satellite)"
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      padding: '0.2rem 0.4rem',
      backgroundColor: `${color}1a`,
      borderTopLeftRadius: '0.4rem',
      borderTopRightRadius: '0.4rem',
      borderBottom: `2px solid ${color}`,
    }}>
    {children}
  </span>
);

# SMS Interface (Satellite)

:::danger

This interface is considered experimental. Keywords and syntax are subject to change until this notice is removed.

:::

Historically, access to GeyserTimes' data within Yellowstone National Park has been limited to areas with cell service, and among all geyser basins, only the Upper Geyser Basin has adequate coverage. Starting fall 2024 this is finally set to change. Apple has announced general availability of satellite SMS messaging beginning in September 2024, and major mobile network operators have inked deals with satellite providers. T-Mobile has partnered with SpaceX's Starlink, with a launch expected later in 2024, and both AT&T and Verizon have invested in AST SpaceMobile, which is set to deploy its first satellite soon.

At GeyserTimes, we want to make the most of this unprecedented opportunity by offering a SMS interface. This document outlines supported devices and how to interact with our conversational messaging agent. At this time it is completely separate to our Android and iOS apps, although we will consider various levels of integration in the future based on community feedback.

:::warning

Please note that standard messaging rates apply, so keep this in mind if your plan does not include unlimited texts. GeyserTimes incurs a $0.012 fee per exchange, in addition to a monthly fee of $3.86 for maintaining our phone number. If you are willing and able to assist with expenses, please consider a [donation](http://geysertimes.org/donate.php).

:::

## Supported Devices

Only a small number of consumer smartphones support non-SOS satellite messaging out of the box, although that list is expected to grow. If you don't mind purchasing an extra device, dedicated satellite messengers such as a Garmin inReach or ZOLEO have been around for years and remain an option. The table below is our best effort to summarize the current state and we aim to keep it updated as new information becomes available. If you are looking for specific recommendations, you may [contact us](mailto:support@geysertimes.org).

| Device             | Operating System   | Carrier  | Cost                                                               | Status               |
|:-------------------|:-------------------|:---------|:-------------------------------------------------------------------|:---------------------|
| Garmin inReach     | &ndash;            | &ndash;  | [see plans](https://www.garmin.com/en-US/p/837461/pn/010-06002-SU) | 🟨 partial support[^1] |
| ZOLEO              | &ndash;            | &ndash;  | [see plans](https://www.zoleo.com/en-us/plans)                     | 🟨 unknown           |
| iPhone 14 or later | iOS 18+            | all      | free, for now                                                      | 🟩 full support      |
| Most Android       | Likely Android 15+ | T-Mobile | unknown                                                            | ETA 2024 [1]         |

[^1]: Does not support submitting as Garmin inReach devices do not have fixed phone numbers. To retrieve information, you'll need to [disable SMS signatures](https://support.garmin.com/en-US/?faq=9Hy94BRi3dALwQ1kofKRO7&productID=765374&tab=topics) in your Garmin Explore account settings.

1. https://www.t-mobile.com/news/un-carrier/t-mobile-takes-coverage-above-and-beyond-with-spacex

## Message Format

All conversational messages are processed by an automated system and must thus adhere to a certain format. Each message must begin with a case-insensitive keyword that signifies the action that is executed. We support three different actions:

* The <kbd>next</kbd> keyword [retrieves a prediction](#retrieve-prediction) for a given geyser.
* The <kbd>last</kbd> keyword [retrieves the latest eruption](#retrieve-last-eruption) of a given geyser.
* The <kbd>enter</kbd> keyword allows users to [submit an eruption](#submit-eruption). To properly attribute incoming entries, you'll need to [connect your phone number](/users/account#connect-a-phone-number) with your GeyserTimes account. This must be done beforehand while cell service is still available.

### Retrieve Prediction

**Example:** next <Highlight color="#4cb3d4">Old Faithful</Highlight>

* <Highlight color="#4cb3d4">Geyser name</Highlight> for which to retrieve prediction. Must exactly match a geyser in the GeyserTimes database, safe for capitalization.

### Retrieve Last Eruption

**Example:** last <Highlight color="#4cb3d4">Old Faithful</Highlight>

* <Highlight color="#4cb3d4">Geyser name</Highlight> for which to retrieve latest eruption. Must exactly match a geyser in the GeyserTimes database, safe for capitalization.

### Submit Eruption

**Example:** enter <Highlight color="#4cb3d4">Old Faithful</Highlight> <Highlight color="#e6a700">2024-08-28 1842:24</Highlight> <Highlight color="#009400">ns short</Highlight> <Highlight color="#e13238">d=2m 42s</Highlight> <Highlight color="#d4d5d8">(steam obscured part of the eruption, but confident it was a short)</Highlight>

* <Highlight color="#4cb3d4">Geyser name</Highlight> of geyser that erupted. Must exactly match a geyser in the GeyserTimes database, safe for capitalization.
* <Highlight color="#e6a700">Date and time</Highlight> when the geyser erupted. The date part is optional and, when missing, will be assumed to be today in the geyser's timezone. The seconds part, after and including the colon, is optional.
* <Highlight color="#009400">Time codes</Highlight> that further characterize the observed eruption. A list of valid time codes can be found in the [glossary](/users/glossary#time-code). *Optional.*
* <Highlight color="#e13238">Duration</Highlight> of the observed eruption. Ideally should be in the format #m#s, but may be any text. Be wary of paired round brackets that may be confused with a comment. *Optional.*
* <Highlight color="#d4d5d8">Comment</Highlight> that further describes the observed eruption. Given the SMS limit of 160 characters you'll likely need to keep this short and concise. It must always be enclosed in a pair of round brackets. *Optional.*

## Limitations

* Submissions made via SMS are completely independent of entries made on the Android or iOS apps. If you submit via both you will find that you'll have posted two separate entries for the same eruption. They will, however, be processed by the primary-secondary system and hence this should have limited impact in practice.
* Submitted eruptions do not support Grand codes. This is a deliberate decision as the added complexity was not considered worth the effort given that Grand is located in an area of good cell service.
* Submitted eruptions do not initially support observers. This is to reduce character count and simplify syntax requirements, given its limited practical value. If you think we should reconsider this, please reach out.
