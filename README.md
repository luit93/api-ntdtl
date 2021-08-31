# NOt to do task list API

backend project built with node, express and mongodb for the front end NTDL app

# how to run

- clone project
- run 'npm install'
- make sure you have nodemon installed, otherwise run 'npm i -g nodemon'

## API

All the API will follow the '{rootUrl}/api/v1' pattern

| #   | Method   | Path | Description                                                                                                    |
| --- | -------- | ---- | -------------------------------------------------------------------------------------------------------------- |
| 1   | 'GET'    | '/'  | return all the tasks                                                                                           |
| 2   | 'POST'   | '/'  | Expects task object stores task in the database and return the stored data or null if unable to store the data |
| 3   | 'PATCH'  | '/'  | Expects id and the instruction on what to update in the database                                               |
| 4   | 'DELETE' | '/'  | expects id and deletes data from database and returns successful or unsuccessful information                   |
