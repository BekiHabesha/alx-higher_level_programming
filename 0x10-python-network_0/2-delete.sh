#!/bin/bash
# A Bash script that Sends a DELETE request to the URL passed as the first argument and display the response body.
curl -sX DELETE "$1"
