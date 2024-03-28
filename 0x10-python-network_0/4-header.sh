#!/bin/bash
# A Bash script that takes in a URL as an argument, Sends a GET request to a given URL and displays the body of the response with a header variable of X-School-User-Id (must be sent with the value 98).
curl -sH "X-School-User-Id: 98" "$1"
