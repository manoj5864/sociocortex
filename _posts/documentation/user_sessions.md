
----------

Initializing Session
--------------------

**GET /session/**
Returns the properties of the current session. 
Session identification in SocioCortex is done via a session cookie. Thereby, in each request to SocioCortex, you have to add a cookie with a certain name and the corresponding session ID as value. Both of them are included in the response of this REST operation ("cookie-name" and "id").

**Resource Information**
|  Resource URL | http://vmmatthes21.informatik.tu-muenchen.de/api/0.1/session       |
| ------------- |:-------------:|
| Response formats | JSON       |
| Requires authentication? | No |

**Example Request**

    $http.get('http://vmmatthes21.informatik.tu-muenchen.de/api/0.1/session/')

**Example Result**

    "nounce":"-8624289785199702478",
	"sessionId":"wh9bvheyxkv21nl271j91rgxf",
	"cookieName":"JSESSIONID_intern_tricia"

**Java Example**

    URL url = new URL("http://vmmatthes21.informatik.tu-muenchen.de/api/0.1/session");
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
