---
layout: post
title:  "Workspaces"
date:   2015-08-28 14:32:09
category: "lesson"
---

Getting all workspaces
--------------------

**GET /workspaces/**

Returns an JSONarray with all the workspaces.

| Resource Information | |
| ------------- |:-------------:|
| Resource URL | http://vmmatthes21.informatik.tu-muenchen.de/api/0.1/workspaces       |
| Response formats | JSON       |
| Requires authentication? | No |

----------
**Example Request**

    $http.get('http://vmmatthes21.informatik.tu-muenchen.de/api/0.1/workspaces');

----------
**Example Result**

    [
    {"id":"root"},
    {"id":"jf4hhnrqai1r"}
    ]

----------
{% highlight java %}

    System.out.println("Get workspaces:");
    URL url = new URL("http://vmmatthes21.informatik.tu-muenchen.de/api/0.1/workspaces");
    HttpURLConnection conn = (HttpURLConnection) url.openConnection();
    conn.setRequestMethod("GET");
    conn.setRequestProperty("Accept", "application/json");
    
    if (conn.getResponseCode() != 200) {
       throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
    }
    
    BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));
    
    String output;
    while ((output = br.readLine()) != null) {
       System.out.println(output);
       parseJSON(output);
    }
    
    conn.disconnect();

{% endhighlight %}