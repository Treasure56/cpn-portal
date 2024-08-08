# Aptech - Center Point Network Portal

A web application portal for CPN-managed Aptech centers

## Stack
- Next.js
- React
- Tailwind
- Radix UI


## server actions
a server action is a function that runs on the server, can be used to perform database or featch operartions
- must have "use server" directive
- must be an asyn function
- has access to request and server functions like: cookies, headers, redirect, revalidateTag, revalidatePath etc

### Two types of server actions
1. Mutation (for submiting forms) 
- - takes two parameters : T and FormData
- - returns type T
- - can be used with useFormState() hook
- - [T, action] are the values returned from useFormState hook
- - action is asigned as the form action

2. Fetch for fetching data
- - can take parameters
- - may have a return type