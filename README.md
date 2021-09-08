# NOt to do task list API

backend project built with node, express and mongodb for the front end NTDL app

# how to run

- clone project
- run 'npm install'
- make sure you have nodemon installed, otherwise run 'npm i -g nodemon'

## API

All the API will follow the `{rootUrl}/api/v1/task` pattern

| #   | Method   | Path    | Description                                                                                                    |
| --- | -------- | ------- | -------------------------------------------------------------------------------------------------------------- |
| 1   | 'GET'    | '/\_id' | "@\_id" is optional. return single task if id is provided otherwise return all tasks                           |
| 2   | 'POST'   | '/'     | Expects task object stores task in the database and return the stored data or null if unable to store the data |
| 3   | 'PATCH'  | '/'     | Expects id and the instruction on what to update in the database                                               |
| 4   | 'DELETE' | '/'     | expects id and deletes data from database and returns successful or unsuccessful information                   |

### user API

All the user API will follow the `{rootUrl}/api/v1/user` pattern
| # | Method | Path | Description |
| --- | -------- | ------- | -------------------------------------------------------------------------------------------------------------- |

<!-- | 1 | 'GET' | '/\_id' | "@\_id" based on the \_id, return the user | -->

| 1 | 'POST' | '/' | Log in|
| 2 | 'POST' | '/register' | create new user |

<!-- | 3   | 'PATCH'  | '/'     | Expects id and the instruction on what to update in the database                                               |
| 4   | 'DELETE' | '/'     | expects id and deletes data from database and returns successful or unsuccessful information   -->
