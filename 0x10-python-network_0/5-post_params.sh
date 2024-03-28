#!/bin/bash
# A Bash script that takes in a URL, sends a POST request to the passed URL and displays the body of the response with a variable of email (must be sent with the value test@gmail.com) and a variable of subject (must be sent with the value I will always be here for PLD).
curl -s -X POST -d "email=test@gmail.com&subject=I will always be here for PLD" "$1"
