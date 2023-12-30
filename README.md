# GeyserTimes Documentation

Documentation for users, researchers and developers alike. This repository contains the source code, most of which is based on markdown and [Docusaurus](https://docusaurus.io/). It can easily be edited and pages are automatically rebuilt when edited. For an overview of supported features check out the [Markdown Features](https://docusaurus.io/docs/markdown-features) guide.

## Editing pages

Most edits can be done directly within the GitHub web interface. Assuming you have access rights to this repository, you can follow the steps below to make changes to the documentation. Should you not have access rights, you may choose to [fork this repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) instead.

1. [Create a new branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch-via-the-branches-overview) for your changes
   * Make sure that you are basing your branch on `main`, i.e., the branch dropdown starts with `main`
   * Type in a name for your new branch (choose something descriptive, such as `glossary-terms`)
   * Make sure you are now on your newly created branch, i.e., the branch dropdown starts with `glossary-terms`
2. Make the necessary changes
   * For minor edits, limited to one or very few files, you can simply navigate to the appropriate file and edit it by clicking the pencil icon. Once you are confident about your changes, click the green *Commit changes...* button to save the edits to your branch.
   * For extended edits, the recommended approach is to use codespaces. You can [create a new codespace](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository) for your newly created branch by clicking the green *Code* button. Unlike the previous approach, this autosaves all changes without needing to commit them. That way, you can easily jump between files and bundle multiple changes into one commit. You can also close a codespace and return to it at a later time with all of your pending changes waiting for you. Once you are confident about your changes, [commit](https://docs.github.com/en/codespaces/developing-in-a-codespace/using-source-control-in-your-codespace#committing-your-changes) them to your branch.
3. [Create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) for your changes
   * Navigate to the pull request tab and click the green *New pull request* button
   * Alternatively, if GitHub detects your recent changes to a branch, click the green *Compare & pull request* button in the main code tab
   * Make sure the base branch is `main`, i.e., the base branch dropdown starts with `main`
   * After opening the pull request, a deploy preview will be generated and a link to it will be posted as a comment. Ensure the changes are as expected and have them reviewed by someone else, especially for extended edits.
   * If you have forked this repostiory, see [create a pull request from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) instead
