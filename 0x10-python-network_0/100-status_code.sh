#!/bin/bash
# A Bash script that sends a request to a URL passed as an argument, and displays only the status code of the response, not allowed to use any pipe, redirection, ; and && etc. have to use curl.
curl -s -o /dev/null -w "%{http_code}" "$1"
