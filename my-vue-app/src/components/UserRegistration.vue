<script setup lang="ts">
import { useTemplateRef, onMounted, watch } from "vue";
import { useField, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import { object, string, boolean, ref as yupRef } from "yup";
import { useStorage } from "@vueuse/core";


const { values, handleSubmit, isSubmitting, resetForm, meta } = useForm({
    validationSchema: toTypedSchema(
        object({
            fullName: string().min(3).required(),
            email: string().email().required(), 
            //Yup has a built-in email validator, no regex needed
            password: string().min(8).matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, "Must contain uppercase, lowercase, and a number").required(),
            confPassword: string().oneOf([yupRef("password")]).required(),
            //this^ is the Vue-idiomatic equivalent of React Hook Form's tracking tools, just handled at the schema level so VeeValidate never has to think about it
            role: string().notOneOf([""]).required(),
            terms: boolean().oneOf([true])
        })
    ),
});

const { value: fullName, errorMessage: fullNameError } = useField("fullName");
const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");
const { value: confPassword, errorMessage: confPasswordError } = useField("confPassword");
const { value: role, errorMessage: roleError } = useField("role");
const { value: terms, errorMessage: termsError } = useField("terms");

const fullNameRef = useTemplateRef("fullNameRef");

onMounted(() => {
    fullNameRef.value?.focus();
});

const state = useStorage("form-store", {
    fullName: "",
    email: "",
    password: "",
    confPassword: "",
    role: "",
    terms: false
});
//vueuse implements a reactive `ref` under the hood^
watch(values, (newValues) => {
    state.value = { ...newValues };
});
//make sure this^ "watch" line is *after* state is declared with `useStorage`
async function sleep() {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Waited 2 seconds');
}

const onSubmit = handleSubmit(async (values) => {
    await sleep();
    console.log("submit values: ", values);
    resetForm()
    state.value = { fullName: "", email: "", password: "", confPassword: "", role: "", terms: false }
});

</script>

<template>
    <form class="card-container"  @submit.prevent="onSubmit">
        <div class="row">0</div>
        <div class="form-inputs-group">
            <div class="input-container">
                <label class="my-label" for="full-name">Full Name:</label>
                <input class="my-input" 
                name="full-name" 
                type="text" 
                v-model="fullName"
                ref="fullNameRef"
                >
                <span v-if="fullNameError">{{fullNameError}}</span>
            </div>
            <div class="input-container">
                <label class="my-label" for="email">Email:</label>
                <input class="my-input" name="email" type="text" v-model="email">
                <span v-if="emailError">{{emailError}}</span>
            </div>
            <div class="input-container">
                <label class="my-label" for="password">Password:</label>
                <input class="my-input" name="password" type="text" v-model="password">
                <span v-if="passwordError">{{passwordError}}</span>
            </div>
            <div class="input-container">
                <label class="my-label" for="conf-password">Confirm Password:</label>
                <input class="my-input" name="conf-password" type="text" v-model="confPassword">
                <span v-if="confPasswordError">{{confPasswordError}}</span>
            </div>
            <div class="input-container">
                <label class="my-label" for="role">Role:</label>
                <select v-model="role">
                    <option disabled value="Choose your role">Please select one</option>
                    <option>Developer</option>
                    <option>Manager</option>
                    <option>Designer</option>
                    <option>Stakeholder</option>
                    <option>Lead</option>
                </select>
                <span v-if="roleError">{{roleError}}</span>
            </div>            
            <div class="input-container">
                <input type="checkbox" id="checkbox" v-model="terms" />
                <label class="my-label" for="checkbox"> ⬅️ I agree to the Terms & Conditions</label>
            </div>
            <span v-if="termsError">{{termsError}}</span>
        </div>
        <button :disabled="isSubmitting">{{isSubmitting? "Registering..." : "submit"}}</button>
    </form>

    <section class="user-registration">
        <p>{{state?.fullName}}</p>
        <p>{{state?.email}}</p>
        <p>{{state?.password}}</p>
        <p>{{state?.role}}</p>
        <p>{{`Terms accepted: ${state?.terms}`}}</p>
    </section>

</template>

<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    width: 60%;
    background-color: whitesmoke;
}
.row {
    border-bottom: 1px solid red;
    color: whitesmoke;
}
.form-inputs-group {
    margin: 0;
}
.input-container {
    border-bottom: 1px solid darkcyan;
    padding-left: 5ch;
}
.my-label {
    color: darkblue;
}
.my-input {
    background-color: whitesmoke;
    border: none;
}
.my-input:hover {
    border: none;
}
.my-input:active {
    border: none;
}
</style>
