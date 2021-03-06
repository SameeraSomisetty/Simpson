define({ "api": [
  {
    "type": "post",
    "url": "/v1/bookmarks",
    "title": "Create",
    "description": "<p>Creates a new bookmark.</p> ",
    "permission": [
      {
        "name": "write"
      }
    ],
    "group": "Bookmark",
    "name": "CreateBookmark",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "project_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "url",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "notes",
            "description": "<p>Related user written notes about this bookmark.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>The contents of title in the page.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>A list of initial tags.</p> "
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/BookmarkController.php",
    "groupTitle": "Bookmark"
  },
  {
    "type": "delete",
    "url": "/v1/bookmarks/:id",
    "title": "Delete",
    "description": "<p>Deletes a single bookmark.</p> ",
    "permission": [
      {
        "name": "write"
      }
    ],
    "group": "Bookmark",
    "name": "DeleteBookmark",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/BookmarkController.php",
    "groupTitle": "Bookmark"
  },
  {
    "type": "get",
    "url": "/v1/bookmarks/:id",
    "title": "Get",
    "description": "<p>Gets a single bookmark.</p> ",
    "permission": [
      {
        "name": "read"
      }
    ],
    "group": "Bookmark",
    "name": "GetBookmark",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/BookmarkController.php",
    "groupTitle": "Bookmark"
  },
  {
    "type": "get",
    "url": "/v1/bookmarks",
    "title": "Get Multiple",
    "description": "<p>Gets a list of bookmarks. If the project_id is specified, returns all bookmarks in a project (not just owned by user). If project_id is omitted, then returns all user owned bookmarks.</p> ",
    "permission": [
      {
        "name": "read"
      }
    ],
    "group": "Bookmark",
    "name": "GetBookmarks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "project_id",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/BookmarkController.php",
    "groupTitle": "Bookmark"
  },
  {
    "type": "put",
    "url": "/v1/bookmarks/:id/move",
    "title": "Move to Project",
    "description": "<p>Moves the bookmark to another project. Note: the user must have write permission on both 'from' and 'to' projects.</p> ",
    "permission": [
      {
        "name": "write"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "project_id",
            "description": "<p>The destination project.</p> "
          }
        ]
      }
    },
    "name": "MoveBookmark",
    "group": "Bookmark",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/BookmarkController.php",
    "groupTitle": "Bookmark"
  },
  {
    "type": "put",
    "url": "/v1/bookmarks/:id",
    "title": "Update",
    "description": "<p>Updates a bookmark.</p> ",
    "permission": [
      {
        "name": "write"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "url",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "title",
            "description": "<p>The contents of title in the page.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String[]</p> ",
            "optional": true,
            "field": "tags",
            "description": "<p>A list of tags.</p> "
          }
        ]
      }
    },
    "group": "Bookmark",
    "name": "UpdateBookmark",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/BookmarkController.php",
    "groupTitle": "Bookmark"
  },
  {
    "type": "post",
    "url": "/v1/chatMessages",
    "title": "Create",
    "description": "<p>Create a new chat message for the project.</p> ",
    "group": "Chat",
    "name": "Create",
    "permission": [
      {
        "name": "write"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "project_id",
            "description": "<p>The id of the corresponding project.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "message",
            "description": "<p>The chat message.</p> "
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/ChatController.php",
    "groupTitle": "Chat"
  },
  {
    "type": "get",
    "url": "/v1/chatMessages",
    "title": "Get Multiple",
    "description": "<p>Gets a list of the chat messages for this project.</p> ",
    "group": "Chat",
    "name": "GetMultiple",
    "permission": [
      {
        "name": "read"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "project_id",
            "description": "<p>The id of the corresponding project.</p> "
          }
        ]
      }
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl \"http://localhost:8000/api/v1/chatMessages?auth_email=coagmento_demo@demo.demo&auth_password=demo&project_id=300\"",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n  \"status\": \"ok\",\n  \"errors\": {\n    \"input\": [],\n    \"general\": []\n  },\n  \"result\": [\n    {\n      \"project_id\": 300,\n      \"user_id\": 298,\n      \"message\": \"Hello!\",\n      \"created_at\": \"2015-11-25 02:40:38\",\n      \"updated_at\": \"2015-11-25 02:40:38\",\n      \"user\": {\n        \"id\": 298,\n        \"name\": \"Kevin Albertson\",\n        \"email\": \"k_albertson@live.com\",\n        \"created_at\": \"2015-11-25 02:06:56\",\n        \"updated_at\": \"2015-11-25 02:06:56\"\n      }\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/ChatController.php",
    "groupTitle": "Chat"
  },
  {
    "type": "post",
    "url": "/v1/docs",
    "title": "Create",
    "description": "<p>Creates a new document.</p> ",
    "permission": [
      {
        "name": "write"
      }
    ],
    "group": "Doc",
    "name": "CreateDocument",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "project_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "title",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/DocController.php",
    "groupTitle": "Doc"
  },
  {
    "type": "delete",
    "url": "/v1/docs/:id",
    "title": "Delete",
    "description": "<p>Deletes a single doc.</p> ",
    "permission": [
      {
        "name": "write"
      }
    ],
    "group": "Doc",
    "name": "DeleteDoc",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/DocController.php",
    "groupTitle": "Doc"
  },
  {
    "type": "get",
    "url": "/v1/docs/{doc-id}/text",
    "title": "Get Text",
    "description": "<p>Gets the plain text of a document.</p> ",
    "permission": [
      {
        "name": "read"
      }
    ],
    "group": "Doc",
    "name": "GetText",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "as_html",
            "defaultValue": "false",
            "description": "<p>If true, returns formatted HTML instead of plain text.</p> "
          }
        ]
      }
    },
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example Usage",
        "content": "curl \"http://localhost:8000/api/v1/docs/2/text?auth_email=coagmento_demo@demo.demo&auth_password=demo&project_id=300&as_html=1\"",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": " {\n  \"status\": \"ok\",\n  \"errors\": {\n    \"input\": [],\n    \"general\": []\n  },\n  \"result\": {\n    \"text\": {\n      \"html\": \"<!DOCTYPE HTML><html><body>This is a test of getting text.</body></html>\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/DocController.php",
    "groupTitle": "Doc"
  },
  {
    "type": "post",
    "url": "/v1/pages",
    "title": "Create",
    "description": "<p>Creates a new page.</p> ",
    "permission": [
      {
        "name": "write"
      }
    ],
    "group": "Page",
    "name": "CreatePage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "project_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "url",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "title",
            "description": "<p>The contents of title in the page.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "if_query",
            "defaultValue": "both",
            "description": "<p>Used to determine the behavior when the url represents a search engine query page (e.g. https://www.google.com/search?q=test) This should be set to one of the following: 'page_only', 'query_only', or 'both'</p> "
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/PageController.php",
    "groupTitle": "Page"
  },
  {
    "type": "delete",
    "url": "/v1/pages/:id",
    "title": "Delete",
    "description": "<p>Deletes a single page.</p> ",
    "permission": [
      {
        "name": "write"
      }
    ],
    "group": "Page",
    "name": "DeletePage",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/PageController.php",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "/v1/pages/:id",
    "title": "Get",
    "description": "<p>Gets a single page.</p> ",
    "permission": [
      {
        "name": "read"
      }
    ],
    "group": "Page",
    "name": "GetPage",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/PageController.php",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "/v1/pages",
    "title": "Get Multiple",
    "description": "<p>Gets a list of pages. If the project_id is specified, returns all pages in a project (not just owned by user). If project_id is omitted, then returns all user owned pages.</p> ",
    "permission": [
      {
        "name": "read"
      }
    ],
    "group": "Page",
    "name": "GetPages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "project_id",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/PageController.php",
    "groupTitle": "Page"
  },
  {
    "type": "post",
    "url": "/v1/projects/",
    "title": "Create",
    "description": "<p>Creates a single project and sets the user as owner.</p> ",
    "group": "Project",
    "name": "CreateProject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>The project title.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": "<p>The project description.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "private",
            "defaultValue": "false",
            "description": "<p>Private projects are not publicly searchable.</p> "
          }
        ]
      }
    },
    "permission": [
      {
        "name": "write"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "/v1/projects/:id",
    "title": "Delete",
    "description": "<p>Deletes a project if the user is the owner.</p> ",
    "group": "Project",
    "name": "DeleteProject",
    "permission": [
      {
        "name": "owner"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "/v1/projects",
    "title": "Delete Projects",
    "description": "<p>Deletes multiple projects if the user is the owner.</p> ",
    "group": "Project",
    "name": "DeleteProjects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer[]</p> ",
            "optional": false,
            "field": "ids",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "owner"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/v1/projects/:id",
    "title": "Get",
    "description": "<p>Returns a single project and the user's membership. If the project is public, the user does not need any permissions.</p> ",
    "group": "Project",
    "name": "GetProject",
    "permission": [
      {
        "name": "read"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/v1/projects/:id/tags",
    "title": "Get Tags",
    "description": "<p>Get a list of all tags used in this project.</p> ",
    "group": "Project",
    "name": "GetProjectTags",
    "permission": [
      {
        "name": "read"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "/v1/projects",
    "title": "Get Multiple",
    "description": "<p>Returns a list of projects of which the user has membership.</p> ",
    "group": "Project",
    "name": "GetProjects",
    "permission": [
      {
        "name": "read"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "/v1/projects/:id/share",
    "title": "Share Project",
    "description": "<p>Share a project with another user. If the user is already a member, it will not overwrite their existing membership (to do so, use the Update Project Sharing endpoint).</p> ",
    "permission": [
      {
        "name": "own"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "user_id",
            "description": "<p>The id of the user (required if user_email is not present)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "user_email",
            "description": "<p>The email of the user (required if user_id is not present)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "permission",
            "description": "<p>Can be one of {w,r,o} representing write, read, and owner permissions.</p> "
          }
        ]
      }
    },
    "group": "Project",
    "name": "ShareProject",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "/v1/projects/:id/share",
    "title": "Delete Project Sharing",
    "description": "<p>Remove a user as a member of a project.</p> ",
    "permission": [
      {
        "name": "own"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "user_id",
            "description": "<p>The id of the user (required if user_email is not present)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "user_email",
            "description": "<p>The email of the user (required if user_id is not present)</p> "
          }
        ]
      }
    },
    "group": "Project",
    "name": "UnshareProject",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "/v1/projects/:id",
    "title": "Update",
    "description": "<p>Updates a project.</p> ",
    "group": "Project",
    "name": "UpdateProject",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>Boolean</p> ",
            "optional": true,
            "field": "private",
            "description": "<p>Whether or not the project is private or publically visible.</p> "
          }
        ]
      }
    },
    "permission": [
      {
        "name": "write"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "/v1/projects/:id/share",
    "title": "Update Project Sharing",
    "description": "<p>Change the permission level of sharing for a user.</p> ",
    "permission": [
      {
        "name": "own"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "user_id",
            "description": "<p>The id of the user (required if user_email is not present)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "user_email",
            "description": "<p>The email of the user (required if user_id is not present)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "permission",
            "description": "<p>Can be one of {w,r,o} representing write, read, and owner permissions.</p> "
          }
        ]
      }
    },
    "group": "Project",
    "name": "UpdateShareProject",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "/v1/queries",
    "title": "Create",
    "description": "<p>Creates a new query.</p> ",
    "permission": [
      {
        "name": "write"
      }
    ],
    "group": "Query",
    "name": "CreateQuery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "project_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "text",
            "description": "<p>The search engine query text.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "search_engine",
            "description": "<p>The name of the search engine (e.g. google, bing).</p> "
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/QueryController.php",
    "groupTitle": "Query"
  },
  {
    "type": "delete",
    "url": "/v1/queries/:id",
    "title": "Delete",
    "description": "<p>Deletes a single query.</p> ",
    "permission": [
      {
        "name": "write"
      }
    ],
    "group": "Query",
    "name": "DeleteQuery",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/QueryController.php",
    "groupTitle": "Query"
  },
  {
    "type": "get",
    "url": "/v1/queries",
    "title": "GetMultiple",
    "description": "<p>Gets many queries. If the project_id is specified, returns all queries in a project (not just owned by user). If project_id is omitted, then returns all user owned queries.</p> ",
    "permission": [
      {
        "name": "read"
      }
    ],
    "group": "Query",
    "name": "GetQueries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "project_id",
            "description": "<p>Filters by project if included.</p> "
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/QueryController.php",
    "groupTitle": "Query"
  },
  {
    "type": "post",
    "url": "/v1/snippets",
    "title": "Create",
    "description": "<p>Creates a new snippet.</p> ",
    "permission": [
      {
        "name": "write"
      }
    ],
    "group": "Snippet",
    "name": "CreateSnippet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "project_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "url",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "title",
            "description": "<p>The web page title.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "text",
            "description": "<p>The snippet contents.</p> "
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/SnippetController.php",
    "groupTitle": "Snippet"
  },
  {
    "type": "delete",
    "url": "/v1/snippets/:id",
    "title": "Delete",
    "description": "<p>Deletes a snippet</p> ",
    "permission": [
      {
        "name": "write"
      }
    ],
    "group": "Snippet",
    "name": "DeleteSnippet",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/SnippetController.php",
    "groupTitle": "Snippet"
  },
  {
    "type": "get",
    "url": "/v1/snippets/:id",
    "title": "Get",
    "description": "<p>Returns a single snippet</p> ",
    "permission": [
      {
        "name": "read"
      }
    ],
    "group": "Snippet",
    "name": "GetSnippet",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/SnippetController.php",
    "groupTitle": "Snippet"
  },
  {
    "type": "get",
    "url": "/v1/snippets",
    "title": "Get Multiple",
    "description": "<p>Returns multiple snippets</p> ",
    "permission": [
      {
        "name": "read"
      }
    ],
    "group": "Snippet",
    "name": "GetSnippets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>integer</p> ",
            "optional": true,
            "field": "project_id",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/SnippetController.php",
    "groupTitle": "Snippet"
  },
  {
    "type": "put",
    "url": "/v1/snippets/:id",
    "title": "Update",
    "permission": [
      {
        "name": "write"
      }
    ],
    "group": "Snippet",
    "name": "UpdateSnippet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "url",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "text",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/SnippetController.php",
    "groupTitle": "Snippet"
  },
  {
    "type": "post",
    "url": "/v1/users",
    "title": "Create",
    "description": "<p>Create a new user.</p> ",
    "group": "User",
    "name": "CreateUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v1/users/current",
    "title": "Get Current",
    "description": "<p>Get the currently logged in user.</p> ",
    "group": "User",
    "name": "GetLoggedIn",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v1/users",
    "title": "Get Multiple",
    "description": "<p>Get a list of multiple users. As of now, the constraints cannot be combined. If no constraints are provided, all users are returned.</p> ",
    "group": "User",
    "name": "GetMultipleUsers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": true,
            "field": "project_id",
            "description": "<p>Restrict to only users which are a member of this project. This returns both the users with their access level.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "email",
            "description": "<p>Find a user with this email.</p> "
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v1/users/:id",
    "title": "Get",
    "description": "<p>Get information about a user.</p> ",
    "group": "User",
    "name": "GetUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Integer</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The user id.</p> "
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "User"
  }
] });