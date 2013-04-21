Project Page for Adron
===

Description:

Building This Jeckyll Site: http://compositecode.com/

git clone git@github.com:Adron/Me_Sample.git

cd Me_Sample/

git branch -a

  the list...
  * master
  remotes/origin/HEAD -> origin/master
  remotes/origin/gh-pages
  remotes/origin/master

git checkout remotes/origin/gh-pages

  message...
  Note: checking out 'remotes/origin/gh-pages'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

  git checkout -b new_branch_name

HEAD is now at 318aaa3... Create gh-pages branch via GitHub

DELETE ALL THE FILES IN THE PATH.

  Create our README.md and .gitignore.

' subl README.md

  Then add the following content to it!!

` Me_Sample Readme!
` ===
` Dsecription: It goes here!
`
` Documentation
` ---
` Don't scimp on it, WRITE IT!

` subl .gitignore

Then add the following content to exclude from the git repository.

` *.DS_Store
` .DS_Store
