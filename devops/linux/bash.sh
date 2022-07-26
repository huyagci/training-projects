# FIND THE LOCATION OF BASH INSTALLIATION
which bash

#!/usr/bin/bash

# ECHO
echo Hello There!
echo "It's amazing!"

# VARIABLES (UPPERCASE by convention, letters, numbers, underscores)
NAME="Umut"
echo "My name is $NAME"
echo "My name is ${NAME}"

# USER INPUT
read -p "Enter your name: " NAME
echo "Hello $NAME, nice to meet you!"

# SIMPLE IF STATEMENT
if [ "$NAME" == "Umut" ]
then
   echo "Your name is Umut"
fi

# IF-ELSE
if [ "$NAME" == "Umut" ]
then
    echo "Your name is $NAME"
else
   echo "Your name is not Umut"
fi

# ELSE-IF (elif)
if [ "$NAME" == "Umut" ]
then
    echo "Your name is $NAME"
elif [ "$NAME" == "Hasan" ]
then
  echo "Your name is Hasan"
else
   echo "Your name is not Hasan or Umut"
fi

# COMPARISIONS
value1 -eq value2 Returns true if the values are equal
value1 -ne value2 Returns true if the values are not equal
value1 -gt value2 Returns true if val1 is greater than val2
value1 -ge value2 Returns true if val1 is greater than or equal to val2
value1 -lt value2 Returns true if val1 is less than val2
value1 -le value2 Returns true if val1 is less than or equal to val2

NUM1=3
NUM2=5

if [ "$NUM1" -gt "$NUM2" ]
then
    echo "$NUM1 is greater than $NUM2"
else
    echo "$NUM1 is less than $NUM2"
fi

# FILE CONDITIONS
-d file     True if the file is a directory
-e file     True if the file exists (note that this is not particularly portable, thus -f is generally used)
-f file     True if the provided string is a file
-g file     True if the group id is set on a file
-r file     True if the file is readable
-s file     True if the file has a non-zero size
-u          True if the user id is set on a file
-w          True if the file is writable
-x          True if the file is an executable

FILE="test.txt"
if [ -e "$FILE" ]
then
    echo "$FILE exists"
else
    echo "$FILE is NOT a exist"
fi

# CASE STATEMENT
read -p "Are you 21 or over? Y/N " ANSWER
case "$ANSWER" in
    [yY] | [yY][eE][sS])
        echo "You can have a beer :)"
        ;;
    [nN] | [nN][oO])
        echo "Sorry, no drinking."
        ;;
    *)
        echo "Please enter y/yes or n/no"
    ;;
esac

# SIMPLE FOR LOOP
NAMES="Hasan Umut Başak Burcu"
for NAME in $NAMES
    do
        echo "Hello $NAME"
done

# FOR LOOP TO RENAME FILES
FILES=$(ls *.txt)
NEW="new"
for FILE in $FILES
    do
        echo "Renaming $FILE to new-$FILE"
        mv $FILE $NEW-$FILE
done

# WHILE LOOP - READ THROUGH A FILE LINE BY LINE
LINE=1
while read -r CURRENT_LINE
    do
        echo "$LINE: $CURRENT_LINE"
        ((LINE++))
    done < "bingo.txt"

# FUNCTION
function sayHello() {
    echo "Hello World"
}

sayHello

# FUNCTION WITH PARAMS
function greet() {
    echo "Hello, I am $1 and I am $2"
}

greet "Umut" "30"

#CREATE FOLDER AND WRITE TO A FILE
mkdir bish
touch "bish/bosh.txt"
echo "Hello World" >> "bish/bosh.txt"
echo "Created bish/bosh.txt"