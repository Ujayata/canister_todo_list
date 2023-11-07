# canister_todo_list

### Introduction

This project is used as a to-do list that lists all action items added, as well as their priority.

## Development

The project runs on node js and [AZLE](https://demergent-labs.github.io/azle/the_azle_book.html). To test:

- clone the repo

```
git clone https://github.com/KaleF07/canister_todo_list.git
```

- cd to server directory and install the dependencies

```
npm install
```

- then run the following commands to start the icp canister. take note of wallet canister and canister id of application

```
    dfx start --background --clean
    dfx deploy
```

- to add an action item to the to-fo list, run the following command

```
    dfx canister call to_do_list AddItem '(record {"description"= "YOUR_ACTION_ITEM_HERE"; "priority"= "PRIORITY_LEVEL"})'
```

- to find an action item based on id, run the following command

```
    dfx canister call to_do_list FindItem '("ACTION_ITEM_KEY")'
```

- to get the list of all action items, run the following command

```
    dfx canister call to_do_list FindAllItems '()'
```