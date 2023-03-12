---
title: "Charts & Statistics"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Analyze geyser behavior with charts and statistics

## Analyze geyser behavior using interval and duration statistics and charts
<Tabs groupId="os">
<TabItem value="web" label="Website">

* Visit [GeyserTimes](https://geysertimes.org) with your browser.
* In the top toolbar, click **[Analysis](https://geysertimes.org/analysis.php)**.
* Click the **down arrow 🔻** and select the geyser for which you want to see the interval statistics.
* Click the text fields **From** and **To** and select the time range of eruptions to be included in the analysis.
* Click **Go**.

:::tip

You can force a maximum interval for your analysis. 

:::

</TabItem>
<TabItem value="android" label="Android">

* Open the GeyserTimes app.
* Tap the geyser for which you want to see the interval and duration statistics and charts. 
* In the tabs, tap **Statistics**.

:::tip

You can customize the minimum and maximum interval for eruptions included in the analysis. 

:::

</TabItem>
<TabItem value="iOS" label="iOS">

* Open the GeyserTimes app.
* Tap the geyser for which you want to see the interval and duration statistics and charts. 
* In the tabs, tap **Statistics**.

:::tip

You can customize the minimum and maximum interval for eruptions included in the analysis. 

:::

</TabItem>
</Tabs>

## Retrieve database content for statistical analysis

Probably the easiest way to retrieve eruptions is by using the **Retrieve** page. This page will allow you to retrieve up to 5,000 eruptions of one or more geysers:

* Visit [GeyserTimes](https://geysertimes.org) with your browser.
* In the top toolbar, click **[Retrieve](https://geysertimes.org/retrieve.php)**.
* Click the **Geysers** text field and select the geysers for which you want to retrieve eruption data.
* Click the text fields **Date Start** and **Date End** and select the time range of eruptions to be retrieved.
* Click **Search**.

The following advanced options are also provided: 
* retrieve only electronic or non-electronic eruptions,
* retrieve primary entries only, 
* retrieve in-basin or webcam observations only,
* include or exclude the eruption ID, entrant, observer, duration, or comments fields, 
* retrieve times in the geyser's local time zone, in UTC, or both, and, 
* display the dataset in the browser or download the dataset as a CSV file.

:::note

Currently, the **Retrieve** page can only search for eruption entries. Notes must be downloaded via the **Archive** (see below) and searched by other means.

:::

For research purposes, it is recommended to use the nightly updated **[Archive](https://geysertimes.org/archive)**. There, you can download a zipped .tsv file for all eruptions of a single geyser or alternatively all eruptions and notes in the database:

* Visit [GeyserTimes](https://geysertimes.org) with your browser.
* In the top toolbar, click **[Retrieve](https://geysertimes.org/retrieve.php)**.
* In the **Looking for data to do research?** card, click **[GeyserTimes Archive](https://geysertimes.org/archive)**.
* Click on the dataset you want to download.