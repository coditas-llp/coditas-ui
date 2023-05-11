echo "Have you staged/added the changes to commit and publish?"

read ans


if [[ $and -eq "y" ]]
 then
    echo "Hello, please enter your commit message ?"

    read cMsg

    git commit -m "$cMsg"

    echo "Do you want to publish now?"

    read pub

    if [[ &pub -eq "y" ]]
    then
        echo "Have you changed the Package Version in package.json?"
        read change

        if [[ $change -eq "y" ]]
        then
            echo "Starting the publish the code...!!!"

            npm run build:npm && npm publish
fi