# Financial Penta Challenge

This project was made for PENTA FINANCIERO in order to apply to its work team, it was made with **_ReactJs and Firebase._**

## User Story

The instructions were the following:

_"As a company executive, I want to see a list of all the invoices. I have sent to my customers ordered by emission data descending, so that I have a clear understanding of my receivable accounts."_

• The software MUST be accessible from a desktop browser.

• The software CAN NOT directly access the invoice files, as this files
are securely stored in a backup tape, but the software CAN preprocess
the invoice files and store metadata in any way you see fit.

## Project development

As our software needs to read the information contained in the XML documents, but without entering them, the first thing was to access the folder containing the files, then read the information file by file and send it to a database, in this case The Firebase Database servers were used.

After this, the data is extracted from the front to present the information corresponding to each invoice in the browser.

### Instructions

In case you want to add more documents in the database, we must:

1. Clone the following repository

        git clone https://github.com/AnaPaulaMontap/penta-financiero.git

2. Install dependencies

        npm install


3. Upload the files in the "Files" folder:

            ./src/readXML/Files

4. After this, the files must be uploaded to the database:

        node  ./src/readXML/index.js  ./src/readXML/Files


**Note: You must have NodeJs installed on your computer in order to execute these commands**

### Deployment

To show the data in the browser, you must:

1. Open the terminal in the project and execute:

        npm start

**or**

2. Click on the following [**Link**](https://AnaPaulaMontap.github.io/penta-financiero).