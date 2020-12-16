# AWS Fullstack Kickstart Project

This project may assist one to:

* Create a rich Angular-base front-end application
* Define Lambda functions to handle back-end logic & loads
* Perform basic CRUD operations against AWS DynamoDB

------------------

## Setup Your Environment

Before you begin, please ensure you have setup the followings:

* Local machine setup
    * Node.js as a development framework (install it from https://nodejs.org/en/download/)
    * VS Code as IDE (install it from https://code.visualstudio.com/download)
* Cloud setup - ensure AWS permissions to:
    * IAM console - setting resources accees and usage permissions / policies
    * Lambda - constructing highly-scaleable API services
    * DynamoDB - data-store solution with a friendly UI for easy view / managment
    * API Gateway - expose your work to the public

------------------

## Setup Frontend Application

* Download / clone this repository to your local machine (will be referred as `WORKDIR`)
* Open VS Code -> *File* menu -> *Open Folder* -> select `WORKDIR`
* Open *Terminal* menu -> *New Terminal*

```bash
# from the terminal itself, hit the following commands
# ensure node is installed properly
$ node -v

# npm properly installed
$ npm -v

# install application external packages. this might take a while
$ npm install
```

------------------

## Running Frontend Application

* In your `WORKDIR`, open terminal and type ther command below
* After a successful build, your nrowser should open a new tab with address `http://localhost:4200` 

```bash

# start project in watch mode. this command should be executed only once
$ npm start

```

------------------

## Frontend Application Deployment

* In your `WORKDIR`, open terminal and type ther command below
* After a successful build, your project will contain `dist` folder
* Upload the content of `dist` folder (without the folder itself) to your host (such as *AWS S3 bucket*)
```bash

# run this program when you done developing and need to publish your work 
$ npm run build

```

------------------

## Lambda Functions Deployments

As a rule of thumb, save your functions under `lambda` folder and create a sub folder for each function

* Copy the `echo` folder and rename it to reflect the name of your new function
* Open your *AWS console* in browser and under *Lambda* create a new function (from scratch, using *Node*) with the same name
* Upload files from your local machine to your lambda function (preserve file names and folders structure)
* Copy the *test* payload from function (located at the bottom of `index.js` file) and create a new test for your *Lambda* function
* Trigger the test and ensure your function works as excpected

------------------

## AWS API Configuration

By default, your *Lambda* function (as well as other resources) are not exposed to the public network. In order to expose it, one should define an API gateway to properly control and expose resources.

* Open your *AWS console* in browser and select *API Gateway*
* Create a new *REST-API* integration and select your lambda function
* Proceed with suggested configurations until your API integration is ready
* In the *API Gateway*, select your created API integration
* In the *Actions* top menu, select *Enabled CORS* option and accept suggested configuration
* In the *Actions* top menu, select *Deploy* and create a *New Stage*
* When process completes, you will recieve a URL address - dedicated to your *Lambda* function

------------------

## AWS DynamoDB Setup With Lambda

* Open your *AWS console* in browser and select *DynamoDB*
* Create a table named `test-table` (to make demo `db` lambda function work)
* Configure table *key field name* as `id` with type `number`
* Ensure the table is created and that you've got access to manage it
* Deploy `db` *Lambda* function (follow *Lambda Functions Deployments* section)
* Open your *AWS console* in browser and select *IAM*
* Select *Roles* and Create a new Role for your *Lambda* function (by selecting the *Lambda* role template, and clicking *next* button)
* When requested to select policy, choose to *create a new policy*
* Under *Select a service* section, select *DynamoDB*
* Under *Actions* section, select *All DynamoDB actions*
* Under *Resources* section, select *table*
* Name your policy and use it to create your new *Lambda* role
* Open your *AWS console* in browser and select *Lambda*
* Enter your `db` *Lambda* function and enter *Permissions* tab
* Under *Execution Role* click *Edit* button and select your *Lambda* role (by specifying *Use an existing role* option)
* Test your *Lambda* function 


