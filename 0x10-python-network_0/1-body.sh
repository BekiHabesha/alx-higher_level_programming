#!/bin/bash
# A Bash script that takes in a URL, sends a Get request and displays the response body for a given URL for 200 status code responses.
curl -sL "$1"
