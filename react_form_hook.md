# User Registration Form with React Hook Form

Objective
In this assignment, you will build a highly performant, client-side validated User Registration Form using the industry-standard React Hook Form library. This exercise is designed to teach you how to move away from heavy state re-renders (controlled inputs) toward uncontrolled, ref-based form architectures that optimize performance, isolate validation rendering, and cleanly integrate with schema validation tools.

Learning Outcomes
By the end of this assignment, you will be able to:
- Register input fields using React Hook Form's register macro to eliminate manual input handlers.
- Implement real-time validation patterns directly within a registration scope.
- Utilize advanced built-in selectors like watch to dynamically cross-reference password parameters.
- Optimize UI rendering cycles by tracking form states (errors, isSubmitting, isValid) entirely via internal library subscriptions.
- Implement component mounting side-effects using setValue to load data asynchronously.

Assignment Specifications & Requirements

## Form Architecture & Fields
1. Your component must render a semantic HTML <form> containing the following fields. 
2. Each field must have an explicit label, a registered hook token, and a designated error message layer.
3. Setup the following 6 inputs:
```html
Full Name: String. Mandatory.
Email Address: String. Regex validated pattern.
Password: String. High security criteria.
Confirm Password: String. Must match the Password field explicitly.
Role/Account Type: Dropdown menu (<select>). Options: Select a role..., Developer, Designer, Product Manager.
Terms & Conditions: Single checkbox. Mandatory verification.
```

## Validation & Tracking Rules
Validation criteria must be declared inside your registration configurations:
4. Set up the following validation criteria:
```html
Full Name: Required. Minimum length of 3 characters.
Email: Required. Enforce a robust email regex validation rule.
Password: Required. Minimum 8 characters, must contain at least one uppercase letter, one lowercase letter, and one number.
Confirm Password: Required. You must use React Hook Form's tracking tools or a custom field validation rule to verify that this string matches the current value of the primary password input.
Role: Required. User must choose a valid option (cannot be empty placeholder string).
Terms: Required. Must evaluate to true.
```

## Advanced Requirements & Lifecycle
To test your integration skills with real-world architectural workflows:

5. Auto-Focus on Mount: Ensure that the Full Name field automatically gains focus when the component mounts. (Utilize React Hook Form's configuration rules or element attributes).

6. Draft Caching Profile: Synchronize user input with localStorage on modifications. Hint: Use the watch mechanism combined with a side-effect hook to update the browser storage without causing global interface lag.

7. Loading Lifecycle States: The submission layout button must automatically show a loading banner or read "Registering..." based on the status of the form's async submission flag.

8. Submission Reset: Upon successful resolution of a simulated 2-second API network delay, reset all fields to their clean defaults and flush the local storage cache.