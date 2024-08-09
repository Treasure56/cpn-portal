## fetch
* Inside your action folder create "fetch folder"
### inside the fetch folder create fetch server action file eg `fetchUsers.ts`

- export async function that will return type `Promise` of an ActionApiResponse containing an object eg `export async function fetchAdmin():Promise<ActionApiResponse<Admin>>`
### in your try catch block, 
-in the try block:
- make a request to fetch data eg `const req = await ServerRequest.get(apis.admin.getUser, {next: {tags: [tags.User]}})` Note get admin is the getUser is from the apis.ts file and "tags" from tags.ts
- get the response as json eg `const res = await req?.json()`
- check if the response was succesful (200) eg `if(res.status == 200) return res.data`
-  check if the user was not found (404) eg ` else if(res.status == 404) return null;` if there is any error `return error`
### in the catch block 
- console.log error and return "error"

## inside your CreateUsers.tsx 
- use the useFormState hook from react dom to manage the state of the form  
-  function is passed to useFormState as the first argument and an empty object is passed as the second argument
- give the form an action props eg " ` <form action={action}></form>`"
- pass the field error to the appInput

