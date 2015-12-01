---
layout: post
title:  "Getting Resources of SocioCortex"
date:   2015-08-28 14:32:09
category: "tutorial"
---

Getting Resources of SocioCortex
--------------------

With the documentation of the [SC REST API](/documentation/) in hand, and with a SocioCortex Server running at http://server.sociocortex.com, you can already perform several operation to the SocioCortex resources. For example, to get a list of all workspaces, you can use the REST API call "/workspaces/". This operation would also work anonymously, and also in your browser:

    http://server.sociocortex.com/api/v1/workspaces

When working on an AngularJS-based web client, you can also use sc-angular (https://github.com/sebischair/sc-angular), which wraps the access to the REST API and furthermore provides some convenience functions. Each method accessing SocioCortex's REST API returns a respective [promise](https://docs.angularjs.org/api/ng/service/$q) which can be handled by the then-function and a respective callback method. To get a list of all workspaces with sc-angular, simply inject the scData service in your AngularJS application and use it as follows:

    {% highlight javascript %}
    
	scData.Workspace.query().then(function (workspaces) {
		for (var i = 0; i < workspaces.length; i++) {
			console.log(workspaces[i].name);
		}
	});
    
    {% endhighlight %}

To get a particular workspace, simply use the following REST operation:

	http://server.sociocortex.com/api/v1/workspaces/107yhdgc7q9u6

Analogously, when using sc-angular, you can use the get-function of the respective resource type:

    {% highlight javascript %}
    
	scData.Workspace.get({id: '107yhdgc7q9u6'}).then(function (northwind) {
		console.log(northwind.name);		
	});
    
    {% endhighlight %}


Based on a particular workspace, you can request its entities by the following REST operation:

	http://server.sociocortex.com/api/v1/workspaces/107yhdgc7q9u6/entities

Again, sc-angular provides methods wrapping those kind of REST calls as follows:

    {% highlight javascript %}
    
	scData.Entity.queryByWorkspace({id: '107yhdgc7q9u6'}).then(function (entities) {
		for (var i = 0; i < entities.length; i++) {
			console.log(entities[i].name);
		}
	});
    
    {% endhighlight %}

Requesting a workspace's entity types, an entity type's entities, or an entity type's attribute definitions works analogously.