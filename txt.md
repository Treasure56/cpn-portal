# procedures use to create server action

### in your utils folder create apis file "apis.ts"
- This page is where all the API endpoints related to authentication are defined.
- Each endpoint is defined with the following key-value pairs:
- Key: A descriptive name for the endpoint
- Value: The URL of the endpoint
- For example, `login` is defined as `${HOST}/auth/login`, which means that the login endpoint is located at `https://cpn-portal.onrender.com/api/auth/login`.

### in the utils folder again create index.ts file:
- for re-exporting eg `export {apis} from './apis'`
### create clientfetch.ts file
- This page is where all the methods related to making requests to the server are defined.
 - get: for making GET requests to the server
 - post: for making POST requests to the server
 - patch: for making PATCH requests to the server
 - put:
 - delete

### in the utils folder create cookies.ts file
- This page is where all the application's cookies are defined.

### in the src folder create the action folder:
- for all the server actions files

### inside the action folder create auth folder:
- for the authentication actions

### inside the auth folder create register.ts file
- must have "use server" directive
- must be an async function
- it will take parameters: T and formData
- T:
- - the type of the first (mostly unused parameter)
- - the return type of the server action `Promise<T>`
- - the type of the first value destructured from `useFormState` hook: [res:T, action]

### inside the register.ts file you have your schemas
-  for the registration or login form to specify the field and their validation rules
- fullname: a string that must be at least 3 characters long and cannot contain leading or trailing whitespace eg ` fullname: validators.fullname,` etc, Note validators from "validators.ts" file
### type FormType = z.infer<typeof schema>:
- to let zod decide a type from a schema

### to check if validation was successful:
- ` if(!validate.success) return {fieldErrors:validate.error.flatten().fieldErrors}`
- also check if password and comfirm password match
- `if(data.password !== data.confirmPassword) return {fieldErrors:{confirmPassword:["Passwords do not match"]}}`

### send data to the server
- using try catch block eg 
- redirect the user e.g ` if(success) redirect(paths.admin, RedirectType.replace) `


## in the main register.ts file inside app folder:
 - use the `  const [res, action] = useFormState(serverAction, {});` where res:T is the server action reponse, `action` is to be passed as the for action, `serverAction` is the name of the server action
 - give the form an action props eg " ` <form action={action}></form>`"
 - before the formFileds mapping add  your form messages to show the error or success messagea eg ` <FormMessage res={res} />` 
 - inside the appInput add the field error eg `error={res?.fieldErrors?.[item.name]}`
 


