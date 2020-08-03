
# Back-end for Anywhere-Fitness-3

## Base URL for API 
https://anywhere-fitness-3b.herokuapp.com/


## Endpoints
| Request | URL | Description |
| ------- | --- | ----------- |
| POST | api/auth/register | Registers as a new user |
| POST | api/auth/login | Logs in an existing user |
| GET  | api/auth/logout | Logs out an existing user |
| GET | api/users | For retrieving all users (for instructors only) |
| GET | api/users/:id | For retrieving a user with specified id |
| GET | api/users/:role_id | For retrieving all users with the specified role_id |
| PUT  | api/users/:id | For updating a user with the specified id |
| DELETE | api/users/:id | For deleting a user with the specified id |
| GET | api/classes | For retrieving a list of all classes |
| GET | api/classes/:id | For retrieving a class with the specified id |
| POST | api/classes | For creating a new class (for instructors only) |
| PUT  | api/classes/:id | For updating a class with the specified id (for instructors only) |
| DELETE | api/classes/:id | For deleting a class with the specified id (for instructors only) |


## Database Schema

### roles table
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | role id (incremented) |
| role | text | yes | no | foreign key for users table (client or instructor) |

### users table
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | user id (incremented) |
| first_name | text | yes | no | user first name |
| last_name | text | yes | no | user last name |
| email | text | yes | yes | user email |
| username | text | yes | yes | username of user |
| password | text | yes | no | user password |
| role_id | integer | yes | no | foreign key for user role |

### types table
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | type id (incremented) |
| type | text | yes | no | foreign key for classes table (class type) |

### classes table
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | class id (incremented) |
| name | text | yes | yes | class name |
| instructor_id | integer | yes | no | foreign key for instructor of class |
| type_id | integer | yes | no | foreign key for type of class |
| date | date | yes | no | date of class |
| start_time | time | yes | no | start time of class |
| duration | integer | yes | no | duration of class |
| intensity | text | yes | no | intensity of class |
| location | text | yes | no | location of class |
| number_of_attendees | integer | yes | no | number of client in class |
| max_class_size | integer | yes | no | max number of clients that be in class |

### class_clients table
| Name | Type | Required | Unique | Notes |
| ---- | ---- | -------- | ------ | ----- |
| id | integer | yes | yes | role id (incremented) |
| class_id | integer | yes | no | foreign key from classes table |
| client_id | integer | yes | no | foreign key from users table |

