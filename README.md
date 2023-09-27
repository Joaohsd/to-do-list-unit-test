# **Task Manager**

This application is a To-Do app that allows the user to create tasks, define the task's status and remove the task. Each task has the following attributes:

*   Id: Generated automatically;
*   Name;
*   Completed: It can be "To Do", "In Progress" or "Done";

The user's inputs are processed and registered into a table with these three informations.

## **Test**

We conducted 6 tests, which were:

*   Adding a task
*   Updating a task status from In progress to Done
*   Updating a task status from To do to In progress
*   Removing a task from the list
*   Removing a task from the list verifying return
*   Verifying exibition of each task

To perform the tests, the following dependencies were used: **mocha** and **chai**

## **Authors**

*  Fernanda Nagata Ito
*  João Henrique Silva Delfino
*  Paulo Otavio Luczensky de Souza


## **Pre-requirements**
*   Node (used v18.17.1)
*   Npm (used v9.6.7)

## **Commands**

### Test
In order to **Test** the project, use the command below:

```shell
npm i
npm test
```

### Run
In order to **run** the project, use the command below:

```shell
npm i
node src/main.js
```

If you do not have **node** installed, install it! You can use (**for Linux environment**):

```shell
sudo apt update
sudo apt install nodejs
```
The **npm** already comes with **node**.

**In this project, it was used a newer version of node. Maybe, it can not work with the version present in apt repository**