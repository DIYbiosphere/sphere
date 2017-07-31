// Original code taken with permission from : https://github.com/dwilliamson/donw.io/blob/master/public/js/githubComments.js

// use of ajax vs getJSON for headers use to get markdown (body vs body_html)

function ParseLinkHeader(lnk)
{
    var entries = lnk.split(",");
    var links = { };
    for (var i in entries)
    {
        var entry = entries[i];
        var link = { };
        link.name = entry.match(/rel="([^"]*)/)[1];
        link.url = entry.match(/<([^>]*)/)[1];
        link.page = entry.match(/page=(\d+).*$/)[1];
        links[link.name] = link;
    }
    return links;
}

function ShowCommentsEdit(repo_name, comment_edit_id, page_id)
{
    var api_comments_url = "https://api.github.com/repos/" + repo_name + "/issues/" + comment_edit_id + "/comments" + "?page=" + page_id;

    $.ajax(api_comments_url, {
        headers: {Accept: "application/vnd.github.v3.html+json"},
        dataType: "json",
        success: function(comments, textStatus, jqXHR) {

            // Add post button to first page
            if (page_id == 1)
            {
                var url = "https://github.com/" + repo_name + "/issues/" + comment_edit_id + "#new_comment_field";
                $("#gh-comments-edit-list").append("<form action='" + url + "' rel='nofollow'> <button class='ui small button'> Post a comment on GitHub </button></form>");
            }

            // Individual comments
            $.each(comments, function(i, comment) {

                var date = new Date(comment.created_at);

                var t = "<div class='ui comments'>";
                t += "<div class='comment'>";
                t += "<a class='avatar'>";
                t += "<img src='" + comment.user.avatar_url + "'>";
                t += "</a>";
                t += "<div class='content'>";
                t += "<a class='author' href='" + comment.user.html_url + "'>" + comment.user.login + "</a>";
                t += "<div class='metadata'>";
                t += "<div class='date'>" + date.toUTCString() + "</div>";
                t += "</div>"; //close metadata
                t += "<div class='text'>";
                t += comment.body_html;
                t += "</div>"; //close text
                t += "</div>"; //close content
                t += "</div>"; //close comment
                $("#gh-comments-edit-list").append(t);
            });

            // Call recursively if there are more pages to display
            var linksResponse = jqXHR.getResponseHeader("Link");
            if (linksResponse) {
                var links = ParseLinkHeader(jqXHR.getResponseHeader("Link"));
                if ("next" in links)
                {
                    ShowCommentsEdit(repo_name, comment_edit_id, page_id+1);
                }
            }
        },
        error: function() {
            $("#gh-comments-edit-list").append("Comments are not open for this post yet.");
        }
    });
}

function DoGithubCommentsEdit(repo_name, comment_edit_id)
{
    $(document).ready(function ()
    {
        ShowCommentsEdit(repo_name, comment_edit_id, 1);
    });
}
