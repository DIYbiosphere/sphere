 whatever
 ## Forking

 Pros

 Keeps branches separated by user
 Reduces clutter in the primary repository
 Your team process reflects the outside contributor process
 Cons

 Makes it more difficult to see all of the branches that are active (or inactive, for that matter)
 Collaborating on a branch is trickier (the fork owner needs to add the person as a collaborator)
 You need to understand the concept of multiple remotes in Git
 Requires additional mental bookkeeping
 This will make the workflow more difficult for people who aren't super comfortable with Git

 ## Branching

 Pros

 Keeps all of the work being done around a project in one place
 All collaborators can push to the same branch to collaborate on it
 There's only one Git remote to deal with
 Cons

 Branches that get abandoned can pile up more easily
 Your team contribution process doesn't match the outside contributor process


 [–]m00n3r 311 points 5 years ago
 5 year old explanation:
 You and Billy decide to draw a picture together with crayons, but you both want to be able to work on it from home. The teacher makes 2 photocopies of what you have started and you both take a copy home (pulling/checking out). You both add more things to the drawing and when you come back to school tomorrow, the teacher cuts and pastes the bits you added / changed and then photocopies that (merging). If you both colored in the same area, someone has to choose which portion to use (resolving a conflict). And since there are photocopies every time something is changed, you can throw away all the new ones if you don't like what you've done (reverting). https://www.reddit.com/r/explainlikeimfive/comments/jgoxv/eli5_how_do_you_use_git_and_github/


 You and your friend want to play the same RPG video game together (We're going to go with Chronotrigger here, because every 5 year old should be playing that imo), but you want to do it without being in the same room, and without having a constant internet connection to a centralized server. Even more tricky, you guys want to play through the same saved game together, but without coordinating time slots or copying the saved game file to each other every time you're finished with it.
 The system that manages all of that, is Git. It allows you to play the same game simultaneously, offline, and you guys can even go in different directions in the story line. Say, one person decides to fight Lavos, and the other decides to go get Magus. You've got the game going in two different directions, but when you come online to merge the two of them, Git understands how to bring it all together, and it does it's best attempt to merge your storylines. Sometimes, you perform story arcs in direct conflict with each other (one person decides to let Magus join the party, and the other decides to fight him). In this case, you have a conflict, and you have to resolve it (choose one of the arcs as cannon) and go on from there.
 The server that runs the software that lets you manage this, and stores the global saved game you and your friend keep working off of (branching from), has some built in features for you and your friend to communicate with each other. This is Github. It's also got some cool reports and graphs for you and your friend to see other storylines that other people who are using your global saved game file have tried, and gives you the opportunity to use their story arcs as well, if you like how they work with your game

 GitHub is a web platform that helps users collaborate on a _collection of files_. The shared folder containing these files is a called  **repository** or **repo**.

 Based on a software called **Git**, GitHub provides _version control_ to the files in the repo. If you download Git to your computer, you can turn any folder into a Git repository. Git tracks changes to the files by saving _snapshots_. With Git, multiple users are able  which allows users to work simultaneously on the files separetely and to combine them without overwriting changes made by users on one file that conflicts with another.

 Git works by saving _snapshots_, called  commits, of the changes in the repository; making changes easy to track and reverse.

 Git usually runs by using the  _command-line_ of your local machine, using GitHub is easier as it provides a visual interface accessible by any browser, or you can download GitHub Desktop and work locally on your machine.

 GitHub is a web platform that helps users collaborate on a _collection of files_,  called  **repository** or **repo**, by providing _version control_ based on the **Git** software. Git usually runs by using the  _command-line_ of your local machine, using GitHub is easier as it provides a visual interface accessible by any browser, or you can download GitHub Desktop and work locally on your machine.

 Git works by saving _snapshots_, called  commits, of the changes in the repository; making changes easy to track and reverse.

 - git clone: will 'clone', or copy a remote repository to a destination which is local to your machine via the command line
 - git pull: will update your local repository (where you cloned to), with code from that remote repository
 - git status: will show you the status of any changes you have in yout working tree (working tree is all the files of the current repository that git sees).
 - git add: will add files to the staging location after they're changed (or if they're untracked, will mark them to be tracked after the next commit)
 - git commit: will apply your staged changes (throught git add) to the repository. A commit is accompnied by a message that explains the changes you just made to the files.
 - git push: updates a remote repository with your latest commit.
 - git log: show you a list of changes that have happende since the beginning of time.
