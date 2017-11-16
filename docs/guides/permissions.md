---
title: Permission Levels
layout: docs
crumb: guides
summary: The roles and privileges of our contributing and developing community
---

Users who contribute to the project are considered _contributors_. The _development community_ refers to members of the [DIYbiosphere organization][gh_org] in GitHub. [Members] have greater access permissions to the project and can be part of [Teams] who are key members with distict roles in the development and enjoy greater access privileges. Submit an issue to [request membership][join] and join us!

## Access Permission Levels
There are different access levels: _Read_, _Write_, _Admin_, and _Owner_. Github [explains them][gh_permissions] in detail but we explain the most important and relevant ones in this page.

## Non-members
Anyone with a GitHub account has _read_ permissions and can contribute to the DIYbiosphere project. Basic actions of non-members are:

- Fork the repository
- Submit Pull Requests
- Submit an issue. Close their own issues
- Edit and delete their own comments
- Edit wikis

To edit the repository, non-members have to fork, commit changes, submit a pull request, and wait for the merge by a member.

### Outside Collaborators
Non-members can be assigned more permission levels by making them _Outside Collaborators_ and specifying their access level.

## Members
All [Members][gh_members] of the organization have _Write_ permissions. In addition to the actions of non-members, members can:

- See other members and mention them, like @ahuacatl
- See teams, create new teams, be team maintainer, and mention them, like [@DIYbiosphere/editors][gh_editors]
- Manage Issues and Pull Requests (PR); close, merge, reopen, assign, apply labels, milestones. See our [ticket workflow].
- Have Issues and PR assigned to them
- Edit and delete anyone's comments

The master branch is protected, therefore members have fork or _commit_ changes to another branch, submit a pull request, merge it themselves or wait for feedback from the community.

### Teams
All members of [Teams] have direct commit access to the master branch and don't need to do pull requests. Each team has a Team Maintainer who can add members to the team.

## Admins
Some [Teams][gh_teams] have _Admin_ permission. These include [Directors] and [Developers]. In addition to the actions of members, admins can:

- Delete and transfer repositories
- Change repository's settings and visibility
- Add repository to a team
- Add and remove collaborators
- Merge PRs on protected branches

## Owners
Only [Directors] have _Owner_ permissions. In addition to all the actions of admins, owners can:

- Pull, push, and clone all repositories
- Inviting people to join the organization
- Manage teams and collaborators (add/remove, promote team maintainers)
- Manage the settings of the organization
