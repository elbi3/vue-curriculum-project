
You will:
Use Vue's equivalent to React Form Hook, which is "Vee Validate" to:
Build a highly performant, client-side validated User Registration Form
We will also use `useStorage` from the `@vueuse/core` utility library with Vue's `watch` function to handle form values.  
Instead of RHF's `register`, `watch`, and `formState`, use `useForm`, `useField`, and `defineRule`.
1. install vee validate with `npm i vee-validate --save`
2. install Yup with `npm i yup` and also `npm i @vee-validate/yup`
3. create a UserRegistration component with an HTML "form" element
4. in `<script setup lang="ts">` import:
```js
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import { object, string, boolean } from "yup";
```
5. add the following fields with their labels to your form: Full Name, Email Address, Password, Confirm Password, `<select>` Role/Account Type, Terms & Conditions `checkbox` with and an error message layer:
```html
Full Name: String. Mandatory.
Email Address: String. Regex validated pattern.
Password: String. High security criteria.
Confirm Password: String. Must match the Password field explicitly.
Role/Account Type: Dropdown menu (<select>). Options: Select a role..., Developer, Designer, Product Manager.
Terms & Conditions: Single checkbox. Mandatory verification.
```
6. set up your `useForm` hook in script and include the validation schema.
7. wire up the fields with `useField`. For each input, call `useField('fieldName')`. This will return a `value` `ref` and an `errorMessage` `ref` for that named field.
8. elsewhere we have used `v-model` to connect inputs, let's do that here by assigning the fieldname to the input in the html attributes: `v-model="fullName"`. This will bind the input value to the VeeValidate value we just declared, and add our error display beneath each input with the `errorMessage`
9. add Yup validation rules to finish out sepcific field criteria, such as `.min(3)` on teh `fullName` field in the schema.
10. Once your validation schema matches all requirements, add your submit handler and bind it to your form submit. Use the `handleSubmit` from VeeValidate to wrap your async function. It will only be called if validation passes. 


[vee validate](https://vee-validate.logaretm.com/v4/guide/overview/)
[yup and vee-validate install](https://www.npmjs.com/package/@vee-validate/yup)
[vueuse useStorage](https://vueuse.org/core/useStorage/)