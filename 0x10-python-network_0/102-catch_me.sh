#!/bin/bash
# A Bash script that  Makes a request to 0.0.0.0:5000/catch_me that causes the server to respond with a message containing "You got me!", in the body of the response. Have to use curl and  not allow to use echo, cat, etc. to display the final result.
curl -sL -X PUT -H "Origin: HolbertonSchool" -d "user_id=98" 0.0.0.0:5000/catch_me
