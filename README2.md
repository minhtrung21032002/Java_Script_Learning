fetch return a new promise

promise inside the promise

asyn,syn,promise allow asynchornous actions

module.exports, require is used in node.js which is diffirent from web browsers

module.exports {} => This is an object



Client-Side Rendering (CSR):

    Backend Design: The backend is responsible for defining API endpoints and routes. It prepares and exposes data through these endpoints, typically in JSON format.

    Frontend Development: The frontend (usually implemented as a JavaScript application) is designed separately from the backend. It makes HTTP requests to the backend API endpoints to fetch data in JSON format.

    User's Browser: When a user visits a page, their browser loads the frontend JavaScript code. The JavaScript code handles rendering and manipulation of the DOM (Document Object Model).

    HTTP Requests: The frontend code sends HTTP requests to the backend API endpoints to retrieve data.

    Data Rendering: After receiving the JSON data, the frontend code dynamically renders the content on the client-side. This may include rendering HTML templates, populating data, and updating the view.

Server-Side Rendering (SSR):

    Backend Design: Similar to CSR, the backend is responsible for defining routes and handling requests. However, it doesn't just return JSON data; it generates complete HTML pages.

    Server Processing: When a user visits a page, their browser sends an HTTP request to the backend server. The server processes the request by rendering the entire HTML content, including any necessary data.

    HTML Response: The server sends back a fully-rendered HTML page along with CSS and any required client-side JavaScript. This HTML page is ready to be displayed in the browser.

    User's Browser: The user's browser receives the complete HTML page and renders it directly. There's no need for additional client-side rendering because the page is already fully populated and styled.




With REST



In a Client-Side Rendering (CSR) architecture with RESTful APIs, the workflow between the backend and frontend typically follows these steps:

Backend Workflow:

    API Design: The backend team designs and implements a set of RESTful API endpoints. These endpoints define the resources and operations that clients (in this case, the frontend) can access.

    Route Handling: When a client sends an HTTP request to a specific API endpoint (e.g., GET /api/posts to retrieve a list of blog posts), the backend server is responsible for routing the request to the appropriate endpoint handler.

    Data Retrieval: Inside the endpoint handler, the backend code interacts with databases, services, or other data sources to fetch the requested data. This data is typically retrieved in JSON format.

    JSON Response: Once the data is retrieved, the backend constructs an HTTP response with a JSON payload containing the requested data. For example, it might look like:

    css

    HTTP/1.1 200 OK
    Content-Type: application/json

    {
      "posts": [
        { "id": 1, "title": "Post 1", "content": "..." },
        { "id": 2, "title": "Post 2", "content": "..." },
        ...
      ]
    }

    Sending the Response: The backend sends this JSON response back to the client (frontend) as an HTTP response.

Frontend Workflow:

    Route Configuration: In the frontend code, developers configure the routes that correspond to different views or pages in the application. These routes map to specific URLs and define what data needs to be fetched from the backend.

    HTTP Requests: When a user navigates to a particular route or performs an action that requires data from the server, the frontend code sends an HTTP request to the appropriate backend API endpoint. For example, if the user visits a blog page, the frontend code may make a GET request to /api/posts to retrieve the list of blog posts.

    Asynchronous Request: The HTTP request is typically asynchronous, meaning it doesn't block the user interface while waiting for a response. The frontend code continues to execute other tasks while waiting for the response.

    Response Handling: When the JSON response is received from the backend, the frontend code processes it. This often involves parsing the JSON data and using it to update the user interface. For example, it may populate a list of blog posts on the blog page.

    Client-Side Rendering: With CSR, the actual rendering of the data and updating the DOM (Document Object Model) is done on the client-side using JavaScript. This allows for dynamic and interactive user interfaces.

    User Interaction: Users can interact with the page, triggering further requests to the backend as needed. These interactions may include creating, updating, or deleting data, all of which involve making appropriate API requests.
    
 Soft delete

Jquerry is helpful when we want to add event listern to all el

ement retrive from DOM


Refactor code

query parameter

middleware
