#!/bin/bash
# A Bash script that takes in a URL, sends a request to that URL, and displays the byte size ofthe HTTP response header for a given URL.
curl -s "$1" | wc -c
