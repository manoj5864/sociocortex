---
layout: post
title:  "Workspaces"
date:   2015-08-28 14:32:09
category: "tutorial"
---

Getting a list of all workspaces
--------------------

With the documentation of the [SC REST API](/documentation/) in hand, and with a SocioCortex Server running at http://server.sociocortex.com, you can already perform several operation to the SocioCortex resources. For example, to get a list of all workspaces, you can use the REST API call "/workspaces/". This operation would also work anonymously, and also in your browser:

----------
    http://server.sociocortex.com/api/v1/workspaces'
----------

When working on an AngularJS-based web client, you can also use sc-angular (https://github.com/sebischair/sc-angular), which wraps the access to the REST API and furthermore provides some convenience functions. To get a list of all workspaces with sc-angular, simply inject the scData service in your AngularJS application and use it as follows:

----------
{% highlight javascript %}
    scData.Workspace.query(function(workspaces) {
        // Do something
    })
{% endhighlight %}
----------
