# move this file into git repo
# chmod +x ./rewrite-history.sh
# ./rewrite-history.sh
git checkout --orphan last_branch
git add -A
git commit -am "initial commit"
git branch -D master
git branch -m master
git push origin master --force